const express = require('express')
const { Pool } = require('pg')
const router = express.Router()

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

router.get('/circuits/:id', async (req, res) => {
  try {
    const circuitId = req.params.id

    const result = await pool.query(`
      SELECT c.id, c.name, c.location, c.description, c.length_meters, ST_AsGeoJSON(cp.position) AS position FROM circuits as c 
      INNER JOIN circuit_points as cp ON c.id = cp.circuit_id 
      WHERE cp.is_start = true AND c.id = $1;
    `, [circuitId])

    const circuits = result.rows.map(row => {
      const positionData = JSON.parse(row.position)
      return {
        ...row,
        latitude: positionData.coordinates[1],
        longitude: positionData.coordinates[0]
      }
    })

    res.json(circuits)
  } catch (error) {
    console.error('Erreur:', error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
})

module.exports = router
