import express from 'express'
import { ConfigENV } from './environments/config.env'
import { EnvModel } from './environments/model.env'

const app = express()
const dataEnv: EnvModel = ConfigENV.getValue()

app.get('/', (req, res) => {
  res.send('Hello world!!!')
})

app.listen(dataEnv.PORT, (err) => {
  if (err) {
    return console.error(err)
  }
  console.log(`run on profile : ${dataEnv.ENV}`)
  return console.log(`server is listening on port: ${dataEnv.PORT}`)
})
