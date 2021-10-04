import Customer  from "../customer/interfaces/ICustomer";
import IVehicle from "./interfaces/IVehicle";

export default class EnterpriseCar implements IVehicle {
    name: string;
    customer: Customer
    constructor(name: string, customer: Customer) {
        this.name = name;
        this.customer = customer;
    }
    pickUp(): void {
        console.log(`${this.name} está buscando ${this.customer.name} `)
    }
}
