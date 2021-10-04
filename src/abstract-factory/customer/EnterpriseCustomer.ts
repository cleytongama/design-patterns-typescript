import ICustomer from "./interfaces/ICustomer";

export default class EnterpriseCustomer implements ICustomer {
    constructor(public name: string){}
}
