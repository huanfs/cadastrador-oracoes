"use client";

import React,{ useState, useEffect, useRef } from "react";

import styles from "./formulary.module.css";

import MessageStatus from "../messageStatus/messageStatus.js";

export default function Formulary(){

    const[saint, setSaint] = useState(null);
    const[porpose, setPorpose] = useState(null);
    const[pray, setPray] = useState(null);
    const[path, setPath] = useState(null);

    const[status, setStatus] = useState(null);

    const saintField = useRef(null);
    const porposeField = useRef(null);
    const prayField = useRef(null);
    const pathField = useRef(null);

    useEffect(()=>{
        setSaint(null);
        setPorpose(null);
        setPray(null);
        setPath(null);
        saintField.current.value="";
        porposeField.current.value="";
        prayField.current.value="";
        pathField.current.value="/images/covers/";
    },[status])

    async function SaveData(event){
        event.preventDefault();
        const data = {
            saint:saint,
            porpose:porpose,
            pray:pray,
            path:path,
        }
        try{
            const SendData = await fetch("https://cadastrador-oracoes.vercel.app/add",{
                method:"POST",
                body:JSON.stringify(data),
                headers:{
                    "Content-type":"application/json",
                }
            })
            setStatus("sucesso")
        }
        catch(err){
            setStatus(err);
        }
    }


    return(
        <>
        <form action="POST" className={styles.form}>
            <label htmlFor="saint">santo:</label>
            <input 
            type="text" 
            id="saint" 
            onChange={(event)=>{setSaint(event.target.value)}}
            ref={saintField}/>

            <label htmlFor="porpose">propósito:</label>
            <textarea id="porpose" 
            onChange={(event)=>{setPorpose(event.target.value)}}
            ref={porposeField}></textarea>

            <label htmlFor="pray">oração:</label>
            <textarea id="pray" 
            onChange={(event)=>{setPray(event.target.value)}}
            ref={prayField}></textarea>

            <label htmlFor="path">capa:</label>
            <input type="text" 
            defaultValue="/images/covers/" 
            id="path" 
            onChange={(event)=>{setPath(event.target.value)}}
            ref={pathField}/>

            <button 
            type="submit" 
            onClick={SaveData}>salvar</button>
        </form>
        {
            status != null && (
                <MessageStatus status={status} close={setStatus}/>
            )
        }
        </>
    )
}