const cors = require("cors")
const express = require("express")
const passport = require("passport")
require("dotenv").config()
require("./config/database")
require("./config/passport")
const app = express()
const router = require("./routes/index")
const path = require("path")

//Middleware
app.use(cors())
app.use(express.json())
app.use("/api", router) 

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname + "/client/build/index.html"))
    })
}


app.listen(process.env.PORT || 4000, '0.0.0.0',()=>console.log('Running on port 4000'))