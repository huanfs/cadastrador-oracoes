import styles from "./messageStatus.module.css";

import { IoMdCloseCircle } from "react-icons/io";

export default function MessageStatus({status, close}){
    return(
        <article 
        className={styles.messageStatus}
        style={{backgroundColor:status==="var(--RedError)"?"green":"var(--GreenSuccess)"}}>
            <button 
            type="button"
            onClick={()=>{close(null)}}><IoMdCloseCircle/></button>
            <span>
                {
                    status != "sucesso" ? "Erro na operação" : "Operação bem sucedida!"
                }
            </span>
        </article>
    )
}