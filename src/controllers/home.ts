import { Request, Response } from 'express'

export function getHome(req: Request, res: Response): void {
  res.render('Home')
}
