import { getContas } from "@/actions/contas";
import CardConta from "@/components/CardConta";
import NavBar from "@/components/NavBar";

export default async function Home() {

  const contas = await getContas()

  return (
    <>
      <NavBar />

    <main className="max-w-3xl m-auto">
      <div className="grid auto-cols-max grid-flow-col gap-5 p-5 overflow-x-auto">
        {contas.map(conta => <CardConta key={conta.id} conta={conta} />)}
      </div>

    </main>

    </>


  )
}
