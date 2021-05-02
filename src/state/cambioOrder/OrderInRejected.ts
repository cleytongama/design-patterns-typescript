import OrderInState from "./OrderInState";
import OrderIn from "./OrderIn";
import OrderInPending from "./OrderInPeding";
import OrderInApproved from "./OrderInApproved";

export default class OrderInRejected implements  OrderInState{

    private orderIn: OrderIn
    private name =  'OrderInApproved'

    constructor(orderIn:OrderIn ){
        this.orderIn = orderIn
    }
    
    getName(): string {
       return this.name;
    }    

    approvePayment(): void {
        throw new Error("O pedido não pode ser mais processado");
    }

    rejectPayment(): void {
        throw new Error("O pedido já esta em pagamento rejeitado");
    }

    waitPayment(): void {
        throw new Error("O pedido não pode ser mais processado");
    }
    
    shipOrder(): void {
        throw new Error("Method not implemented.");
    }


}