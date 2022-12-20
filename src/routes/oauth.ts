import { Router } from 'express'

export function OAuth (router: Router): void {
  router.get('/oauth/redirect')
}
