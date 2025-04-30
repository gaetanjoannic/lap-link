const express = require('express')
const { Pool } = require('pg')
const router = express.Router()
const axios = require('axios')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})

router.get('/circuits', async (req, res) => {
  try {
    const result = await pool.query('SELECT c.id, c.name, c.location, c.description, c.length_meters, ST_AsGeoJSON(cp.position) AS position FROM circuits as c INNER JOIN circuit_points as cp ON c.id = cp.circuit_id WHERE cp.is_start = true;')

    // Transformer les données PostGIS
    const circuits = result.rows.map(row => {
      const positionData = JSON.parse(row.position)
      return {
        ...row,
        latitude: positionData.coordinates[1], // GeoJSON est [longitude, latitude]
        longitude: positionData.coordinates[0]
      }
    })

    res.json(circuits)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Erreur serveur' })
  }
})

router.get('/circuits/:id/weather', async (req, res) => {
  try {
    const circuitId = req.params.id

    // On récupère un point du circuit (typiquement le point de départ)
    const result = await pool.query(`
      SELECT ST_Y(position::geometry) AS latitude,
             ST_X(position::geometry) AS longitude
      FROM circuit_points
      WHERE circuit_id = $1 AND is_start = true
      LIMIT 1;
    `, [circuitId])

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Circuit non trouvé' })
    }

    const { latitude, longitude } = result.rows[0]

    // Appel à l'API OpenWeather
    const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY
    const weatherResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPENWEATHER_API_KEY}&units=metric`
    )

    res.json(weatherResponse.data)
  } catch (error) {
    console.error('Erreur:', error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
})

module.exports = router
