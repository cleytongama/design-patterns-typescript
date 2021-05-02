import IPaymentPixGerenciaNet from "src/pix/interface/IPaymentPixGerenciaNet";

export default class PaymentsGerenciaNet implements IPaymentPixGerenciaNet{
    generateOrder(){
        return 'Order gerada pelo gerencia NET'
    }
}