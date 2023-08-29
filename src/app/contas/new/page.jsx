"use client"

import { create } from "@/actions/contas";
import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import TextInput from "@/components/TextInput";
import { ArrowLeftIcon, CheckIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { redirect } from 'next/navigation'


export default function FormConta(){
    const [messagem, setMessage] = useState("")

    async function handleSubmit(formData){
        const resp = await create(formData)
        console.log(resp)
        if (resp.error){
            setMessage(resp.error)
            return
        }
        redirect("/contas")
    }

    return(
        <>
            <NavBar active={"contas"} />

            <main className="bg-slate-900 mt-10 p-8 rounded max-w-lg m-auto">
                <h2 className="text-xl text-slate-100">Cadastrar Conta</h2>

                <form action={handleSubmit}>
                    <TextInput name="nome" id="nome" label="nome" />
                    <TextInput name="saldo_inicial" id="saldoInicial" label="saldo inicial" />
                    <TextInput name="icone" id="icone" label="ícone" />

                    <div className="flex justify-around">
                        <Button href="/contas" variant="secondary" icon={<ArrowLeftIcon className="h6 w-6" />}>
                            cancelar
                        </Button>
                        <Button element="button" icon={<CheckIcon className="h6 w-6" />}>
                            salvar
                        </Button>

                    </div> 
                    <p>{messagem}</p>

                </form>
            </main>
        </>
    )
}