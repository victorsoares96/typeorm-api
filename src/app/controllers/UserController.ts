import { NextFunction, Request, Response } from 'express'
import { getRepository } from 'typeorm'
import User from '../models/User'

class UserController {
  async index (req: Request, res: Response) {
    const repository = getRepository(User)

    const users = await repository.findAndCount({ select: ['id', 'email'] })

    return res.json({
      result: users[0],
      count: users[1]
    })
  }

  async store (req: Request, res:Response, next: NextFunction) {
    const repository = getRepository(User)

    const { email, password } = req.body

    const userExists = await repository.findOne({ where: { email } })

    if (userExists) {
      return res.sendStatus(409)
    }

    const user = repository.create({ email, password })
    await repository.save(user)
    return res.json(user)
  }
}

export default new UserController()
