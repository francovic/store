const express = require( "express")

const router = express.Router()

router.get("/",(req, res) => {
  res.json(
   [ {
    name:"yamaha MT10",
    cilindraje:"150 a 250cc",
    precio:"10.000.000"
  },
  {
    name:"kawasaki Z1000",
    cilindraje:"4 cilindros de 1.043 cc y 142 cv de potencia ",
    precio:"76.000.000"
  },
  {
    name:"xtz 250",
    cilindraje:"249 cc o menos",
    precio:"20.000.000"
  },
  {
    name:"GSX 150 Suzuki",
    cilindraje:"147 cm3",
    precio:"10.900.000"
  },
  {
    name:"yamaha R6",
    cilindraje:"599 cc. Diámetro x carrera: 67 x 42.5 mm.",
    precio:"35.000.000"
  }]

  )
})

module.exports = router
