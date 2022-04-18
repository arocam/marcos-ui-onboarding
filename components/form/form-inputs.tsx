import styles from './form.module.css'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

export const FormInputs = () =>{
    //NAME CHECK
    const nameInput = useRef() as any;
    const nameErrorMessageTag = useRef() as any;
    let nameError = true;
    const checkName = () =>{
        let inputName = nameInput;
        let errorNameMessage = nameErrorMessageTag;
        let nameAllowedCharacters = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
        if(inputName.current.value.length > 1 && inputName.current.value.match(nameAllowedCharacters)){
            inputName.current.style.borderColor = "#FFFFFF";
            inputName.current.style.color = "#FFFFFF";
            errorNameMessage.current.style.display = "none"
            return true;
        }else{
            inputName.current.style.borderColor = "#FF7777";
            inputName.current.style.color = "#FF7777";
            errorNameMessage.current.style.display = "block"
            return false;
        }
    }
    //EMAIL CHECK
    const emailInput = useRef() as any;
    const emailErrorMessageTag = useRef() as any;
    let emailError = true;
    const checkEmail = () =>{
        let inputEmail = emailInput;
        let errorEmailMessage =  emailErrorMessageTag;
        const emailAllowedCharacters = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if( inputEmail.current.value[0] != "." && inputEmail.current.value.match(emailAllowedCharacters)){
            inputEmail.current.style.borderColor = "#FFFFFF";
            inputEmail.current.style.color = "#FFFFFF";
            errorEmailMessage.current.style.display = "none"
            return true;
        }else{
            inputEmail.current.style.borderColor = "#FF7777";
            inputEmail.current.style.color = "#FF7777";
            errorEmailMessage.current.style.display = "block"
            return false;
        }
    }
    //READON CHECK
    const reasonInput = useRef() as any;
    const reasonErrorMessageTag = useRef() as any;
    let reasonError = true;
    const checkReason = () => {
        let inputReason = reasonInput;
        let errorReasonMessage =  reasonErrorMessageTag;
        if( inputReason.current.value != "none" ){
            inputReason.current.style.borderColor = "#FFFFFF";
            inputReason.current.style.color = "#FFFFFF";
            errorReasonMessage.current.style.display = "none"
            return true;
        }else{
            inputReason.current.style.borderColor = "#FF7777";
            inputReason.current.style.color = "#FF7777";
            errorReasonMessage.current.style.display = "block"
            return false;
        }
    }
    //DESCRIPTION CHECK
    const descriptionInput = useRef() as any;
    const descriptionErrorMessageTag = useRef() as any;
    let descriptionError =  true;
    const checkDescription = () =>{
        let inputDescription = descriptionInput;
        let errorDescriptionMessage =  descriptionErrorMessageTag;
        if(inputDescription.current.value.length > 0){
            inputDescription.current.style.borderColor = "#FFFFFF";
            inputDescription.current.style.color = "#FFFFFF";
            errorDescriptionMessage.current.style.display = "none"
            return true;
        }else{
            inputDescription.current.style.borderColor = "#FF7777";
            inputDescription.current.style.color = "#FF7777";
            errorDescriptionMessage.current.style.display = "block"
            return false;
        }
    }

    //TERMS AND CONDITIONS CHECK
    const termsInput = useRef() as any;
    const termsErrorMessageTag = useRef() as any;
    let termsError = true;
    const checkTerms = () =>{
        let inputTerms = termsInput;
        let errorTermsMessage =  termsErrorMessageTag;
        if(inputTerms.current.checked){
            inputTerms.current.style.borderColor = "#FFFFFF";
            inputTerms.current.style.color = "#FFFFFF";
            errorTermsMessage.current.style.display = "none"
            return true;
        }else{
            inputTerms.current.style.borderColor = "#FF7777";
            inputTerms.current.style.color = "#FF7777";
            errorTermsMessage.current.style.display = "block"
            return false;
        }
    }

    //CHECK ALL BEFORE SUBMIT
    const checkAll = () =>{
        checkName();
        checkEmail();
        checkReason();
        checkDescription();
        checkTerms();

        if(checkName()&&
        checkEmail()&&
        checkReason()&&
        checkDescription()&&
        checkTerms()){
            alert('Mensaje enviado! Pronto alguien de nuestro equipo se pondrá en contacto contigo!');
            setTimeout(()=>{
                location.reload();
            }, 500)
        }
    }

    return(
        <div className={styles.form}>
            <form className={styles.inputs_container} onSubmit={e => e.preventDefault()}>
                {/* Nombre */}
                <div className={`${styles.input_container} ${styles.input_name_container}`}>
                    <input ref={nameInput} onKeyUp={checkName} className={styles.form_input} type="text" placeholder="Nombre"/>
                    <div ref={nameErrorMessageTag} className={styles.error}>El nombre debe tener al menos 2 caracteres y no debe contener símbolos especiales o números.</div>
                </div>
                
                {/* Email */}
                <div className={`${styles.input_container} ${styles.input_email_container}`}>
                    <input ref={emailInput} onKeyUp={checkEmail} className={styles.form_input} type="email" placeholder="Email"/>
                    <div ref={emailErrorMessageTag} className={styles.error}>Por favor, introduzca un formato de Email válido.</div>
                </div>

                {/* Razon */}
                <div className={`${styles.input_container} ${styles.input_reason_container}`}>
                    <select onChange={checkReason} ref={reasonInput} className={`${styles.form_input} ${styles.select_input}`} name="" id="">
                        <option className={`${styles.option__false} ${styles.option}`} value="none" disabled selected>Razón</option>
                        <option className={`${styles.option__true} ${styles.option}`} value="colaboration">Colaboración</option>
                        <option className={`${styles.option__true} ${styles.option}`} value="incidence">Incidencia</option>
                        <option className={`${styles.option__true} ${styles.option}`} value="others">Otros</option>
                    </select>
                    <div ref={reasonErrorMessageTag} className={styles.error}>Debe seleccionar una razón.</div>
                </div>
                {/* Descripcion */}
                <div className={`${styles.input_container} ${styles.input_description_container}`}>
                    <textarea ref={descriptionInput}  onKeyUp={checkDescription} className={`${styles.form_input} ${styles.textarea}`} placeholder="Descripción"></textarea>
                    <div ref={descriptionErrorMessageTag} className={styles.error}>Debe incluir una descripción.</div>
                </div>
                {/* Terminos y condiciones */}
                <div className={styles.terms_cond}>
                    <div className={styles.terms_input_container}><input ref={termsInput} className={styles.checkbox} type="checkbox" /><p className={styles.accept_cond}>Acepto las <span className={styles.link_cond}><Link  href='https://www.spotify.com/es/legal/live-terms/'> condiciones legales</Link></span></p></div>
                    <div ref={termsErrorMessageTag} className={styles.error}>Acepte las condiciones legales para continuar.</div>
                </div>
                {/* Submit */}
                <div className={`${styles.input_container} ${styles.input_submit_container}`}>
                    <button className={`${styles.form_input} ${styles.form_input_submit}`} type="submit" onClick={checkAll}>Enviar</button>
                </div>
            </form>
        </div>
    )
}