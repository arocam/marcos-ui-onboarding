import styles from './form.module.css'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

export const FormInputs = () =>{
    const nameInput = useRef();
    const nameErrorMessageTag = useRef();
    let nameError = false;
    const checkNameLength = () =>{
        let inputName = nameInput;
        let errorNameMessage = nameErrorMessageTag;
        if(inputName.current.value.length > 2){
            inputName.current.style.borderColor = "#FFFFFF";
            inputName.current.style.color = "#FFFFFF";
            errorNameMessage.current.style.display = "none"
            nameError = false;
        }else{
            inputName.current.style.borderColor = "#FF7777";
            inputName.current.style.color = "#FF7777";
            errorNameMessage.current.style.display = "block"
            nameError = true;
        }
    }

    

    return(
        <div className={styles.form}>
            <form className={styles.inputs_container} onSubmit={e => e.preventDefault()}>
                {/* Nombre */}
                <div className={`${styles.input_container} ${styles.input_name_container}`}>
                    <input ref={nameInput} onKeyUp={checkNameLength} className={styles.form_input} type="text" placeholder="Nombre"/>
                    <div ref={nameErrorMessageTag} className={styles.error}>El nombre debe tener al menos 3 caracteres</div>
                </div>
                
                {/* Email */}
                <div className={`${styles.input_container} ${styles.input_email_container}`}>
                    <input className={styles.form_input} type="email" placeholder="Email"/>
                </div>

                {/* Razon */}
                <div className={`${styles.input_container} ${styles.input_reason_container}`}>
                    <select className={`${styles.form_input} ${styles.select_input}`} name="" id="">
                        <option className={`${styles.option__false} ${styles.option}`} value="" disabled selected>Razón</option>
                        <option className={`${styles.option__true} ${styles.option}`} value="">Colaboración</option>
                        <option className={`${styles.option__true} ${styles.option}`} value="">Incidencia</option>
                        <option className={`${styles.option__true} ${styles.option}`} value="">Otros</option>
                    </select>
                </div>
                {/* Descripcion */}
                <div className={`${styles.input_container} ${styles.input_description_container}`}>
                    <textarea className={`${styles.form_input} ${styles.textarea}`} placeholder="Descripción"></textarea>
                </div>
                {/* Terminos y condiciones */}
                <div className={styles.terms_cond}>
                    <input className={styles.checkbox} type="checkbox" /><p className={styles.accept_cond}>Acepto las <span className={styles.link_cond}><Link  href='https://www.spotify.com/es/legal/live-terms/'> condiciones legales</Link></span></p>
                </div>
                {/* Submit */}
                <div className={`${styles.input_container} ${styles.input_submit_container}`}>
                    <input className={`${styles.form_input} ${styles.form_input_submit}`} type="submit" />
                </div>
            </form>
        </div>
    )
}