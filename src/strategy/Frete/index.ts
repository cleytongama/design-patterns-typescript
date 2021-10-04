import Main from "./Main";
import FreteCorreio from "./FreteCorreio";
import FreteSedex from "./FreteSedex";

const frete  = new Main(new FreteSedex());

console.log(frete.calculaFrete(10))