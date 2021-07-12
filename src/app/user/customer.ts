import { Address } from "./address";
import { User } from "./User";

export interface Customer{
    customerId: number,
    firstName: string,
    lastName: string,
    mobileNumber: string,
    email: string,
    username: User,
    address: Address
}