import styles from './form.module.css'
import Link from 'next/link'

export const FormInputs = () =>{
    return(
        <div className={styles.form}>
            <form className={styles.inputs_container}>
                <input className={styles.form_input} type="text" placeholder="Nombre"/>
                <input className={styles.form_input} type="email" placeholder="Email"/>
                <select className={styles.form_input} name="" id="">
                    <option className={`${styles.option__false} ${styles.option}`} value="" disabled selected>Razón</option>
                    <option className={`${styles.option__true} ${styles.option}`} value="">Colaboración</option>
                    <option className={`${styles.option__true} ${styles.option}`} value="">Incidencia</option>
                    <option className={`${styles.option__true} ${styles.option}`} value="">Otros</option>
                </select>
                <textarea className={`${styles.form_input} ${styles.textarea}`} placeholder="Descripción"></textarea>
                <div className={styles.terms_cond}>
                    <input className={styles.checkbox} type="checkbox" /><p className={styles.accept_cond}>Acepto las <span className={styles.link_cond}><Link  href='https://www.spotify.com/es/legal/live-terms/'> condiciones legales</Link></span></p>
                </div>
                <input className={`${styles.form_input} ${styles.form_input_submit}`} type="submit" />
            </form>
        </div>
    )
}