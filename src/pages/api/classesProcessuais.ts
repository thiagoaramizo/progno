import { classesProcessuais } from '@/data/mocks'
import type { NextApiRequest, NextApiResponse } from 'next'


type Data = any

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(classesProcessuais)
}