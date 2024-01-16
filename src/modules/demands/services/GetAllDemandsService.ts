import { Demand, IDemand } from '../../../database/models/Demand'

export class GetAllDemandsService {
  async execute(): Promise<IDemand[]> {
    const demands = await Demand.aggregate([
      {
        $lookup: {
          from: 'products',
          localField: 'productDemands.product',
          foreignField: '_id',
          as: 'productDetails',
        },
      },
      {
        $addFields: {
          productDemands: {
            $map: {
              input: '$productDemands',
              as: 'demand',
              in: {
                $mergeObjects: [
                  '$$demand',
                  {
                    product: {
                      $arrayElemAt: [
                        {
                          $filter: {
                            input: '$productDetails',
                            cond: {
                              $eq: ['$$this._id', '$$demand.product'],
                            },
                          },
                        },
                        0,
                      ],
                    },
                  },
                ],
              },
            },
          },
          totalRequiredQuantity: {
            $sum: '$productDemands.requiredQuantity',
          },
        },
      },
      {
        $project: {
          referenceStartDate: 1,
          referenceEndDate: 1,
          productDemands: 1,
          totalRequiredQuantity: 1,
          status: 1,
          createdAt: 1,
          updatedAt: 1,
        },
      },
    ])

    return demands
  }
}
