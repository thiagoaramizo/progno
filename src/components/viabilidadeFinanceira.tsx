import { HandCoins } from "@phosphor-icons/react";
import { ItemRelatorio } from "./itemRelatorio";

interface ViabildiadeFinanceiraProps {
  honorariosMinimos: number,
  taxaManutencao: number,
  condenacao: number,
  tempo: {
    contestacao: number
    aij: number
    sentenca: number
  }
}

export function ViabilidadeFinanceira ({ honorariosMinimos, taxaManutencao, condenacao, tempo}: ViabildiadeFinanceiraProps) {

  const percentualAdExitum = 0.2
  const percentualSucumbencia = 0.1
  const totalMeses = Math.floor ( (tempo.sentenca + tempo.aij + tempo.contestacao) / 30 )
  const totalReceita = Math.floor ( honorariosMinimos + ( taxaManutencao * totalMeses ) + ( condenacao * percentualAdExitum) +  ( condenacao * percentualSucumbencia))
  const totalDiluida = Math.floor ( totalReceita / totalMeses )

  return (
    <div className="py-6">
      <div className="flex items-center justify-center gap-2 py-4 text-secondary-500">
        <HandCoins size={60}/>
        <div>
          <span className="block font-semibold">Receita total</span>
          <strong className="text-3xl">R${totalReceita},00</strong>
        </div>
      </div>
      <div className="flex gap-8">
        <div>
          <ItemRelatorio valor={'R$ '+honorariosMinimos+',00'} titulo="Honorário contratual fixo"/>
          <ItemRelatorio valor={'R$ '+condenacao*percentualAdExitum+',00'} titulo="Honorário ad exitum (provável)"/>
          <ItemRelatorio valor={'R$ '+condenacao*percentualSucumbencia+',00'} titulo="Honorário de sucumbência (provável)"/>
        </div>
        <div>
          <ItemRelatorio valor={'R$ '+taxaManutencao*totalMeses+',00'} titulo={`Taxa de manutenção por ${totalMeses} meses`}/>
          <ItemRelatorio valor={'R$ '+totalDiluida+',00/mês'} titulo={`Total diluído por ${totalMeses} meses`}/>
        </div>
      </div>
      
    </div>

  )
}