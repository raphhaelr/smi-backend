import { Static, Type } from '@sinclair/typebox'

const productDemand = Type.Object({
  product: Type.String(),
  requiredQuantity: Type.Number(),
})

export const createDemandSchema = Type.Composite([
  Type.Object({
    referenceStartDate: Type.String(),
    referenceEndDate: Type.String(),
    productDemands: Type.Array(productDemand),
  }),
])

export type CreateDemandType = Static<typeof createDemandSchema>
