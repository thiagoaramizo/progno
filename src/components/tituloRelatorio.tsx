import { ReactNode } from "react"

interface TituloRelatorioProps {
  children: ReactNode
}

export function TituloRelatorio ({children}: TituloRelatorioProps) {
  return (
    <h2 className="text-primary-500 text-lg font-semibold mb-1.5">
      {children}
    </h2>
  )
}