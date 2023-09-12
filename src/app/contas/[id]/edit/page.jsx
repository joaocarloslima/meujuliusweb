import NavBar from "@/components/NavBar";
import { getConta } from "@/actions/contas";
import Form from "./Form";

export default async function FormContaEdit({params}){
    const conta = await getConta(params.id)

    return(
        <>
            <NavBar active={"contas"} />

            <main className="bg-slate-900 mt-10 p-8 rounded max-w-lg m-auto">
                <h2 className="text-xl text-slate-100">Editar Conta</h2>

                <Form conta={conta} />
               
            </main>
        </>
    )
}