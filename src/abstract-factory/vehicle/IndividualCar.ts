import IVehicle from "./interfaces/IVehicle";
import Customer  from "../customer/interfaces/ICustomer";

export default class IndividualCar implements IVehicle{
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