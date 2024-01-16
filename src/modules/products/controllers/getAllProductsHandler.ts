import { FastifyReply, FastifyRequest } from 'fastify'
import { GetAllProductsService } from '../services/GetAllProductsService'

export async function getAllProductsHandler(
  request: FastifyRequest,
  reply: FastifyReply,
): Promise<void> {
  const getAllProductsService = new GetAllProductsService()

  const products = await getAllProductsService.execute()

  reply.status(200).send(products)
}
