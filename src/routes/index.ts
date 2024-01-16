import { demandsRoutes } from '../modules/demands/routes/demands.routes'
import { productsRoutes } from '../modules/products/routes/products.routes'
import { FastifyInstance } from 'fastify'

export async function routes(app: FastifyInstance): Promise<void> {
  app.register(productsRoutes, { prefix: '/products' })
  app.register(demandsRoutes, { prefix: '/demands' })
}
