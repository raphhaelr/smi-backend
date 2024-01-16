import { Demand, IDemand } from '../../../database/models/Demand'

interface IUpdateDemandDTO {
  _id: string
  referenceStartDate?: string
  referenceEndDate?: string
  productDemands?: {
    product: string
    requiredQuantity: number
  }[]
}

export class UpdateDemandService {
  async execute({
    _id,
    productDemands,
    referenceEndDate,
    referenceStartDate,
  }: IUpdateDemandDTO): Promise<IDemand | null> {
    const filter = {
      _id,
    }

    const update = {
      ...(productDemands ? { productDemands } : {}),
      ...(referenceEndDate
        ? { referenceEndDate: new Date(referenceEndDate) }
        : {}),
      ...(referenceStartDate
        ? { referenceStartDate: new Date(referenceStartDate) }
        : {}),
      updatedAt: new Date(),
    }

    const options = {
      new: true,
    }

    const demand = await Demand.findOneAndUpdate(filter, update, options)

    return demand
  }
}
