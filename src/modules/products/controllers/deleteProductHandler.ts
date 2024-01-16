import { FastifyReply, FastifyRequest } from 'fastify'
import { DeleteProductService } from '../services/DeleteProductService'

interface IRequest extends FastifyRequest {
  params: {
    _id: string
  }
}

export async function deleteProductHandler(
  request: IRequest,
  reply: FastifyReply,
): Promise<void> {
  const { _id } = request.params

  const deleteProductService = new DeleteProductService()

  await deleteProductService.execute(_id)

  reply.status(204).send({})
}
