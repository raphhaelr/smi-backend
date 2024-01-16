import { demandsRoutes } from '../modules/demands/routes/demands.routes'
import { productsRoutes } from '../modules/products/routes/products.routes'
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

export async function routes(app: FastifyInstance): Promise<void> {
  app.get('/', (request: FastifyRequest, reply: FastifyReply) =>
    reply.status(200).send({ message: 'Server started with success' }),
  )
  app.register(productsRoutes, { prefix: '/products' })
  app.register(demandsRoutes, { prefix: '/demands' })
}
