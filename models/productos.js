const S = require("sequelize");
const sequelize = require("../database/db");
const Models = S.Model;
const Categoria = require("./categoria")
class Producto extends Models {};
Producto.init({
    nombre:{
        type:S.STRING,
        allowNull:false
    },
    precio: {
        type:S.INTEGER
    },
    descripcion :{
        type:S.TEXT,
        allowNull:false,
        get(){
            return this.getDataValue("descripcion").slice(0,20)+ "..."
        }
    },
    disponible:{
       type: S.BOOLEAN,
       defaultValue:true
    },
   
},{ sequelize, modelName: 'producto' })

Producto.addHook("beforeCreate",function(producto){
    if(!producto.disponible){
        producto.nombre= producto.getDataValue("nombre") + " NO DISPONIBLE"
    }
})


    Producto.belongsTo(Categoria,{ as: "categoria" })



module.exports= Producto;
    

