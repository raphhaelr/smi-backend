import { FastifyReply, FastifyRequest } from 'fastify'
import { GetAllDemandsService } from '../services/GetAllDemandsService'

export async function getAllDemandsHandler(
  request: FastifyRequest,
  reply: FastifyReply,
): Promise<void> {
  const getAllDemandsService = new GetAllDemandsService()

  const demands = await getAllDemandsService.execute()

  reply.status(200).send(demands)
}
