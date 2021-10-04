import { Banco } from "./Banco";

export default class CalculadoraJuros {
  
    banco: Banco;

    constructor(banco: Banco){
        this.banco = banco
    }
    calculaJuros(){
        // if(pedido.banco === "Santander"){
        //     this.banco = new Santander(pedido);
        // } else if(pedido.banco === "Itau"){
        //     this.banco = new Itau(pedido);
        // }else if(pedido.banco === "Bradesco"){
        //     this.banco = new Bradesco(pedido);
        // }
        return this.banco.getTaxaDeJuros()
    }
}