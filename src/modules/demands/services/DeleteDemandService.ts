import { Demand } from '../../../database/models/Demand'

export class DeleteDemandService {
  async execute(_id: string): Promise<void> {
    await Demand.findOneAndDelete({ _id })
  }
}
