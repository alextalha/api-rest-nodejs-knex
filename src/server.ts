import fastify from 'fastify'
import { transactionsRoutes } from './routes/transactions'
import cookie from '@fastify/cookie'
import { env } from './env'

const app = fastify()

app.register(cookie)

app.register(transactionsRoutes, { prefix: '/transactions' })

app.listen({ port: env.PORT }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
