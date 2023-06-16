import { AppLayout } from "@/components/appLayout";
import { Construcao } from "@/components/construcao";
import { Titulo } from "@/components/titulo";
import Head from "next/head";

export default function InicialApp() {
  return (
    <>
      <Head>
        <title>Progno | Clientes</title>
      </Head>
      <AppLayout>
        <div className="flex flex-col gap-8 w-100 max-w-3xl mx-auto">
          <Titulo>Meus <strong>Clientes</strong></Titulo>
          <Construcao>
            Estamos trabalhando no desenvolvimento desta página. Aqui você poderá acompanhar seus prognósticos e processos por cliente, podendo exportar relatórios para enviar para o e-mail e WhatsApp do seu cliente, agregando mais valor à sua advocacia.
          </Construcao>
        </div>
      </AppLayout>
      
    </>
  )
}