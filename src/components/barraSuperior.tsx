import { AppContext } from "@/context/AppContext";
import { Coin, UserCircle } from "@phosphor-icons/react";
import Link from "next/link";
import { useContext } from "react";

export function BarraSuperior () {

  const {creditos} = useContext(AppContext)

  return (
    <nav className="w-100 bg-slate-300 px-8 py-4 flex items-center justify-between">
      <Link href={'/app/extrato'} className="flex items-center justify-end gap-1 bg-slate-100 text-slate-600 rounded-lg py-2 px-3 text-sm">
        <Coin size={20} weight="bold"/> <span className="font-semibold"><strong>0{creditos}</strong> créditos restantes</span>
      </Link>

      <div className="flex items-center justify-end gap-2">
        <span>Bem vindo <strong>Thiago</strong></span>
        <UserCircle size={32} weight="light" />
      </div>
    </nav>
  )
}