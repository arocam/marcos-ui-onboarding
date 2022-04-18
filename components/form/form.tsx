import styles from './form.module.css'
import { FormText } from './form-text'
import { FormInputs } from './form-inputs'

export const Form = () =>{
    return(
        <div className={styles.form_bg} id="form">
            <div className={styles.form_container}>
                <div className={styles.blue}>
                <FormText></FormText>
                </div>
                <div className={styles.red}>
                <FormInputs></FormInputs>
                </div>

            </div>
        </div>
    )
}