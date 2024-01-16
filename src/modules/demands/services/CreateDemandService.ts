import { ICreateDemandDTO } from '../dtos/ICreateDemandDTO'
import { Demand, IDemand } from '../../../database/models/Demand'

export class CreateDemandService {
  constructor() {}

  async execute({
    productDemands,
    referenceEndDate,
    referenceStartDate,
  }: ICreateDemandDTO): Promise<IDemand> {
    const demandObject = new Demand({
      referenceEndDate,
      referenceStartDate,
      productDemands,
      createdAt: new Date(),
    })

    if (demandObject.validateSync()) {
      throw new Error('Demand object validation error')
    }

    const demand = await Demand.create(demandObject)

    return demand
  }
}
