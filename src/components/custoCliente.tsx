import { Timer, Wallet } from "@phosphor-icons/react";
import Image from "next/image";
import { ItemRelatorio } from "./itemRelatorio";

interface CustoClienteProps {
  custasIniciais: number,
  honorariosMinimos: number,
  taxaManutencao: number,
  tempo: {
    contestacao: number
    aij: number
    sentenca: number
  }
}

export function CustoCliente ({custasIniciais, honorariosMinimos, taxaManutencao, tempo}: CustoClienteProps) {

  const totalMeses = Math.floor ( (tempo.sentenca + tempo.aij + tempo.contestacao) / 30 )
  const totalCusto = custasIniciais + honorariosMinimos + ( taxaManutencao * totalMeses )

  return (
    <div className="py-6">
      <div className="flex items-center justify-center gap-2 py-4 text-secondary-500">
        <Wallet size={60}/>
        <div>
          <span className="block font-semibold">Custo de ajuizamento</span>
          <strong className="text-3xl">R${totalCusto},00</strong>
        </div>
      </div>
      <div>
        <div>
          <ItemRelatorio valor={'R$ '+custasIniciais+',00'} titulo="Custas iniciais"/>
          <ItemRelatorio valor={'R$ '+honorariosMinimos+',00'} titulo="Honorários mínimos"/>
          <ItemRelatorio valor={'R$ '+taxaManutencao*totalMeses+',00'} titulo={`Taxa de manutenção por ${totalMeses} meses`}/>
        </div>
      </div>
      
    </div>

  )
}