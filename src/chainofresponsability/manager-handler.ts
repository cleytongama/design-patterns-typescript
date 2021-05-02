import { BaseHandler } from "./base-handler";
import { Customer } from "./customer";

export class ManagerHandler extends BaseHandler{
    handler(budget: Customer): Customer{
        // if(budget.total <= 5000){
            console.log('O manager tratou o orçamento');
            budget.approved = true;
            budget.sectorApproved =  'Manager';
            return super.handler(budget)
        // }
      
    }
}