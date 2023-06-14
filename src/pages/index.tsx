import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Progno - Prognóstico judicial para advogados</title>
      </Head>
      <div className="w-screen h-screen bg-hero flex flex-col items-center justify-center px-4">
        <Image src='/logo-progno-vertical.png' alt="Progno" width={400} height={400} className="-mt-8 w-64 md:w-80"/>
        <div className="mt-8 text-primary-400 text-center">
          <h1 className="text-3xl font-extralight opacity-90"><strong className="font-bold">Inteligência</strong><span> no prognóstico judicial</span></h1>
        </div>
        <Link href={'/app'} >App</Link>
      </div>
      
    </>
  )
}