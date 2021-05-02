import IPaymentsPix from "./IPaymentsPix";

export default interface IPaymentPixGerenciaNet extends IPaymentsPix{
    generateOrder():string
}