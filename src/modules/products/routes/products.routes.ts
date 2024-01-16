import { FastifyInstance } from 'fastify'
import {
  CreateProductType,
  createProductSchema,
} from '../schemas/createProductSchema'
import { createProductHandler } from '../controllers/createProductHandler'
import { getAllProductsHandler } from '../controllers/getAllProductsHandler'
import {
  UpdateProductType,
  updateProductSchema,
} from '../schemas/updateProductSchema'
import { updateProductHandler } from '../controllers/updateProductHandler'
import { deleteProductHandler } from '../controllers/deleteProductHandler'

export async function productsRoutes(app: FastifyInstance): Promise<void> {
  app.post<{ Body: CreateProductType }>(
    '/',
    {
      schema: {
        body: createProductSchema,
      },
    },
    createProductHandler,
  )

  app.get('/', getAllProductsHandler)

  app.put<{ Body: UpdateProductType }>(
    '/',
    {
      schema: {
        body: updateProductSchema,
      },
    },
    updateProductHandler,
  )

  app.delete<{ Params: { _id: string } }>('/:_id', deleteProductHandler)
}
