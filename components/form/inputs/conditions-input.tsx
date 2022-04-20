import { useEffect, useRef } from 'react'
import styles from './../form.module.css'
import Link from 'next/link'
import { Hola } from '../../../public/assets/functions/form-verification'
import { Input } from '../../global/input'
import {ErrorMessage} from '../error-message'
import { CheckedIcon } from '../../../public/assets/icons/checked'

export const InputConditions = () =>{
    const termsInput = useRef() as any;
    const termsErrorMessageTag = useRef() as any;
    const termsStateIndicator = useRef() as any;

    const changeStateIcon = () =>{
        if (termsStateIndicator.current.style.display == 'block') {
            termsStateIndicator.current.style.display = 'none';
        }else{
            termsStateIndicator.current.style.display = 'block';
        }
    }
    
    const checkTerms = () =>{
        Hola.values.termError = termsInput.current;
        Hola.values.termState =  termsErrorMessageTag.current;
        changeStateIcon()
        Hola.checkTerms();
    }
    
    return(
        <div className={styles.terms_cond}>
            <div onChange={checkTerms} className={styles.terms_input_container}>
                <div className={styles.checkbox_div}>
                    <input ref={termsInput} className={styles.checkbox} id="terms" type="checkbox" />
                    <label htmlFor="terms" className={styles.checkbox_activator}></label>
                    <div className={styles.checkbox_state_indicator} ref={termsStateIndicator}>
                        <CheckedIcon></CheckedIcon>
                    </div>
                </div>
                <p className={styles.accept_cond}>Acepto las <span className={styles.link_cond}>
                    <Link  href='https://www.spotify.com/es/legal/live-terms/'> condiciones legales</Link></span>
                </p>
            </div>
            <ErrorMessage ref={termsErrorMessageTag}>Acepte las condiciones legales para continuar.</ErrorMessage>
        </div>
    )
}