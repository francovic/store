const express = require( 'express')

const router = express.Router()


router.get("/motos", (req, res) => {
  res.json(
    [
      {
        name:"yamaha MT10",
      },
      {
        name:"kawasaki Z1000"
      },
      {
        name:"xtz 250"
      },
      {
        name:"GSX 150 Suzuki"
      },
      {
        name:"yamaha R6"
      }
    ]
  )
  })
  module.exports = router
