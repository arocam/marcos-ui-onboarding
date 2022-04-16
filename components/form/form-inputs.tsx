import styles from './form.module.css'
import Link from 'next/link'

export const FormInputs = () =>{
    return(
        <div className={styles.inputs_container}>
            <input type="text" placeholder="Nombre"/>
            <input type="email" placeholder="Email"/>
            <select name="" id="">
                <option value="" disabled selected>Razón</option>
                <option value="">Colaboración</option>
                <option value="">Incidencia</option>
                <option value="">Otros</option>
            </select>
            <textarea name="" id="" className={styles.textarea}></textarea>
            <input type="submit" />
            <div className={styles.terms_cond}>
                <input type="checkbox" className={styles.terms_input}/><p>Acepto las </p><Link href='asd'>condiciones legales</Link>
            </div>
        </div>
    )
}