import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";

async function getContas(){
  const url = "http://localhost:8080/api/contas"
  const response = await fetch(url,  { next: { revalidate: 0 } })
  return response.json()
}

export default async function Contas() {
  const data = await getContas()

  return (
    <>
      <NavBar active={"contas"} />

      <main className="bg-slate-900 m-20 p-8 rounded">
        <h2 className="text-xl text-slate-100">Contas</h2>

        <div>
          <div id="data" className="text-slate-300">
            {data.map(conta => {
              return <DataRow conta={conta} />
            })}
            
          </div>
        </div>
      </main>
    </>
  )
}
