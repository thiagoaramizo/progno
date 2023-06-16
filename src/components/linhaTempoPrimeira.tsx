import { Timer } from "@phosphor-icons/react";
import Image from "next/image";

interface LinhaTempoPrimeiraProps {
  tempo: {
    contestacao: number
    aij: number
    sentenca: number
  }
  
}

export function LinhaTempoPrimeira ({tempo}: LinhaTempoPrimeiraProps) {

  const totalMeses = Math.floor ( (tempo.sentenca + tempo.aij + tempo.contestacao) / 30 )
  const totalRestoDias = (tempo.sentenca - tempo.aij - tempo.contestacao) % 30 

  return (
    <div className="py-6">
      <div className="flex items-center justify-center gap-2 mb-8 py-4 text-secondary-500">
        <Timer size={60}/>
        <div>
          <span className="block font-semibold">Tempo total médio até sentença</span>
          <strong className="text-3xl">{totalMeses} meses e {totalRestoDias} dias</strong>
        </div>
      </div>
      <div className="flex justify-between px-32 text-center ">
        <div>{tempo.contestacao} dias</div>
        <div>{tempo.aij - tempo.contestacao} dias</div>
        <div>{tempo.sentenca - tempo.aij - tempo.contestacao} dias</div>
      </div>
      <Image src={'/linha-tempo-1.svg'} alt="" width={862} height={107} className="-mt-4" />
    </div>

  )
}