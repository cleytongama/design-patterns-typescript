import { EmailValidatorAdpater } from './emailvalidator-adapter';
import { IEmailValidatorProtocol } from "./emailvalidator";


class Email {
    private validate: IEmailValidatorProtocol;

    constructor (emailValidator : IEmailValidatorProtocol){
        this.validate = emailValidator;
    }

    validaeEmail(email: string){
        if(this.validate.isEmail(email)){
            console.log("é email")
        }else{
            console.log("não é email")
        }
    }
}


const email = new Email(new EmailValidatorAdpater())


email.validaeEmail("cleytongama@gmail.com")

