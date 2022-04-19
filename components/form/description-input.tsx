import { useEffect, useRef } from 'react'
import styles from './form.module.css'
import { Hola } from '../../public/assets/functions/functions'
import { Input } from './input'
import {ErrorMessage} from './error-message'

export const InputDescription = () =>{
    const descriptionInput = useRef() as any;
    const descriptionErrorMessageTag = useRef() as any;
    const checkDescription = () =>{
        let inputDescription = descriptionInput;
        let errorDescriptionMessage =  descriptionErrorMessageTag;
        if(inputDescription.current.value.length > 0){
            inputDescription.current.style.borderColor = "#FFFFFF";
            inputDescription.current.style.color = "#FFFFFF";
            errorDescriptionMessage.current.style.display = "none"
            return true;
        }else{
            inputDescription.current.style.borderColor = "#FF7777";
            inputDescription.current.style.color = "#FF7777";
            errorDescriptionMessage.current.style.display = "block"
            return false;
        }
    }
    
    return(
        <div className={`${styles.input_container} ${styles.input_description_container}`}>
            <textarea ref={descriptionInput}  onKeyUp={checkDescription} className={`${styles.form_input} ${styles.textarea}`} placeholder="Descripción"></textarea>
            <ErrorMessage ref={descriptionErrorMessageTag} className={styles.error}>Debe incluir una descripción.</ErrorMessage>
        </div>
    )
}