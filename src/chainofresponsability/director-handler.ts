import { BaseHandler } from "./base-handler";
import { Customer } from "./customer";

export class DirectorHandler extends BaseHandler{
    handler(budget: Customer): Customer{
        // if(budget.total <= 50000){
            console.log('O director tratou o orçamento');
            budget.approved = true;
            budget.sectorApproved = 'Director'
            // return budget;
        // }
       return super.handler(budget)
    }
}

/*
-> Sucesso definito ou Falha definitiva 

- Criar pedido (Sales) / Cancela Pedido
- Separa Produto (Logistic) / Devolver Produto
- Efetivar cobrança (Financial) / Devolver Dinheiro
- Inciar Entrega (Delivery)

* Na coreografia cabe a cada serviço informar ao seu sucessor que conseguiu completar uma
ação bem sucedida ou ao seu antecessor informando que ocorreu uma falha


*/