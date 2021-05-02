import IPaymentsPix from "src/pix/interface/IPaymentsPix";

export default class PaymentsItau implements IPaymentsPix{
    generateOrder(){
        return 'Ordem gerada pelo Pix Itau'
    }
}