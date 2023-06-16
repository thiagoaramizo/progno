import { Wrench } from "@phosphor-icons/react"
import { ReactNode } from "react"

interface ConstrucaoProps {
  children: ReactNode
}

export function Construcao ({ children }:ConstrucaoProps) {
  return (
    <div className="flex flex-col items-center gap-2 bg-slate-200 my-8 pt-8 pb-16 px-16 text-slate-600 rounded-xl shadow-md text-center">
      <Wrench size={128} weight="thin" className="text-slate-400" />
      <h2 className="text-3xl uppercase font-bold text-slate-400">Recurso em construção</h2>
      {children}
    </div>
  )
}