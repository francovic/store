const productRouter = require("./products.router")
const motosRouter = require("./motos.router")

function routerApi(app){
  app.use("/products", productRouter )
  app.use("/motos", motosRouter )
}


module.exports = routerApi
