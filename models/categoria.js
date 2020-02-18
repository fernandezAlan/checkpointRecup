const S = require("sequelize");
const sequelize = require("../database/db");
const Models = S.Model;
class Categoria extends Models {};
Categoria.init({
            nombre:{
                    type:S.STRING,
                    allowNull:false
            }
        },
    { sequelize, modelName: 'categoria' }
)
module.exports= Categoria;

