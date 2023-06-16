import { AppLayout } from "@/components/appLayout";
import { Titulo } from "@/components/titulo";
import { PlusCircle } from "@phosphor-icons/react";
import Head from "next/head";
import Link from "next/link";

export default function InicialApp() {
  return (
    <>
      <Head>
        <title>Progno | Prognósticos</title>
      </Head>
      <AppLayout>
        <div className="flex flex-col gap-8 w-100 max-w-3xl mx-auto">
          <div className="flex items-center justify-between">
            <Titulo>Meus <strong>Prognósticos</strong></Titulo>
            <Link href={'/app/prognosticos/novo-prognostico'} className={'flex items-center justify-center gap-2 leading-6 rounded-md px-4 py-2 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary-500 disabled:opacity-60 disabled:cursor-not-allowed bg-primary-400 not:disable:hover:bg-primary-500 transition-all hover:scale-105 active:scale-100'}>
            <PlusCircle size={24} weight="fill" /> Novo prognóstico
            </Link>
          </div>
        </div>
      </AppLayout>
      
    </>
  )
}