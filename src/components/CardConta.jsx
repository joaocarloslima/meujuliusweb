import { CreditCardIcon } from "@heroicons/react/24/outline";

import { Monomaniac_One } from "next/font/google"

const mono = Monomaniac_One({
    weight: '400',
    subsets: ['latin']
})

export default function CardConta({conta}){
    const saldo = conta.saldo.toLocaleString("pt-BR", {minimumFractionDigits: 2,maximumFractionDigits: 2,})
    const receitas = conta.receitas.toLocaleString("pt-BR", {minimumFractionDigits: 2,maximumFractionDigits: 2,})
    const despesas = conta.despesas.toLocaleString("pt-BR", {minimumFractionDigits: 2,maximumFractionDigits: 2,})

    return(
        <div className="flex flex-col gap-3 bg-slate-900 max-w-sm rounded p-3">
            <div className="flex items-center gap-3">
                <CreditCardIcon className="h-8 w-8 text-slate-400" />
                <span className="text-xl">{conta.nome}</span>
            </div>
            <span className={`${mono.className} text-5xl text-white`}>R$ {saldo}</span>
            <div className="flex justify-between">
                <span className="text-emerald-400">R$ {receitas}</span>
                <span className="text-rose-600">R$ {despesas}</span>
            </div>
        </div>
    )
}