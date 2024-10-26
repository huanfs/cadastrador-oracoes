import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import {Prays} from "./models/modelPray.js";

const PORT = 8080;

const server = express();

server.use(bodyParser.json());
server.use(cors({
    origin:"http://localhost:3000"
}));

server.get("/", (req, res)=>{
    res.send("olá");
})
server.post("/add", async(req, res)=>{
    try{
        const saint = req.body.saint;
        const porpose = req.body.porpose;
        const pray = req.body.pray;
        const path = req.body.path;

        async function AddValues(){
            const Add = await Prays.create({
                saint:saint,
                porpose:porpose,
                pray:pray,
                path:path,
            })
            console.log("SERVER: valores adicionados ao banco de dados");
            res.send("Valores adicionados ao servidor!")
        }
        AddValues();
    }
    catch(err){
        console.log("SERVER: erro ao adicionar valores "+ err);
        res.send("SERVER ERROR: "+err);
    }
})

server.listen(PORT, ()=>{console.log("conectado ao servidor")})