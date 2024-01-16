import Fastify from 'fastify'
import { routes } from './routes'
import cors from '@fastify/cors'
import swagger from '@fastify/swagger'
import swaggerUi from '@fastify/swagger-ui'

export const app = Fastify()

app.register(swagger, {
  swagger: {
    info: {
      title: 'SMI Engineering backend',
      version: '1.0.0',
      contact: {
        email: 'raphaelrbh7@gmail.com',
        name: 'Raphael Rodrigues',
      },
      description: 'SMI Engineering backend routes',
    },
    host: '',
  },
})

app.register(swaggerUi, {
  routePrefix: '/documentation',
  staticCSP: true,
})

app.register(cors, {
  origin: '*',
  credentials: true,
})

app.register(routes, { prefix: '/api' })
