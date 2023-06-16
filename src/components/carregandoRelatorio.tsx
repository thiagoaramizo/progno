import { SpinnerGap,  } from "@phosphor-icons/react"

export function CarregandoRelatorio () {
  return (
    <div className="flex flex-col items-center gap-2 bg-slate-200 my-8 py-8 px-16 text-slate-600 rounded-xl shadow-md text-center">
      <SpinnerGap size={60} className="text-slate-400 animate-spin" />
      <h2 className="text-3xl uppercase font-bold text-slate-400">Processando relatório...</h2>
    </div>
  )
}