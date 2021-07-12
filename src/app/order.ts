import { Product } from "./product/product";
import { Customer } from "./user/customer";

export interface Order{
    orderId: number,
    orderDate: any,
    orderStatus: string,
    product: Product[],
    customer: Customer
}