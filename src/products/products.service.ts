import { Injectable } from "@nestjs/common";
import { productModel } from "./product.model";

@Injectable()
export class ProductService{
    products: productModel[] = [];
    id: number = 1;

    insertProduct(title: string, description: string, price: number): string{

        this.id += 1;

        const product = new productModel(
            (this.id).toString(),
            title,
            description,
            price);

        this.products.push(product);

        return this.id.toString();
    }

    getProduct(prodId: number): productModel{
        return this.products.find(product => product.id === prodId.toString());
    }

    getAllProducts(): productModel[]{
        return this.products;
    }
}