import { Product, IProduct } from '../../../database/models/Product'

export class CreateProductService {
  async execute({
    name,
    description,
    sku,
    status,
  }: ICreateProductDTO): Promise<IProduct> {
    const productObject = new Product({
      name,
      sku,
      description,
      status,
      createdAt: new Date(),
    })

    if (productObject.validateSync()) {
      throw new Error('Product validation error')
    }

    const productExists = await Product.findOne({ sku })

    if (productExists) {
      throw new Error('Product already exists')
    }

    const product = await Product.create(productObject)

    return product
  }
}
