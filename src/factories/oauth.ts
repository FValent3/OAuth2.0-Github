import { OAuthController } from '../controllers/oauth'

export const makeOAuthController = (): OAuthController => {
  const clientId = process.env.CLIENT_ID ?? ''
  const clientSecret = process.env.CLIENT_SECRET ?? ''
  const oAuthController = new OAuthController(clientId, clientSecret)
  return oAuthController
}
