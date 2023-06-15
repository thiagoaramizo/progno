import Link from "next/link";
import { ReactNode } from "react";
import { MenuLateral } from "./menuLateral";
import { BarraSuperior } from "./barraSuperior";

interface AppLayoutProps {
  children: ReactNode
}

export function AppLayout ( {children}:AppLayoutProps ) {
  return (
    <>
    <div className="grid grid-cols-app h-screen">
      <MenuLateral />
      <div className="bg-slate-100 h-screen overflow-x-hidden overflow-y-auto">
        <BarraSuperior />
        <div className="p-8">
         {children}
        </div>
      </div>
      
    </div>
      


      
    </>
  )
}