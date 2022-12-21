import { Request, Response } from 'express'
import axios, { AxiosResponse } from 'axios'

export class OAuthController {
  private readonly clientId: string
  private readonly clientSecret: string

  constructor (clientId: string, clientSecret: string) {
    this.clientId = clientId
    this.clientSecret = clientSecret
  }

  async handle (req: Request, res: Response): Promise<undefined | Response > {
    try {
      const authUrl: string = 'https://github.com/login/oauth/access_token'
      const requestToken: string = req.query.code as string

      const clientData: object = {
        client_id: this.clientId,
        client_secret: this.clientSecret,
        code: requestToken
      }

      const headers: object = {
        headers: {
          Accept: 'application/json',
          contentType: 'application/json'
        }
      }

      const { data }: AxiosResponse = await axios.post(authUrl, clientData, headers)
      const accessToken = data.access_token as string
      res.redirect(`/welcome.html?access_token=${accessToken}`)
    } catch (err) {
      return res.status(400).json({ message: 'Bad request', error: err })
    }
  }
}
