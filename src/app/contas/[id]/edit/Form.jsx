"use client"

import { update } from "@/actions/contas";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import { ArrowLeftIcon, CheckIcon } from "@heroicons/react/24/outline";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function Form({conta}) {
    const [contaEdit, setContaEdit] = useState(conta)
    const [error, setError] = useState("")

    function handleFieldChange(field, value){
        setContaEdit({
            ...contaEdit,
            [field]: value
        })
    }

    async function handleSubmit(){
        const response = await update(contaEdit)
        if (response?.error){
            setError(response.error)
            return
        }

        redirect("/contas")

    }
    
    return (
        <form action={handleSubmit}>
            <TextInput 
                name="nome" 
                id="nome" 
                label="nome" 
                value={contaEdit.nome}  
                onChange={e => handleFieldChange("nome", e.target.value)}
            />
            <TextInput 
                name="icone" 
                id="icone" 
                label="ícone" 
                value={contaEdit.icone} 
                onChange={e => handleFieldChange("icone", e.target.value)}
            />

            <div className="flex justify-around">
                <Button href="/contas" variant="secondary" icon={<ArrowLeftIcon className="h6 w-6" />}>
                    cancelar
                </Button>
                <Button element="button" icon={<CheckIcon className="h6 w-6" />}>
                    salvar
                </Button>

            </div>
            <p className="text-red-400">{error}</p>

        </form>
    )
}