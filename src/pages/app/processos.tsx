import { AppLayout } from "@/components/appLayout";
import { Construcao } from "@/components/construcao";
import { Titulo } from "@/components/titulo";
import Head from "next/head";

export default function InicialApp() {
  return (
    <>
      <Head>
        <title>Progno | Processos</title>
      </Head>
      <AppLayout>
        <div className="flex flex-col gap-8 w-100 max-w-3xl mx-auto">
          <Titulo>Meus <strong>Processos</strong></Titulo>
          <Construcao>
            Esta função ainda está em desenvolvimento, em breve você poderá acessar e atualizar os seus 
            prognósticos para processos em andamento e verificar a efetividade de recursos e diligências de processos.
          </Construcao>
        </div>
      </AppLayout>
      
    </>
  )
}