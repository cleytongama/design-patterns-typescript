import Frete from "./Frete";

export default class FreteCorreio implements Frete{
    private JUROS = 8
    
    calculaFrete(value: number): number {
       return value + (value*this.JUROS/100);
    }

}