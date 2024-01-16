import mongoose, { Model, Document } from 'mongoose'

export interface IProductDemand {
  product: string
  producedQuantity: number
  requiredQuantity: number
  updatedAt?: Date
}

export interface IDemand extends Document {
  referenceStartDate: Date
  referenceEndDate: Date
  productDemands: IProductDemand[]
  status: 'Completed' | 'In Progress' | 'Planning'
  createdAt: Date
  updatedAt: Date
}

const DemandSchema = new mongoose.Schema<IDemand>({
  referenceStartDate: {
    type: 'Date',
    required: true,
  },
  referenceEndDate: {
    type: 'Date',
    required: true,
  },
  productDemands: {
    type: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Product',
        },
        producedQuantity: { type: 'Number', default: 0 },
        requiredQuantity: { type: 'Number', required: true },
        updatedAt: { type: 'Date', default: null },
      },
    ],
    default: [],
  },
  status: {
    type: 'String',
    enum: ['Completed', 'In Progress', 'Planning'],
    default: 'Planning',
  },
  createdAt: {
    type: 'Date',
    required: true,
  },
  updatedAt: {
    type: 'Date',
    default: null,
  },
})

const Demand: Model<IDemand> = mongoose.model('Demand', DemandSchema)

export { Demand }
