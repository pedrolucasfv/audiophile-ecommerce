import { NextApiRequest, NextApiResponse } from 'next'

import connectMongo from '../../../../database/conn'
import {
  deleteUser,
  getUsers,
  postUser,
  putUser
} from '../../../../database/controller'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connectMongo()

  const { method } = req
  switch (method) {
    case 'GET':
      getUsers(req, res)
      break
    case 'POST':
      postUser(req, res)
      break
    case 'PUT':
      putUser(req, res)
      break
    case 'DELETE':
      deleteUser(req, res)
      break
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowd`)
  }
}
