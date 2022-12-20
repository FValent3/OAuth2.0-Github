import { Request, Response } from 'express'
import axios from 'axios'

export class OAuthController {
  private readonly clientId: string
  private readonly clientSecret: string

  constructor (clientId: string, clientSecret: string) {
    this.clientId = clientId
    this.clientSecret = clientSecret
  }

  async handle (req: Request, res: Response): Promise<void> {
    try {
      const requestToken: string = req.query.code
      const { data } = await axios.get(`https://github.com/login/oauth/access_token?client_id=${this.clientId}&client_secret=${this.clientSecret}}&code=${requestToken}`)
      const accessToken: string = data.access_token
      res.redirect(`welcome.html?access_token=${accessToken}`)
    } catch (err) {
      res.status(400).json({ message: 'Bad request' })
    }
  }
}
