import { useEffect, useRef } from 'react'
import styles from './../form.module.css'
import { Hola } from '../../../public/assets/functions/form-verification'
import {ErrorMessage} from './../error-message'
import { MyTextArea } from '../../global/textarea'

export const InputDescription = () =>{
    const descriptionInput = useRef() as any;
    const descriptionErrorMessageTag = useRef() as any;
    const checkDescription = () =>{
        Hola.values.descInput = descriptionInput.current;
        Hola.values.descError = descriptionErrorMessageTag.current;
        console.log(descriptionInput.current.value);
        Hola.checkDescription();
    }
    
    return(
        <div className={styles.input_container}>
            <MyTextArea ref={descriptionInput} onKeyUp={checkDescription} placeholder="Descripción"></MyTextArea>
            <ErrorMessage ref={descriptionErrorMessageTag} className={styles.error}>Debe incluir una descripción.</ErrorMessage>
        </div>
    )
}