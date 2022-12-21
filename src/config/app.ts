import express from 'express'
import routes from './routes'
import dotenv from 'dotenv'
import bodyparser from 'body-parser'
dotenv.config()

const app = express()
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
routes(app)

export default app
