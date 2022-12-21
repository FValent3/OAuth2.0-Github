import { Express, Router, static as _static } from 'express'
import { OAuth } from '../routes/oauth'

export default (app: Express): void => {
  const router: Router = Router()
  OAuth(router)
  app.use('/', router)
  app.use(_static('./src/public'))
}
