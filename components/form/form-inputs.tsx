import styles from './form.module.css'
import { Hola } from '../../public/assets/functions/form-verification'
import { useRef, useState } from 'react'
import {ErrorMessage} from './error-message'
import { InputName } from './inputs/name-input'
import { InputEmail } from './inputs/email-input'
import { InputReason } from './inputs/reason-input'
import { InputDescription } from './inputs/description-input'
import { InputConditions } from './inputs/conditions-input'

export const FormInputs = () =>{
    const [selected, setSelected] = useState('');
    const formStateMessage = useRef() as any;
    const checkAll = () =>{
        if (Hola.checkName() === true && Hola.checkEmail() === true && Hola.checkDescription() === true && Hola.checkReason() === true && Hola.checkTerms() === true) {
            setSelected('¡Formulario enviado!');
            formStateMessage.current.style.color = "#FFFFFF";
            formStateMessage.current.style.display = "block"
            setTimeout(()=>{
                location.reload()
            }, 1000)
        } else{
            setSelected('Asegúrese de que todos los campos estén completos');
            formStateMessage.current.style.color = "#FF7777";
            formStateMessage.current.style.display = "block"
        }
    }
    /*eInput.style.color = "#FF7777";
        eError.style.display = "block"*/

    return(
        <div className={styles.form}>
            <form className={styles.inputs_container} onSubmit={e => e.preventDefault()}>
                <InputName></InputName>
                <InputEmail></InputEmail>   
                <InputReason></InputReason>
                <InputDescription></InputDescription>
                <InputConditions></InputConditions>
                <div>
                    <div className={`${styles.input_container} ${styles.input_submit_container}`}>
                        <button className={`${styles.form_input} ${styles.form_input_submit}`} type="submit" onClick={checkAll}>Enviar</button> {/*onClick={InputName.test.checkName}*/}
                    </div>
                    <div className={styles.form_error_message}>
                        <ErrorMessage ref={formStateMessage}>{selected}</ErrorMessage>
                    </div>
                </div>
            </form>
        </div>
    )
}