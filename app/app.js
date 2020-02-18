const sequelize = require("../database/db");
const express = require("express");
const app = express();
const routes = require("../routers/routers")


sequelize.sync({ force: true }).then(function(){
    console.log("base de datos lista!")
    app.listen(3000)
}).then(function(){
    console.log("escuchando en el puerto 3000")
})
app.use(express.json());
app.use("/productos",routes)