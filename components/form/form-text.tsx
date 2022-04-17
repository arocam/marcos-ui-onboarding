import styles from './form.module.css'
import { EnjoyH1 } from "../global/enjoy-h1"

export const FormText = () =>{
    return(
        <div className={styles.form_text_container}>
            <EnjoyH1></EnjoyH1>
            <p className={styles.paragraph}>Escríbenod en el siguiente formulario y un asesor se pondrá en contacto contigo</p>
        </div>
    )
}