import mongoose, { Model, Document } from 'mongoose'

export interface IProduct extends Document {
  name: string
  description: string
  sku: string
  status: boolean
  createdAt: Date
  updatedAt: Date
}

const ProductSchema = new mongoose.Schema<IProduct>({
  name: {
    type: 'String',
    required: true,
  },
  description: {
    type: 'String',
    default: null,
    required: false,
  },
  sku: {
    type: 'String',
    required: true,
  },
  status: {
    type: 'Boolean',
    default: true,
  },
  createdAt: {
    type: 'Date',
    required: true,
  },
  updatedAt: {
    type: 'Date',
    default: null,
    required: false,
  },
})

const Product: Model<IProduct> = mongoose.model('Product', ProductSchema)

export { Product }
