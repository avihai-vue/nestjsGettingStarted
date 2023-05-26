import { Controller, Post, Body, Get, Query, Param } from "@nestjs/common";
import { ProductService } from "./products.service";
import { productModel } from "./product.model";

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

  @Get('getProduct') 
  getProduct( 
    @Query('id') prodId: number): { prodTitle: string, id: string}
  {
    console.log('in getProduct');
    const product: productModel = this.productService.getProduct(prodId);
    return { prodTitle: product.title, id : prodId.toString()};
  }

  @Get('getProductByNestedPath/:idOfProduct') 
  getProductByNestedPath( 
    @Param('idOfProduct')id: number): { prodTitle: string, id: string}
  {
    console.log('in getProduct');
    const product: productModel = this.productService.getProduct(id);
    return { prodTitle: product.title, id : id.toString()};
  }

  @Get('getAllProducts') 
  getAllProduct(): { prodTitle: string, id: string}[]
  {
    console.log('in getProduct');
    const products: productModel[] = this.productService.getAllProducts();

    return products.map(({title, id}) => ({
      prodTitle: title,
      id: id,
    }));
  }
}
