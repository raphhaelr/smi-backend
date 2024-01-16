import Fastify from 'fastify'
import { routes } from './routes'
import cors from '@fastify/cors'
import swagger from '@fastify/swagger'
import swaggerUi from '@fastify/swagger-ui'
import helmet from '@fastify/helmet'

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

app.register(cors, {
  origin: '*',
  credentials: true,
})

app.register(helmet, (instance) => {
  return {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
        // Add more directives as needed based on your application requirements
        // ...

        // Allow 'Origin-Agent-Cluster' header
        frameAncestors: [
          "'self'",
          'http://ec2-3-145-145-251.us-east-2.compute.amazonaws.com',
        ],
        // Include other relevant directives here
      },
    },
  }
})

app.register(swaggerUi, {
  routePrefix: '/api/documentation',
  staticCSP: true,
})

app.register(routes, { prefix: '/api' })
