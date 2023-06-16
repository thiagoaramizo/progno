import { ReactNode } from "react"

interface TituloProps {
  children: ReactNode
}

export function Titulo ({children}: TituloProps) {
  return (
    <h1 className="text-secondary-500 text-4xl">
      {children}
    </h1>
  )
}