import { BaseHandler } from "./base-handler";
import { Customer } from "./customer";

export class CeoHandler extends BaseHandler{
    handler(budget: Customer){
        console.log('O ceo trata qualquer orçamento')
        budget.approved = true;
        budget.sectorApproved = 'Ceo'
        return budget;
    }
}