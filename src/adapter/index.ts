import { EmailValidatorAdpater } from './emailvalidator-adapter';
import { IEmailValidatorProtocol } from "./emailvalidator";

function validaEmail(emailValidator:IEmailValidatorProtocol, email: string){
    if(emailValidator.isEmail(email)){
        console.log("é email")
    }else{
        console.log("não é email")
    }
}

validaEmail(new EmailValidatorAdpater(), 'cleytongama@gmail.com') 