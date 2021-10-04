export default class Pedido {
    total: number;
    banco: string;
    constructor(total: number, banco: string) {
        this.total = total;
        this.banco = banco;
    }
}