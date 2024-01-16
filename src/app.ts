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

app.register(swaggerUi, {
  routePrefix: '/api/documentation',
  staticCSP: true,
})

app.register(helmet, (instance) => {
  return {
    contentSecurityPolicy: {
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        'form-action': ["'self'"],
        'img-src': ["'self'", 'data:', 'validator.swagger.io'],
        'script-src': ["'self'"].concat(instance.swaggerCSP.script),
        'style-src': ["'self'", 'https:'].concat(instance.swaggerCSP.style),
        frameAncestors: [
          "'self'",
          'http://ec2-3-145-145-251.us-east-2.compute.amazonaws.com',
        ],
      },
    },
  }
})

app.register(routes, { prefix: '/api' })
