import Link from "next/link";
import { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode
}

export function AppLayout ( {children}:AppLayoutProps ) {
  return (
    <>
    <div className="flex gap-8">
      <div>
        <h1>Progno</h1>
        <li><Link href={'/app'} >Início</Link></li>
        <li><Link href={'/app/novo-prognostico'} >Novo prognóstico</Link></li>
        <li><Link href={'/'} >Sair</Link></li>
      </div>
      <div>
        {children}
      </div>
    </div>
      


      
    </>
  )
}