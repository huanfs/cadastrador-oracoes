import Sequelize from "sequelize";

import {sequelize} from "../db/db.js";

export const Prays = sequelize.define("prays",{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true,
    },
    saint:{
        type: Sequelize.STRING,
    },
    porpose:{
        type:Sequelize.TEXT,
    },
    pray:{
        type:Sequelize.TEXT,
    },
    path:{
        type:Sequelize.STRING,
    },
})