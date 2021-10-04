import OrderInState from "./OrderInState";
import OrderInPending from "./OrderInPeding";

export default class OrderIn {

    private state: OrderInState = new OrderInPending(this)

 

    getState(): OrderInState{
        return this.state;
    }

    setState(state: OrderInState): void{
        this.state = state;
        console.log(`O estatdo do pedido é  ${this.getStateName()}`)
    }   

    getStateName(){
        return this.state.getName();
    }

    approvePayment():void{
        return this.state.approvePayment();
    };

    rejectPayment():void{
        return this.state.rejectPayment();
    };

    waitPayment():void{
        return this.state.waitPayment();
    };
    
    shipOrder(): void{
        return this.state.shipOrder();
    }
}