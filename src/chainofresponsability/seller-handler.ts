import { BaseHandler } from "./base-handler";
import { Customer } from "./customer";

export class SellerHandler extends BaseHandler{
    handler(budget: Customer): Customer{
        // if(budget.total <= 1000){
        console.log('O Seller trata o orçamento');
        budget.approved = true;
        budget.sectorApproved =  'Seller';
        return super.handler(budget)
        // }
       return super.handler(budget)
    }
}