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
    await new Promise(r => setTimeout(r, 5000));
    const response = await fetch(url,  { next: { revalidate: 3600 } })
    return response.json()
}

export async function destroy(id){
    const deleteUrl = url + "/" + id
   
    const options = {
        method: "DELETE"
    }

    const response = await fetch(deleteUrl, options)

    if (!response.ok){
        const json = await response.json()
        return {error: "Falha ao apagar conta. Verifique se existem despesas nesta conta. "}
    }

    revalidatePath("/contas")


}

export async function getConta(id){
    const getUrl = url + "/" + id
    const response = await fetch(getUrl)

    const json = await response.json()
    
    if (!response.ok){
        return {error: "Falha ao carregar conta. " + json.message}
    }

    return json
}

export async function update(conta){
    const updateUrl = url + "/" + conta.id
    
    const options = {
        method: "PUT",
        body: JSON.stringify(conta) ,
        headers: {
            "Content-Type": "application/json"
        }
    }

    const response = await fetch(updateUrl, options)

    if (!response.ok){
        const json = await response.json()
        return {error: "Erro ao atualizar" + json.message }
    }

    revalidatePath("/contas")

    return {ok: "Conta alterada com sucesso"}
}