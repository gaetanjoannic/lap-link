const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors({ origin: '*' }))
app.use(express.json())

const routerCircuits = require('./routes/circuits')

app.use(routerCircuits)

const PORT = process.env.PORT || 3000
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Serveur démarré sur le port ${PORT}`)
})

module.exports = app
