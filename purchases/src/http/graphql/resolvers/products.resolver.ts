import { Query, Resolver } from '@nestjs/graphql';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../models/product';

@Resolver()
export class ProductsResolver {
  constructor(
    private productsService: ProductsService
  ) {

  }

  @Query(() => [Product])
  products() {
    return this.productsService.listAllProducts();
  }
}