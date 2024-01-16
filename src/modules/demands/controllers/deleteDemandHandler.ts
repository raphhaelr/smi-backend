import { FastifyReply, FastifyRequest } from 'fastify'
import { DeleteDemandService } from '../services/DeleteDemandService'

interface IRequest extends FastifyRequest {
  params: {
    _id: string
  }
}

export async function deleteDemandHandler(
  request: IRequest,
  reply: FastifyReply,
): Promise<void> {
  const { _id } = request.params

  const deleteDemandService = new DeleteDemandService()

  await deleteDemandService.execute(_id)

  reply.status(204).send({})
}
