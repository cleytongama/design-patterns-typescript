import EnterpriseCustomer from "../customer/EnterpriseCustomer";
import IndividualCustomer from "../customer/IndividualCustomer";
import ICustomer from "../customer/interfaces/ICustomer";
import IndividualCar from "../vehicle/IndividualCar";
import IVehicle from "../vehicle/interfaces/IVehicle";
import CustomerVehicleAbstractFactory from "./CustomerVehicleAbstractFactory";

export default class IndividualCustomerVehicleFactory implements CustomerVehicleAbstractFactory{
    createCustomer(customerName: string): ICustomer{
        return new IndividualCustomer(customerName)
    }
    createVehicle(vehicleName: string, customerName: string): IVehicle{
        const customer = this.createCustomer(customerName)
        return new IndividualCar(vehicleName, customer)
    }
}