import { Customer } from "./customer";

export abstract class BaseHandler {

    protected nextHandler: BaseHandler | null = null;

    setNextHandler(handler : BaseHandler): BaseHandler{
        this.nextHandler  = handler;
        return handler;
    }

    handler(budget: Customer):Customer{
        if(this.nextHandler) return this.nextHandler.handler(budget)
        return budget;
    }
}

