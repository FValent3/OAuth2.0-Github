import { Express } from 'express'

export function Oauth (app: Express): void {
  app.use('/oauth/redirect')
}
