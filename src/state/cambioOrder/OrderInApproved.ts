import OrderInState from "./OrderInState";
import OrderIn from "./OrderIn";
import OrderInPending from "./OrderInPeding";
import OrderInRejected from "./OrderInRejected";

export default class OrderInApproved implements  OrderInState{

    private orderIn: OrderIn
    private name =  'OrderInApproved'

    constructor(orderIn:OrderIn ){
        this.orderIn = orderIn
    }
    
    getName(): string {
       return this.name;
    }    

    approvePayment(): void {
        throw new Error(" O pedido já esta em pagamento rejeitado");
    }
    rejectPayment(): void {
        this.orderIn.setState(new OrderInRejected(this.orderIn))
    }
    waitPayment(): void {
        this.orderIn.setState(new OrderInPending(this.orderIn))
    }
    
    shipOrder(): void {
       console.log("Enviando pedido para o cliente");
    }


}