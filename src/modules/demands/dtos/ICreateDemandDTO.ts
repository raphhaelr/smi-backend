import { IProductDemand } from '../../../database/models/Demand'

export interface ICreateDemandDTO {
  referenceStartDate: Date
  referenceEndDate: Date
  productDemands: IProductDemand[]
}
