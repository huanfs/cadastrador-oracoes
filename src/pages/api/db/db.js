import Sequelize from "sequelize";

export const sequelize = new Sequelize("prays","root","shavershian",{
    host:"localhost",
    dialect:"mysql",
})