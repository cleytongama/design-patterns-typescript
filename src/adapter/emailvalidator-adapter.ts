import  isEmail from 'validator/lib/isEmail';

import { IEmailValidatorProtocol } from './emailvalidator';

export class EmailValidatorAdpater implements IEmailValidatorProtocol{
    isEmail(value: string): boolean {
       return isEmail(value)
    }
}