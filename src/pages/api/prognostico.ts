import { prognostico } from '@/data/mocks'
import type { NextApiRequest, NextApiResponse } from 'next'


type Data = any

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if( req.method === 'POST' ){
    res.status(200).json({
      ...req.body,
      prognostico
    })
  } else {
    res.status(401).json('Método inválido')
  }
  
}