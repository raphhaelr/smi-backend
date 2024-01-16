import { connect } from './database/dataSource'
import { app } from './app'

app.listen({ port: 3333, host: '0.0.0.0' }).then(() => {
  connect().then(() => {
    console.log('MongoDB connected successfully')
  })

  console.log('Server started on port 3333')
})
