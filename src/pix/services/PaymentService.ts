import IPaymentsPix from "../interface/IPaymentsPix";
export default class PaymentService {

    private paymentPix : IPaymentsPix

    constructor(payment: IPaymentsPix){
        this.paymentPix = payment
    }

    emitOrder(){
        return this.paymentPix.generateOrder();
    }
}