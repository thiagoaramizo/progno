import { ReactNode } from "react"

interface TituloEtapaProps {
  children: ReactNode
}

export function TituloEtapa ({children}: TituloEtapaProps) {
  return (
    <h2 className="text-primary-500 text-xl font-semibold">
      {children}
    </h2>
  )
}