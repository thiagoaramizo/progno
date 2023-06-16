import { ReactNode } from "react"

interface ItemPrognosticoProps {
  titulo: string
  valor?: string
}

export function ItemPrognostico ({ titulo, valor }:ItemPrognosticoProps) {
  return (
    <div className="flex gap-2 items-center">
      <div className="block text-sm font-medium leading-6 text-gray-900">{titulo}</div>
      <div className="cursor-not-allowed p-2 flex-1 items-center justify-between border bg-white rounded-md">
        {valor || 'Não informado'}
      </div>
    </div>
  )
}