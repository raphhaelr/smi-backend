import { FastifyReply, FastifyRequest } from 'fastify'
import { UpdateProductService } from '../services/UpdateProductService'
import { UpdateProductType } from '../schemas/updateProductSchema'

interface IRequest extends FastifyRequest {
  body: UpdateProductType
}

export async function updateProductHandler(
  request: IRequest,
  reply: FastifyReply,
): Promise<void> {
  const { _id, description, name, status } = request.body

  const updateProductService = new UpdateProductService()

  const product = await updateProductService.execute({
    _id,
    description,
    name,
    status,
  })

  reply.status(200).send(product)
}
