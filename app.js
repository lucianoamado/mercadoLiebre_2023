const express = require("express")
const path = require("path")
const app = express()
const pathStatic = path.resolve(__dirname,"./public")

app.use(express.static(pathStatic))

app.listen(3500,()=>console.log("Servidor corriendo en el puerto 3500"))

app.get("/",(req,res)=>{
    res.sendFile(path.resolve("./views/home.html"))
})

app.get("/register",(req,res)=>{
    res.sendFile(path.resolve("./views/register.html"))
})

app.get("/login",(req,res)=>{
    res.sendFile(path.resolve("./views/login.html"))
})