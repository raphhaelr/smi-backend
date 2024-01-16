import { IProduct, Product } from '../../../database/models/Product'

export class GetAllProductsService {
  async execute(): Promise<IProduct[]> {
    return Product.find()
  }
}
