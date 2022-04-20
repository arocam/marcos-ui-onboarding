export const Hola = {
    values:{
        nameInput: '',
        nameError:'',
        emailInput: '',
        emailError: '',
        selectOption: '',
        selectError: '',
        descInput: '',
        descError: ''
    },
    checkName : () =>{
        const nameAllowedCharacters = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
        let eInput = Hola.values.nameInput as any;
        let eError = Hola.values.nameError as any;
        if(eInput != '' && eError != ''){
            if(eInput.value.length > 1 && eInput.value.match(nameAllowedCharacters)){
                eInput.style.borderColor = "#FFFFFF";
                eInput.style.color = "#FFFFFF";
                eError.style.display = "none"
                return true;
            }else{
                eInput.style.borderColor = "#FF7777";
                eInput.style.color = "#FF7777";
                eError.style.display = "block"
                return false;
            }
        } else{
            return 'incomplete';
        }
        },
    checkEmail:()=>{
        const emailAllowedCharacters = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        let eInput = Hola.values.emailInput as any;
        let eError = Hola.values.emailError as any;
        if(eInput != '' && eError != ''){
            if( eInput.value[0] != "." && eInput.value.match(emailAllowedCharacters)){
                eInput.style.borderColor = "#FFFFFF";
                eInput.style.color = "#FFFFFF";
                eError.style.display = "none"
                return true;
            }else{
                eInput.style.borderColor = "#FF7777";
                eInput.style.color = "#FF7777";
                eError.style.display = "block"
                return false;
            }
        } else{
            return 'incomplete';
        }
        
    },
    checkReason: () =>{
        let eInput = Hola.values.selectOption as any;
        let eError = Hola.values.selectError as any;
        if(eError != '' ){
            if (eInput != 'Razón') {
                eError.style.display = "none"
                return true;
            }else{
                eError.style.display = "block"
                return false;
            }
        } else{
            return 'incomplete';
        }
    },
    checkDescription: ()=>{
        let eInput = Hola.values.descInput as any;
        let eError = Hola.values.descError as any;
        // console.log(eInput.value);
        if(eInput != '' && eError != ''){
            if(eInput.value.length > 0){
                eInput.style.borderColor = "#FFFFFF";
                eInput.style.color = "#FFFFFF";
                eError.style.display = "none"
                return true;
            }else{
                eInput.style.borderColor = "#FF7777";
                eInput.style.color = "#FF7777";
                eError.style.display = "block"
                return false;
            }
        }else{
            return 'incomplete';
        }
    }
        

}