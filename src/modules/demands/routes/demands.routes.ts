import { FastifyInstance } from 'fastify'
import {
  CreateDemandType,
  createDemandSchema,
} from '../schemas/createDemandSchema'
import { createDemandHandler } from '../controllers/createDemandHandler'
import { getAllDemandsHandler } from '../controllers/getAllDemandsHandler'
import {
  UpdateDemandType,
  updateDemandSchema,
} from '../schemas/updateDemandSchema'
import { updateDemandHandler } from '../controllers/updateDemandHandler'
import { deleteDemandHandler } from '../controllers/deleteDemandHandler'

export async function demandsRoutes(app: FastifyInstance): Promise<void> {
  app.post<{ Body: CreateDemandType }>(
    '/',
    {
      schema: {
        body: createDemandSchema,
      },
    },
    createDemandHandler,
  )

  app.get('/', getAllDemandsHandler)

  app.put<{ Body: UpdateDemandType }>(
    '/',
    {
      schema: {
        body: updateDemandSchema,
      },
    },
    updateDemandHandler,
  )

  app.delete<{ Params: { _id: string } }>('/:_id', deleteDemandHandler)
}
