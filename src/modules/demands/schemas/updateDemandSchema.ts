import { Static, Type } from '@sinclair/typebox'

const productDemand = Type.Object({
  product: Type.String(),
  requiredQuantity: Type.Number(),
})

export const updateDemandSchema = Type.Composite([
  Type.Object({
    _id: Type.String(),
    referenceStartDate: Type.Optional(Type.String()),
    referenceEndDate: Type.Optional(Type.String()),
    productDemands: Type.Optional(Type.Array(productDemand)),
  }),
])

export type UpdateDemandType = Static<typeof updateDemandSchema>
