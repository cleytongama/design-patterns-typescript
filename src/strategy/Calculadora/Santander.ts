import { Banco } from "./Banco";
import Pedido from "./Pedido";

export default class Santander implements Banco{

    pedido : Pedido;
    
    constructor(pedido: Pedido){
        this.pedido = pedido
    }

    getTaxaDeJuros(){
        return this.pedido.total * 0.4;
    }
}