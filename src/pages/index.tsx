import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { InputTexto } from "@/components/forms/inputTexto";
import { FormEvent, useState } from "react";
import { Button } from "@/components/forms/button";
import axios from "axios";

export default function Home() {


  const [email, setEmail] = useState('')
  const [enviando, setEnviando] = useState(false)
  const [avisarei, setAvisarei] = useState(false)

  const salvarEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setEnviando(true)
    axios.post('/api/salvar-email', {email: email} ).
      then(function (response) {
        setAvisarei(true)
      })
  }

  return (
    <>
      <Head>
        <title>Progno - Prognóstico judicial para advogados</title>
      </Head>
      <div className="w-screen h-screen bg-hero flex flex-col items-center justify-center px-4">
        <Image src='/logo-progno-vertical.png' alt="Progno" width={400} height={400} className="-mt-8 w-64 md:w-80"/>
        <div className="mt-8 mb-12 text-primary-400 text-center">
          <h1 className="text-3xl font-extralight opacity-90"><strong className="font-bold">Inteligência</strong><span> no prognóstico judicial</span></h1>
        </div>

        { avisarei ? 
          <Link href={'/app'} className="text-primary-500 font-light my-4 transition-colors hover:text-primary-400" >Tudo certo! Que tal ver a interface? Clique aqui</Link>
          : 
          <div className="text-slate-300 text-center flex flex-col gap-4">
          <span className="font-light">Seja informado quando o sistema for lançado!</span>
            <form onSubmit={salvarEmail} className="flex gap-2 items-center px-6">
              <input type="email" required className="block p-2 rounded-md flex-1 text-slate-700 disabled:opacity-90 disabled:cursor-not-allowed" disabled={enviando} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Seu e-mail" />
              <Button variant={"primary"} type="submit" disabled={enviando} isLoading={enviando} >Me avise</Button>
            </form>
          </div>
         }
        
        

        
      </div>
      
    </>
  )
}