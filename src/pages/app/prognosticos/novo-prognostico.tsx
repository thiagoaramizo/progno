import { TribunalType } from "@/@types/PrognosticoType";
import { AppLayout } from "@/components/appLayout";
import { Button } from "@/components/forms/button";
import { SeletorOpcao } from "@/components/forms/seletorOpcao";
import { TituloEtapa } from "@/components/forms/tituloEtapa";
import { ItemPrognostico } from "@/components/itemPrognostico";
import { Titulo } from "@/components/titulo";
import { AppContext } from "@/context/AppContext";
import { classesProcessuais } from "@/data/mocks";
import { Lightbulb, WarningCircle } from "@phosphor-icons/react";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";


export default function NovoPrognostico() {

  const totalEtapas = 3
  const [etapa, setEtapa] = useState(1)
  const [tribunais, setTribunais] = useState<TribunalType[]>()
  const classes = classesProcessuais
  const { tribunal, setTribunal, cidade, setCidade, jurisdicao, setJurisdicao, classe, setClasse, assunto, setAssunto, prognosticoResultado, reset } = useContext(AppContext)

  useEffect(()=>{
    reset()
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
        <div className="flex flex-col gap-8 w-100 max-w-3xl mx-auto">
          <div className="flex items-center justify-between">
            <Titulo>Novo <strong>Prognóstico</strong></Titulo>
            <div className="text-primary-500 text-sm">{etapa} de {totalEtapas} etapas</div>
          </div>
            
          {etapa === 1 && (
            <>
              <TituloEtapa>Defina qual a jurisdição</TituloEtapa>
              {tribunais && <SeletorOpcao titulo="Selecione o tribunal" opcoes={tribunais} valor={tribunal} setValor={setTribunal} />}
              {tribunais && <SeletorOpcao titulo="Selecione a região/comarca" opcoes={tribunais[0].cidades} valor={cidade} setValor={setCidade} />}
              {tribunais && <SeletorOpcao titulo="Selecione a Jurisdição (opcional)" opcoes={tribunais[0].cidades[0].jurisdicoes} valor={jurisdicao} setValor={setJurisdicao}/>}
            </>
          )}

          {etapa === 2 && (
            <>
              <TituloEtapa>Indique a classe do processo</TituloEtapa>
              <SeletorOpcao titulo="Selecione a Classe" opcoes={classes} valor={classe} setValor={setClasse}/>
              <SeletorOpcao titulo="Selecione o assunto (opcional)" opcoes={classes[0].assuntos} valor={assunto} setValor={setAssunto}/>
              <div className="flex gap-4 items-center">
                <WarningCircle size={50} className="text-slate-300"/>
                <span className="text-sm text-slate-400">Serão inseridos ainda campos para informações financeiras, como, por exemplo, valor estimado da causa e modelos de contratação de honorários (fixos, ad exitum, taxa de manutenção mensal etc).</span>
              </div>
            </>
          )}

          {etapa === 3 && (
            <>
              <TituloEtapa>Revise as informações do prognóstico</TituloEtapa>

              <ItemPrognostico valor={tribunal} titulo="Tribunal"/>
              <ItemPrognostico valor={cidade} titulo="Comarca/Região"/>
              <ItemPrognostico valor={jurisdicao} titulo="Jurisdição"/>
              <ItemPrognostico valor={classe} titulo="Classe"/>
              <ItemPrognostico valor={assunto} titulo="Assuntos"/>


              <div className="flex gap-4 items-center">
                <WarningCircle size={60} className="text-primary-500"/>
                <span className="text-sm">Certifique-se de que todas as informações estão corretas. Ao criar o novo prognóstico 01 crédito será descontado da sua conta.</span>
              </div>
            </>
          )}
          
          {etapa < 4 && <div className="flex items-center justify-between">
            <Button variant="secondary" onClick={handleVoltarEtapa} disabled={etapa === 1} className="transition-all disabled:opacity-50 enabled:hover:scale-105 enabled:active:scale-100">Voltar</Button>
            {etapa !== 3 && <Button variant="primary" onClick={handleAvancarEtapa} className="transition-all hover:scale-105 active:scale-100">Próxima</Button> }
            {etapa === 3 && <Link href={'/app/prognosticos/prognostico'} className={'flex items-center justify-center gap-2 leading-6 rounded-md px-4 py-2 font-semibold text-white shadow-sm bg-primary-500 hover:bg-primary-400 transition-all hover:scale-105 active:scale-100'}><Lightbulb size={24}/>Criar prognóstico</Link> }
          </div> }
        </div>
      </AppLayout>
    </>
  )
}