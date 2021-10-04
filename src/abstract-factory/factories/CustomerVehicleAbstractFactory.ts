import ICustomer from "../customer/interfaces/ICustomer";
import IVehicle from "../vehicle/interfaces/IVehicle";

export default interface CustomerVehicleAbstractFactory {
    createCustomer(customerName: string): ICustomer;
    createVehicle(vehicleName: string, customerName: string): IVehicle;
}