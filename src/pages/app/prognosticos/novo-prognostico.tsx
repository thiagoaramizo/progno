import { AppLayout } from "@/components/appLayout";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function NovoPrognostico() {

  const totalEtapas = 4
  const [etapa, setEtapa] = useState(1)
  const [tribunais, setTribunais] = useState()

  useEffect(()=>{
    axios.get('/api/tribunais').
    then( (response) => {
      if( response.status === 200) {
        setTribunais(response.data)
      }
    })
  },[])

  const handleAvancarEtapa = () => {
    if( etapa < totalEtapas ) {
      setEtapa( etapa + 1)
    }
  }

  const handleVoltarEtapa = () => {
    if( etapa > 1 ) {
      setEtapa( etapa - 1)
    }
  }

  return (
    <>
      <Head>
        <title>Progno | Novo Prognóstico</title>
      </Head>
      <AppLayout>
        <div>Novo Prognóstico</div>
        <div>{etapa} de {totalEtapas} etapas</div>
        <button onClick={handleVoltarEtapa}>Voltar</button>
        <button onClick={handleAvancarEtapa}>Próxima</button>
        
          {tribunais && <pre>{JSON.stringify(tribunais, null, 2)}</pre>}
        
        
      </AppLayout>
    </>
  )
}