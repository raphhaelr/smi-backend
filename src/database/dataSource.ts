import mongoose from 'mongoose'
import { config } from 'dotenv'

console.log(`Loading .env file...`)

config({ path: `.env` })

mongoose.Promise = global.Promise

const uri = process.env.MONGO_URI as string

console.log({ uri })

let cachedMongoConn: typeof mongoose | null = null

export const connect = async () => {
  if (!cachedMongoConn) {
    cachedMongoConn = await mongoose.connect(uri, {
      maxPoolSize: 20,
      connectTimeoutMS: 10000,
      bufferCommands: false,
    })

    return cachedMongoConn
  }

  console.log('MongoDB: using cached database instance')

  return cachedMongoConn
}
