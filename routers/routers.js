const Producto = require("../models/productos")
const Categoria = require("../models/categoria")
const express = require("express");
const route = express.Router()



route.get("/",function(req,res,next){
    Producto.findAll().then(function(productos){
        res.json(productos)
    })
})

route.post("/",function(req,res,next){
    Producto.create(req.body).then(function(productos){
        res.json(productos)
    })
})

route.post("/categorias",function(req,res,next){
    console.log(req.body)
    Categoria.create(req.body).then(function(cat){
        res.json(cat)
    })
})
route.post("/:genero",function(req,res,next){
    
    Categoria.findAll({where:
        {nombre:req.params.genero}})
        .then(function(categoria){
            
            Producto.create(req.body)
            .then(function(productoCreado){
                productoCreado.setCategoria(categoria[0])
                .then(function(){
                    console.log("listo!")
                })
            })
        })
    })
              
              

route.get("/:id",function(req,res,next){
        Producto.findByPk(req.params.id).then(function(productos){
            res.json(productos)
        })
    })  
  

route.delete("/:id",function(req,res,next){
    Producto.destroy({where:{id:req.params.id}}).then(function(productos){
        res.json("deleted")
    })
}) 


route.put("/:id",function(req,res,next){
    Producto.update(req.body,{
        where:{
            id:req.params.id
        }})
.then(function(){
    res.send("updated")
})
})










module.exports= route;

/*
{
    "nombre":"TLOR",
    "precio":220,
    "descripcion":"asdfghjlbñvfkgkdjfkjekrjekrnekr"
}
{
    "nombre":"fantasia"
   
}*/