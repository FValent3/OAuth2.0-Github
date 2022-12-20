import { Express, Router, static as _static } from 'express'
import path from 'path'

export default (app: Express): void => {
  const router = Router()
  app.use(_static(path.join(__dirname, '/public')))
  app.use('/api', router)
}
