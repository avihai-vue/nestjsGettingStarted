import { Controller, Post, Body } from "@nestjs/common";
import { ProductService } from "./products.service";

@Controller('products')
export class ProductsController {
  
  constructor(private readonly productService: ProductService){
  }

  @Post('insertProduct') 
  addProduct(@Body('title') prodTitle: string, 
  @Body('description') prodDescription: string,
  @Body('price') prodPrice: number): { prodTitle: string, id: string}
  {
    console.log('in insertProduct');
    const id: string = this.productService.insertProduct(prodTitle, prodDescription, prodPrice);
    return { prodTitle, id};
  }
}
