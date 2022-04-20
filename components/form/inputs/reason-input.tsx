import { useEffect, useRef } from 'react'
import styles from './../form.module.css'
import { Hola } from '../../../public/assets/functions/form-verification'
import { Input } from '../../global/input'
import {ErrorMessage} from './../error-message'
import { MySelect } from '../../global/select'

export const InputReason = () => {
    // let e = 'WRONG';
    const reasonInput = useRef() as any;
    const reasonErrorMessageTag = useRef() as any;
    const checkReason = e => {
        Hola.values.selectOption = e;
        Hola.values.selectError = reasonErrorMessageTag.current;
        Hola.checkReason();
    }
    return(
        <div className={`${styles.input_container} ${styles.input_reason_container}`}>
            <MySelect selectClicked={(e)=>checkReason(e)} topic={["Razón"]} options={["Colaboración","Incidencia","Otros"]}></MySelect>
            <ErrorMessage ref={reasonErrorMessageTag} className={styles.error}>Debe seleccionar una razón.</ErrorMessage>
        </div>
    )
}