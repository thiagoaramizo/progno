import { CaretDown } from "@phosphor-icons/react"
import { useState } from "react"


interface OpcaoType {
  nome: string,
  id: string | number,
}

interface SeletorOpcaoProps {
  titulo: string
  opcoes: OpcaoType[]
  valor?: string
  setValor: (valor: string) => void
}

export function SeletorOpcao({titulo, opcoes, valor, setValor }: SeletorOpcaoProps) {

  const [exibirOpcoes, setExibirOpcoes] = useState(false)

  const handleExibirOpcoes = () => {
    setExibirOpcoes(!exibirOpcoes)
  }

  const handleSelecionar = (valorSelecionado: string ) => {
    setValor(valorSelecionado)
    setExibirOpcoes(false)
  }

  return (
    <div className="flex flex-col ">
      <div className="block text-sm font-medium leading-6 text-gray-900">{titulo}</div>
      <div onClick={handleExibirOpcoes} className="cursor-pointer p-2 flex items-center justify-between border bg-white rounded-md">
        {valor || 'Selecione uma opção'}
        <CaretDown size={24} aria-checked={exibirOpcoes} className="transition-transform aria-checked:rotate-180"/>
      </div>
      {exibirOpcoes && <div className="flex flex-col divide-y border bg-white rounded-md shadow-lg">
        {opcoes.map( opcao => (
          <div 
            key={opcao.id} 
            onClick={() => handleSelecionar(opcao.nome)}
            className="p-2 cursor-pointer hover:bg-slate-100"
          >{opcao.nome}</div>)
        )}
      </div>}
      
    </div>
  )
}