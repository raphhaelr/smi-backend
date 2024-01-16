import { FastifyReply, FastifyRequest } from 'fastify'
import { UpdateDemandService } from '../services/UpdateDemandService'
import { UpdateDemandType } from '../schemas/updateDemandSchema'

interface IRequest extends FastifyRequest {
  body: UpdateDemandType
}

export async function updateDemandHandler(
  request: IRequest,
  reply: FastifyReply,
): Promise<void> {
  const { _id, productDemands, referenceEndDate, referenceStartDate } =
    request.body

  const updateDemandService = new UpdateDemandService()

  const demand = await updateDemandService.execute({
    _id,
    productDemands,
    referenceEndDate,
    referenceStartDate,
  })

  reply.status(200).send(demand)
}
