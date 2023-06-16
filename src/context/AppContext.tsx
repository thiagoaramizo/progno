import { prognosticoResultadoType } from '@/@types/PrognosticoType'
import { prognostico } from '@/data/mocks'
import { createContext, ReactNode, useState } from 'react'

interface contextProviderProps {
  children: ReactNode
}

interface AppContextType {
  tribunal: string
  setTribunal: (tribunal: string) => void
  cidade: string
  setCidade: (cidade: string) => void
  jurisdicao: string
  setJurisdicao: (jurisdicao: string) => void
  classe: string
  setClasse: (classe: string) => void
  assunto: string
  setAssunto: (assunto: string) => void
  prognosticoResultado: prognosticoResultadoType
  reset: () => void
  creditos: number
  setCreditos: (creditos: number) => void
}

export const AppContext = createContext({} as AppContextType)

export function AppContextProvider({ children }: contextProviderProps) {
  
  const [tribunal, setTribunal] = useState('')
  const [cidade, setCidade] = useState('')
  const [jurisdicao, setJurisdicao] = useState('')
  const [classe, setClasse] = useState('')
  const [assunto, setAssunto] = useState('')
  const [creditos, setCreditos] = useState(9)

  function reset() {
    setTribunal('')
    setCidade('')
    setJurisdicao('')
    setClasse('')
    setAssunto('')
  }

  const prognosticoResultado = prognostico
  
  return (
    <AppContext.Provider value={ { tribunal, setTribunal, cidade, setCidade, jurisdicao, setJurisdicao, classe, setClasse, assunto, setAssunto, prognosticoResultado, reset, creditos, setCreditos } }>
      {children}
    </AppContext.Provider>
  )
}