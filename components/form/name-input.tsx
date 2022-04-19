import { useEffect, useRef } from 'react'
import styles from './form.module.css'
import { Hola } from '../../public/assets/functions/functions'
import { Input } from './input'
import {ErrorMessage} from './error-message'

export const InputName = () =>{
    const nameInput = useRef() as any;
    const nameErrorMessageTag = useRef() as any;
    const checkName = () =>{Hola.checkName(nameInput.current, nameErrorMessageTag.current)}

    return(
        <div className={`${styles.input_container} ${styles.input_name_container}`}>
            <Input ref={nameInput} onKeyUp={checkName} type="text" placeholder="Nombre"></Input>
            <ErrorMessage ref={nameErrorMessageTag}>El nombre debe tener al menos 2 caracteres y no debe contener símbolos especiales o números.</ErrorMessage>
        </div>
    )
}