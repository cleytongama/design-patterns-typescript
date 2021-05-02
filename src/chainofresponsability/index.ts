import { SellerHandler } from './seller-handler';
import { Customer } from "./customer";
import { ManagerHandler } from './manager-handler';
import { DirectorHandler } from './director-handler';
import { CeoHandler } from './ceo-handler';
import { MainHandler } from './main-handler';

const customer = new Customer(900)

const main = new MainHandler()

main
    .setNextHandler(new SellerHandler())
    .setNextHandler(new ManagerHandler())
    .setNextHandler(new DirectorHandler())
    .setNextHandler(new CeoHandler())


console.log(main.handler(customer))

console.log(customer)