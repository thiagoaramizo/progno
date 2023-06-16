import { ReactNode } from "react"

interface ItemRelatorioProps {
  titulo: string
  valor?: string
}

export function ItemRelatorio ({ titulo, valor }:ItemRelatorioProps) {
  return (
    <div className="flex gap-2 items-top">
      <div className="block font-semibold leading-6 text-gray-700">{titulo}:</div>
      <div className="block font-light leading-6 text-gray-900">{valor || 'Não informado'}</div>
    </div>
  )
}