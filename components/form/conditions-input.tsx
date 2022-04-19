import { useEffect, useRef } from 'react'
import styles from './form.module.css'
import Link from 'next/link'
import { Hola } from '../../public/assets/functions/functions'
import { Input } from './input'
import {ErrorMessage} from './error-message'

export const InputConditions = () =>{
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
    
    return(
        <div className={styles.terms_cond}>
            <div className={styles.terms_input_container}><input ref={termsInput} className={styles.checkbox} type="checkbox" /><p className={styles.accept_cond}>Acepto las <span className={styles.link_cond}><Link  href='https://www.spotify.com/es/legal/live-terms/'> condiciones legales</Link></span></p></div>
            <ErrorMessage ref={termsErrorMessageTag} className={styles.error}>Acepte las condiciones legales para continuar.</ErrorMessage>
        </div>
    )
}