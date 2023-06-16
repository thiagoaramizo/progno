import { FolderNotchOpen, Gear, House, Lightbulb, PlusCircle, SignOut, Users } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export function MenuLateral () {
  return (
    <aside className="bg-secondary-500 text-slate-200 py-8 px-10 relative">
      <div>
        <Link href={'/app'} className="block transition-transform hover:scale-105">
          <Image src={'/logo-progno-nominal.svg'} alt="Progno" width={200} height={150} />
          <span className="block text-xs font-light text-slate-600 opacity-80">Versão Alfa 0.0.1</span>
        </Link>
      </div>
      <nav>
        <ul className="text-lg flex flex-col gap-6 mt-8">
          <li>
            <Link href={'/app'} className="flex gap-2 items-center transition-all hover:text-primary-400 active:scale-95"> <House size={24} className="text-primary-400" /> Início</Link>
          </li>
          <li className="flex items-center justify-between">
            <Link href={'/app/prognosticos'} className="flex gap-2 items-center transition-all hover:text-primary-400 active:scale-95"><Lightbulb size={24} className="text-primary-400"/> Prognósticos</Link>
            <Link href={'/app/prognosticos/novo-prognostico'} className="text-primary-400 transition-transform hover:scale-110 active:scale-100"><PlusCircle size={24} weight="fill" /></Link>
          </li>
          <li><Link href={'/app/processos'} className="flex gap-2 items-center transition-all hover:text-primary-400 active:scale-95"><FolderNotchOpen size={24} className="text-primary-400"/> Processos</Link></li>
          <li><Link href={'/app/clientes'} className="flex gap-2 items-center transition-all hover:text-primary-400 active:scale-95"><Users size={24} className="text-primary-400"/> Clientes</Link></li>
          <li><Link href={'/app/configuracoes'} className="flex gap-2 items-center transition-all hover:text-primary-400 active:scale-95"><Gear size={24} className="text-primary-400"/> Configurações</Link></li>
        </ul>
        <div className="absolute bottom-8 text-lg font-semibold text-slate-500">
          <Link href={'/'} className="flex gap-2 items-center transition-all hover:text-primary-400 hover:scale-105 active:scale-100"><SignOut size={24}/> Sair</Link>
        </div>
        
      </nav>
    </aside>
  )
}