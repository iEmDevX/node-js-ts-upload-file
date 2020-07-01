import express from 'express'
import fs from 'fs'
import bodyParser from 'body-parser'
import { ConfigENV } from './environments/config.env'
import { EnvModel } from './environments/model.env'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const dataEnv: EnvModel = ConfigENV.getValue()

app.get('/', (req, res) => {
  res.send('Hello world!!!')
})

app.post('/get-list-file', async (req, res) => {
  const listDirName: string[] = []
  const listFileName: string[] = []
  const path = 'uploads/' + req.body.path ?? ''
  let files: string[] = []
  try {
    files = await fs.readdirSync(path)
  } catch (error) {
    res.send({ 'status': false })
  }
  for await (const file of files) {
    const isDir = await fs.lstatSync(path + file).isDirectory()
    if (isDir) {
      listDirName.push(file)
    } else {
      listFileName.push(file)
    }
  }
  res.send({ dir: listDirName, file: listFileName })
})

app.listen(dataEnv.PORT, (err) => {
  if (err) {
    return console.error(err)
  }
  console.log(`run on profile : ${dataEnv.ENV}`)
  return console.log(`server is listening on port: ${dataEnv.PORT}`)
})
