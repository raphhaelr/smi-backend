import { Static, Type } from '@sinclair/typebox'

export const createProductSchema = Type.Composite([
  Type.Object({
    name: Type.String(),
    description: Type.String(),
    sku: Type.String(),
    status: Type.Optional(Type.Boolean()),
  }),
])

export type CreateProductType = Static<typeof createProductSchema>
