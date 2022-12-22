import { Router } from 'express'
import { makeOAuthController } from '../factories/oauth'
export function OAuth (router: Router): void {
  const oAuthController = makeOAuthController()
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  router.get('/oauth/redirect', oAuthController.handle.bind(oAuthController))
}
