import { Category } from "../category";
export interface Product{
    productId: number,
    productName: string,
    price: number,
    color: string,
    dimension: string,
    specification: string,
    manufacturer: string,
    quantity: number,
    productImageUrl: string,
    category: Category
}