'use server'

import { revalidatePath } from "next/cache"

const url = process.env.NEXT_PUBLIC_BASE_URL + "/contas"

export async function create(formData){
    
    const options = {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)) ,
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(url, options)
    if (resp.status !== 201){
        const json = await resp.json()
        const mensagens = json.reduce((str, erro) => str += ". " + erro.message, "")
        return {error: "Erro ao cadastrar" + mensagens}
    }

    revalidatePath("/contas")
    return {ok: "Conta cadastrada com sucesso"}
}

export async function getContas(){
    const response = await fetch(url,  { next: { revalidate: 3600 } })
    return response.json()
  }