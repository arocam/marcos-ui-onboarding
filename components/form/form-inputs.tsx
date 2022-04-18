import styles from './form.module.css'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

export const FormInputs = () =>{
    const expressions = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    }
    const nameInput = useRef();
    const emailInput = useRef();
    const reasonInput = useRef();
    const descriptionInput = useRef();
    const conditionsInput = useRef();
    
    return(
        <div className={styles.form}>
            <form className={styles.inputs_container}>
                {/* Nombre */}
                <input className={styles.form_input} type="text" ref={nameInput} placeholder="Nombre"/>
                {/* Email */}
                <input className={styles.form_input} type="email" ref={emailInput} placeholder="Email"/>
                {/* Razon */}
                <select className={`${styles.form_input} ${styles.select_input}`} ref={reasonInput} name="" id="">
                    <option className={`${styles.option__false} ${styles.option}`} value="" disabled selected>Razón</option>
                    <option className={`${styles.option__true} ${styles.option}`} value="">Colaboración</option>
                    <option className={`${styles.option__true} ${styles.option}`} value="">Incidencia</option>
                    <option className={`${styles.option__true} ${styles.option}`} value="">Otros</option>
                </select>
                {/* Descripcion */}
                <textarea className={`${styles.form_input} ${styles.textarea}`} ref={descriptionInput} placeholder="Descripción"></textarea>
                {/* Terminos y condiciones */}
                <div className={styles.terms_cond}>
                    <input ref={conditionsInput} className={styles.checkbox} type="checkbox" /><p className={styles.accept_cond}>Acepto las <span className={styles.link_cond}><Link  href='https://www.spotify.com/es/legal/live-terms/'> condiciones legales</Link></span></p>
                </div>
                {/* Submit */}
                <input className={`${styles.form_input} ${styles.form_input_submit}`} type="submit" />
            </form>
        </div>
    )
}