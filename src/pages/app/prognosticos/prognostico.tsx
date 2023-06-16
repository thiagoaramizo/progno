import { AppLayout } from "@/components/appLayout";
import { CaixaRelatorio } from "@/components/caixaRelatorio";
import { CarregandoRelatorio } from "@/components/carregandoRelatorio";
import { CustoCliente } from "@/components/custoCliente";
import { ItemRelatorio } from "@/components/itemRelatorio";
import { LinhaTempoPrimeira } from "@/components/linhaTempoPrimeira";
import { PredicaoDecisao } from "@/components/predicaoDecisao";
import { Titulo } from "@/components/titulo";
import { TituloRelatorio } from "@/components/tituloRelatorio";
import { ViabilidadeFinanceira } from "@/components/viabilidadeFinanceira";
import { AppContext } from "@/context/AppContext";
import { WarningCircle } from "@phosphor-icons/react";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";

export default function PrognosticoRelatorio() {

  const { tribunal, cidade, jurisdicao, classe, assunto, prognosticoResultado, creditos, setCreditos } = useContext(AppContext)
  const [carregando, setCarregando] = useState(true)

  const carregarRelatorio = async () => {
    const timer = await new Promise((r) => {setTimeout(r, 1300)})
    setCarregando(false)
    if( creditos > 0 ){
      setCreditos( creditos - 1)
    }
  }

  useEffect(() => {
    carregarRelatorio()
  },[])

  return (
    <>
      <Head>
        <title>Progno | Prognóstico</title>
      </Head>
      <AppLayout>
        <div className="flex flex-col gap-8 w-100 max-w-4xl mx-auto">
          <Titulo>Relatório de <strong>Prognóstico</strong></Titulo>
          { carregando ? 
          <CarregandoRelatorio />
           : 
          <div className="flex flex-col gap-6">
            <CaixaRelatorio>
              <TituloRelatorio>Jurisdição</TituloRelatorio>
              <ItemRelatorio valor={tribunal} titulo="Tribunal"/>
              <ItemRelatorio valor={cidade} titulo="Comarca/Região"/>
              <ItemRelatorio valor={jurisdicao} titulo="Jurisdição"/>
            </CaixaRelatorio>
            <CaixaRelatorio>
              <TituloRelatorio>Classificação</TituloRelatorio>
              <ItemRelatorio valor={classe} titulo="Classe"/>
              <ItemRelatorio valor={assunto} titulo="Assuntos"/>
            </CaixaRelatorio>
            <CaixaRelatorio>
              <TituloRelatorio>Estimativa de tempo</TituloRelatorio>
              <LinhaTempoPrimeira tempo={prognosticoResultado.tempoEstimado}/>
              <span className="block text-xs">Estimativa calculada utilizando modelo jurimétrico com base na média de processos similares - Versão do modelo 0.0.0.1</span>
            </CaixaRelatorio>
            <div className="flex flex-col gap-6">
              <CaixaRelatorio>
                <TituloRelatorio>Estimativa de custos para o cliente</TituloRelatorio>
                <CustoCliente custasIniciais={prognosticoResultado.custasIniciais} honorariosMinimos={prognosticoResultado.honorariosMinimos} tempo={prognosticoResultado.tempoEstimado} taxaManutencao={prognosticoResultado.taxaManutencao} />
                <span className="block text-xs">Estimativa calculada utilizando tabela de custas do {tribunal} e tabela de Honorários da OAB/MG - Versão do modelo 0.0.0.1</span>
              </CaixaRelatorio>
              <CaixaRelatorio>
                <TituloRelatorio>Predição de resultado</TituloRelatorio>
                <PredicaoDecisao sentenca={prognosticoResultado.sentenca} />
                <span className="block text-xs">Estimativa calculada utilizando modelo jurimétrico com base na média de processos similares - Versão do modelo 0.0.0.1</span>
              </CaixaRelatorio>
            </div>
            
            <CaixaRelatorio>
              <TituloRelatorio>Viabilidade financeira (1º instância)</TituloRelatorio>
              <ViabilidadeFinanceira condenacao={prognosticoResultado.sentenca.valor} honorariosMinimos={prognosticoResultado.honorariosMinimos} tempo={prognosticoResultado.tempoEstimado} taxaManutencao={prognosticoResultado.taxaManutencao} />
              <span className="block text-xs">Estimativa calculada utilizando tabela de Honorários da OAB/MG - Versão do modelo 0.0.0.1</span>
            </CaixaRelatorio>
          </div>
        }

          <div className="flex gap-4 items-center">
            <WarningCircle size={60} className="text-primary-500"/>
            <span className="text-sm">O presente relatório é apresentado para fins de estimativa e não constitui promessa de resultado. <strong>Atenção:</strong> O presente sistema de prognóstico ainda se encontra em suas etapas iniciais de desenvolvimento e podem conter imprecisões, sendo recomendada sua utilização apenas para fins de testes.</span>
          </div>
              
              
          </div>
      </AppLayout>
      
    </>
  )
}