import Frete from "./Frete";

export default class Main {

    frete: Frete;

    constructor (frete : Frete){
        this.frete = frete
    }

    calculaFrete(value: number): number{
        return this.frete.calculaFrete(value);
    }
}