import { AppLayout } from "@/components/appLayout";
import { Titulo } from "@/components/titulo";
import Head from "next/head";

export default function InicialApp() {
  return (
    <>
      <Head>
        <title>Progno | Extrato</title>
      </Head>
      <AppLayout>
        <div className="flex flex-col gap-8 w-100 max-w-3xl mx-auto">
          <Titulo>Extrato de <strong>Créditos</strong></Titulo>
          
        </div>
      </AppLayout>
      
    </>
  )
}