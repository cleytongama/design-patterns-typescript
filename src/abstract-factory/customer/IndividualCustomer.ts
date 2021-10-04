import ICustomer from "./interfaces/ICustomer";

export default class IndividualCustomer implements ICustomer {
    
    constructor(public name: string){}
}