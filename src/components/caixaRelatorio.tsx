import { ReactNode } from "react"

interface CaixaRelatorioProps {
  children: ReactNode
}

export function CaixaRelatorio ({ children }:CaixaRelatorioProps) {
  return (
    <div className="relative px-4 pt-2 pb-4 border border-slate-200 rounded-md bg-slate-50">
      {children}
    </div>
  )
}