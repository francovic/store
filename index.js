const express = require('express')
const routerApi = require('./routes')

const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.send("Hola mundo")
})

app.get("/patito feliz", (req, res) => {
  res.send("patito frliz")
})

routerApi(app)


app.listen(port, ()=>{
  console.log("Mi puerto es "+ port)
})
app.get("/:universalURL", (req, res) => {
  res.send("404 URL NOT FOUND");
});
