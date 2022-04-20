import { useEffect, useRef } from 'react'
import styles from './../form.module.css'
import { Hola } from '../../../public/assets/functions/form-verification'
import { Input } from '../../global/input'
import {ErrorMessage} from './../error-message'

export const InputName = () =>{
    const nameInput = useRef() as any;
    const nameErrorMessageTag = useRef() as any;
    const checkName = () =>{
        Hola.values.nameInput = nameInput.current;
        Hola.values.nameError = nameErrorMessageTag.current;
        Hola.checkName();
    }

    return(
        <div className={`${styles.input_container} ${styles.input_name_container}`}>
            <Input ref={nameInput} onKeyUp={checkName} type="text" placeholder="Nombre"></Input>
            <ErrorMessage ref={nameErrorMessageTag}>El nombre debe tener al menos 2 caracteres y solo debe contener letras.</ErrorMessage>
        </div>
    )
}