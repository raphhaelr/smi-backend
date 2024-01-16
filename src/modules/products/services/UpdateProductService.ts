import { IProduct, Product } from '../../../database/models/Product'
import { isBoolean, isEmpty } from 'lodash'

interface IUpdateProductDTO {
  _id: string
  name?: string
  description?: string
  status?: boolean
}

export class UpdateProductService {
  async execute({
    _id,
    name,
    description,
    status,
  }: IUpdateProductDTO): Promise<IProduct | null> {
    const filter = {
      _id,
    }

    const update = {
      ...(name ? { name } : {}),
      ...(description ? { description } : {}),
      ...(isBoolean(status) ? { status } : {}),
      updatedAt: new Date(),
    }

    const options = {
      new: true,
    }

    const product = await Product.findOneAndUpdate(filter, update, options)

    if (isEmpty(product)) {
      throw new Error('This product does not exists')
    }

    return product
  }
}
