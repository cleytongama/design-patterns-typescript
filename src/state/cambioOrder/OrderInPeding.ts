import OrderIn from "./OrderIn";
import OrderInState from "./OrderInState";
import OrderInApproved from "./OrderInApproved";
import OrderInRejected from "./OrderInRejected";

export default class OrderInPending implements OrderInState {

    private orderIn: OrderIn
    private name =  'OrderInPending'

    constructor(orderIn:OrderIn ){
        this.orderIn = orderIn
    }

    getName(): string {
       return this.name;
    }
    approvePayment(): void {
        this.orderIn.setState(new OrderInApproved(this.orderIn))
    }
    rejectPayment(): void {
        this.orderIn.setState(new OrderInRejected(this.orderIn))
    }
    waitPayment(): void {
        throw new Error("O pedido já esta no estado pagamento pendente.");
    }
    shipOrder(): void {
        console.log("O pedido não pode ser enviado, ele ainda está pendente de aprovação! ");
    }

   
}