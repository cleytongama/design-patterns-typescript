import CalculadoraJuros from "./CalculadoraJuros";
import Pedido from "./Pedido";
import Santander from "./Santander";
const pedido = new Pedido(10, "Santander")
const banco  = new Santander(pedido)
const calcula = new CalculadoraJuros(banco)

console.log(calcula.calculaJuros())