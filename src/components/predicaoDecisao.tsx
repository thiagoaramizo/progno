import { Gavel } from "@phosphor-icons/react";
import { ItemRelatorio } from "./itemRelatorio";

interface PredicaoDecisaoProps {
  sentenca: {
    procedencia: string,
    indicador: number,
    valor: number
  }
}

export function PredicaoDecisao ({sentenca}: PredicaoDecisaoProps) {

  return (
    <div className="py-6">
      <div className="flex items-center justify-center py-4 text-secondary-500">
        <Gavel size={60}/>
        <div className="flex divide-x">
          <div className="px-2">
            <span className="block font-semibold">Sentença</span>
            <strong className="text-3xl">{sentenca.procedencia}</strong>
          </div>
          <div className="px-2">
            <span className="block font-semibold">Condenação</span>
            <strong className="text-3xl">R$ {sentenca.valor},00</strong>
          </div>
        </div>
      </div>
    </div>

  )
}