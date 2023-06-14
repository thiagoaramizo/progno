import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Progno - Prognóstico judicial para advogados</title>
      </Head>
      <h1>Landing Page</h1>
      <Link href={'/app'} >App</Link>
    </>
  )
}