import { OAuthController } from '../controllers/oauth'
import env from '../config/env'

export const makeOAuthController = (): OAuthController => {
  const { clientId, clientSecret } = env
  const oAuthController = new OAuthController(clientId, clientSecret)
  return oAuthController
}
