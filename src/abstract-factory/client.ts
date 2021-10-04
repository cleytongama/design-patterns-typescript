import EnterpriseCustomerVehicleFactory from "./factories/EnterpriseCustomerVehicleFactory copy";
import IndividualCustomerVehicleFactory from "./factories/IndividualCustomerVehicleFactory";

const enterpriseFactory = new EnterpriseCustomerVehicleFactory()
const individualFactory = new IndividualCustomerVehicleFactory()


const customer = enterpriseFactory.createCustomer("Cleyton")
const car1 = individualFactory.createVehicle("City",customer.name)
const car2 = enterpriseFactory.createVehicle("Celta","Joao")

console.log(car1.pickUp())
console.log(car2.pickUp())