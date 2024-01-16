import { Static, Type } from '@sinclair/typebox'

export const deleteProductParamsSchema = Type.Object({
  _id: Type.String(),
})

export type DeleteProductType = Static<typeof deleteProductParamsSchema>
