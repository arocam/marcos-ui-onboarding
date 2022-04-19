import { useEffect, useRef } from 'react'
import styles from './form.module.css'
import { Hola } from '../../public/assets/functions/functions'
import { Input } from './input'
import {ErrorMessage} from './error-message'

export const InputReason = () => {
    const reasonInput = useRef() as any;
    const reasonErrorMessageTag = useRef() as any;
    const checkReason = () => {
        let inputReason = reasonInput;
        let errorReasonMessage =  reasonErrorMessageTag;
        if( inputReason.current.value != "none" ){
            inputReason.current.style.borderColor = "#FFFFFF";
            inputReason.current.style.color = "#FFFFFF";
            errorReasonMessage.current.style.display = "none"
            return true;
        }else{
            inputReason.current.style.borderColor = "#FF7777";
            inputReason.current.style.color = "#FF7777";
            errorReasonMessage.current.style.display = "block"
            return false;
        }
    }
    
    return(
        <div className={`${styles.input_container} ${styles.input_reason_container}`}>
            <select onChange={checkReason} ref={reasonInput} className={`${styles.form_input} ${styles.select_input}`} name="" id="">
                <option className={`${styles.option__false} ${styles.option}`} value="none" disabled selected>Razón</option>
                <option className={`${styles.option__true} ${styles.option}`} value="colaboration">Colaboración</option>
                <option className={`${styles.option__true} ${styles.option}`} value="incidence">Incidencia</option>
                <option className={`${styles.option__true} ${styles.option}`} value="others">Otros</option>
            </select>
            <ErrorMessage ref={reasonErrorMessageTag} className={styles.error}>Debe seleccionar una razón.</ErrorMessage>
        </div>
    )
}