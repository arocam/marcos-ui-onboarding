import { useEffect, useRef } from 'react'
import styles from './form.module.css'
import { Hola } from '../../public/assets/functions/functions'
import { Input } from './input'
import {ErrorMessage} from './error-message'

export const InputEmail = () =>{
    const emailInput = useRef() as any;
    const emailErrorMessageTag = useRef() as any;
    const checkEmail = () =>{Hola.checkEmail(emailInput.current, emailErrorMessageTag.current)}

    return(
        <div className={`${styles.input_container} ${styles.input_email_container}`}>
            <Input ref={emailInput} onKeyUp={checkEmail} type="email" placeholder="Email"></Input>
            <ErrorMessage ref={emailErrorMessageTag} className={styles.error}>Por favor, introduzca un formato de Email válido.</ErrorMessage>
        </div>
    )
}