import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateDemandService } from '../services/CreateDemandService'
import { CreateDemandType } from '../schemas/createDemandSchema'

interface IRequest extends FastifyRequest {
  body: CreateDemandType
}

export async function createDemandHandler(
  request: IRequest,
  reply: FastifyReply,
): Promise<void> {
  const { productDemands, referenceEndDate, referenceStartDate } = request.body

  const createDemandService = new CreateDemandService()

  const demand = await createDemandService.execute({
    productDemands,
    referenceEndDate,
    referenceStartDate,
  })

  reply.status(201).send(demand)
}
