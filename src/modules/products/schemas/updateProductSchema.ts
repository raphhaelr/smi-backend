import { Static, Type } from '@sinclair/typebox'

export const updateProductSchema = Type.Composite([
  Type.Object({
    _id: Type.String(),
    name: Type.Optional(Type.String()),
    description: Type.Optional(Type.String()),
    status: Type.Optional(Type.Boolean()),
  }),
])

export type UpdateProductType = Static<typeof updateProductSchema>
