import PaymentService from "./services/PaymentService";

import  PaymentsItau from "./acl/facades/PaymentsItau";
import  PaymentsGerenciaNet from "./acl/facades/PaymentsGerenciaNet";


const paymentPix = new PaymentService( new PaymentsGerenciaNet())

console.log(paymentPix.emitOrder())