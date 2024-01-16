import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateProductType } from '../schemas/createProductSchema'
import { CreateProductService } from '../services/CreateProductService'

interface IRequest extends FastifyRequest {
  body: CreateProductType
}

export async function createProductHandler(
  request: IRequest,
  reply: FastifyReply,
): Promise<void> {
  const { description, name, sku, status } = request.body

  const createProductService = new CreateProductService()

  const product = await createProductService.execute({
    description,
    name,
    sku,
    status,
  })

  reply.status(201).send(product)
}
