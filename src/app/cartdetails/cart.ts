import { Product } from "../product/product";
import { Customer } from "../user/customer";
export interface Cart{
        cartId: number,
        addingDate: any,
        productId: Product[],
        customer: Customer
}