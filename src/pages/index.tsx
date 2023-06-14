import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Progno - Prognóstico judicial para advogados</title>
      </Head>
      <div className="w-screen h-screen bg-hero flex items-center justify-center">
        <Image src='/logo-progno-vertical.png' alt="Progno" width={400} height={400} className="-mt-8"/>
        <Link href={'/app'} >App</Link>
      </div>
      
    </>
  )
}