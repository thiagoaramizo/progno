import { AppLayout } from "@/components/appLayout";
import { Construcao } from "@/components/construcao";
import { Titulo } from "@/components/titulo";
import Head from "next/head";

export default function InicialApp() {
  return (
    <>
      <Head>
        <title>Progno | Configurações</title>
      </Head>
      <AppLayout>
        <div className="flex flex-col gap-8 w-100 max-w-3xl mx-auto">
          <Titulo>Minhas <strong>Configurações</strong></Titulo>
          <Construcao>
            Em breve você poderá acessar configurações personalizadas para o seu Progno, como por exemplo, inserir sua marca para criar relatórios com a sua identidade visual. 
          </Construcao>
        </div>
      </AppLayout>
      
    </>
  )
}