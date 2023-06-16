import { AppLayout } from "@/components/appLayout";
import { Construcao } from "@/components/construcao";
import { Titulo } from "@/components/titulo";
import Head from "next/head";

export default function InicialApp() {
  return (
    <>
      <Head>
        <title>Progno | Página inicial</title>
      </Head>
      <AppLayout>
        <div className="flex flex-col gap-8 w-100 max-w-3xl mx-auto">
          <Titulo>Página <strong>Inicial</strong></Titulo>
          <Construcao>
            Esta página ainda está em desenvolvimento, em breve você poderá visualizar os principais insights dos seus processos e clientes, possibilitando uma advocacia muito mais estratégica e eficiente.
          </Construcao>
        </div>
      </AppLayout>
      
    </>
  )
}