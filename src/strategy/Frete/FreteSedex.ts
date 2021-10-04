import Frete from "./Frete";

export default class FreteSedex implements Frete{

    private JUROS = 5

    calculaFrete(value: number): number {
        return value + (value*this.JUROS/1000)
    }   

}