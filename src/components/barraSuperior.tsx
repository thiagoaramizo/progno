import { UserCircle } from "@phosphor-icons/react";

export function BarraSuperior () {
  return (
    <nav className="w-100 bg-slate-400 px-8 py-4 flex items-center justify-end gap-2">
      <span>Bem vindo <strong>Thiago</strong></span>
      <UserCircle size={32} weight="light" />
    </nav>
  )
}