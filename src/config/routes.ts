import { Express, Router, static as _static } from 'express'

export default (app: Express): void => {
  const router = Router()
  app.use(_static(path.join(_dirname, '/public')))
  app.use('/api', router)
}
