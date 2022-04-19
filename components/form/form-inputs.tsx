import styles from './form.module.css'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { Input } from './input'
import { Hola } from '../../public/assets/functions/functions'
import {ErrorMessage} from './error-message'
import { InputName } from './name-input'
import { InputEmail } from './email-input'
import { InputReason } from './reason-input'
import { InputDescription } from './description-input'
import { InputConditions } from './conditions-input'

export const FormInputs = () =>{
    const checkAll = () =>{
        //   :)
    }

    return(
        <div className={styles.form}>
            <form className={styles.inputs_container} onSubmit={e => e.preventDefault()}>
                <InputName></InputName>
                <InputEmail></InputEmail>
                <InputReason></InputReason>
                <InputDescription></InputDescription>
                <InputConditions></InputConditions>
                <div className={`${styles.input_container} ${styles.input_submit_container}`}>
                    <button className={`${styles.form_input} ${styles.form_input_submit}`} type="submit">Enviar</button> {/*onClick={InputName.test.checkName}*/}
                </div>
            </form>
        </div>
    )
}