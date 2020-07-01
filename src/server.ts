import express from 'express'
import { ConfigENV } from './environments/config.env'
import { EnvModel } from './environments/model.env'
import { ConfigUplaodFile } from './config/upload-file.config'

const app = express()

const dataEnv: EnvModel = ConfigENV.getValue()
const upload = ConfigUplaodFile.data

app.get('/', (req, res) => {
  res.send('Hello world!!!')
})

app.post('/profile', upload.single('profile'), (req, res, next) => {
  console.log(req.file)
  res.send({
    'status': 'SUCCESS',
    'filename': req.file.filename,
    'mimetype': req.file.mimetype,
  })
})

app.listen(dataEnv.PORT, (err) => {
  if (err) {
    return console.error(err)
  }
  console.log(`run on profile : ${dataEnv.ENV}`)
  return console.log(`server is listening on port: ${dataEnv.PORT}`)
})
