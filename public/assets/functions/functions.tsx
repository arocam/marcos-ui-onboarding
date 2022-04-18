export const Hola = {
    msgConsola : () =>{
        console.log('asd');
    },
    checkName : (eInput: any, eError: any) =>{
            const nameAllowedCharacters = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
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
        },
    checkEmail:(eInput: any, eError: any)=>{
        const emailAllowedCharacters = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
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
    }

}