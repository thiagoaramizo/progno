// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next'


type Data = {
  status: string
}

interface InteresseType {
  email: string
}

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@progno.ilfunaf.mongodb.net/?retryWrites=true&w=majority`


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const client = new MongoClient(uri)
  try {
    const database = client.db("Progno")
    const interesse = database.collection<InteresseType>("interesse")
    const result = await interesse.insertOne({ email: req.body.email})
  } catch(err) {
    res.status(400).json({ status: JSON.stringify(err) })
  } 
  finally {
    await client.close();
    res.status(201).json({ status: 'Ok' })
  }
  
  
}