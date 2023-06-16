import { tribunais } from '@/data/mocks'
import type { NextApiRequest, NextApiResponse } from 'next'


type Data = any

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { tid } = req.query
  console.log(tid)
  const tribunal = tribunais.filter( (tribunal) => tribunal.id === tid)

  res.status(200).json(tribunal[0])
}