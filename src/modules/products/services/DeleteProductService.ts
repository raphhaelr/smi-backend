import { Product } from '../../../database/models/Product'

export class DeleteProductService {
  async execute(_id: string): Promise<void> {
    await Product.findOneAndDelete({ _id })
  }
}
