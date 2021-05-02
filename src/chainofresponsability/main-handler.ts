import { BaseHandler } from "./base-handler";
import { Customer } from "./customer";

export class MainHandler extends BaseHandler{
    handler(budget: Customer): Customer{
       return super.handler(budget)
    }
}