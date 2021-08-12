const cors = require("cors")
const express = require("express")
// require("dotenv").config()
const app = express()
const router = require("./routes/index")

//Middleware
app.use(cors())
app.use(express.json())

app.use("/api", router) //cuando se haga cualquier pedido de cualquier metodo a una ruta que empiece con "/api" ejecuta la funcion router. se pone a escuchar al router

app.listen(4000, () => console.log("Server running on port 4000"))