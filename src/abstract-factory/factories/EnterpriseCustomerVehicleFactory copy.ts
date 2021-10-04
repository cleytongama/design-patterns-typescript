import EnterpriseCustomer from "../customer/EnterpriseCustomer";
import ICustomer from "../customer/interfaces/ICustomer";
import EnterpriseCar from "../vehicle/EnterpriseCar";
import IVehicle from "../vehicle/interfaces/IVehicle";
import CustomerVehicleAbstractFactory from "./CustomerVehicleAbstractFactory";

export default class EnterpriseCustomerVehicleFactory implements CustomerVehicleAbstractFactory{
    createCustomer(customerName: string): ICustomer{
        return new EnterpriseCustomer(customerName)
    }
    createVehicle(vehicleName: string, customerName: string): IVehicle{
        const customer = this.createCustomer(customerName)
        return new EnterpriseCar(vehicleName, customer)
    }
}