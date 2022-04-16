import styles from './form.module.css'
import { FormText } from './form-text'
import { FormInputs } from './form-inputs'

export const Form = () =>{
    return(
        <div className={styles.form_bg}>
            <div className={styles.form_container}>
                <FormText></FormText>
                <FormInputs></FormInputs>
            </div>
        </div>
    )
}