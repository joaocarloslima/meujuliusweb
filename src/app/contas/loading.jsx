import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";
import Button from "@/components/Button";
import { CreditCardIcon } from "@heroicons/react/24/outline";
import { getContas } from "@/actions/contas";
import { Skeleton } from "@/components/ui/skeleton";

export default async function Loading() {
    return (
        <>
            <NavBar active={"contas"} />

            <main className="bg-slate-900 m-20 p-8 rounded">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl text-slate-100">Contas</h2>
                    <Button icon={<CreditCardIcon className="h-6 w-6" />} href="/contas/new">
                        criar conta
                    </Button>
                </div>

                <div>
                    <div id="data" className="text-slate-300">
                        {Array(3).fill({}).map(() => {
                            return (
                                <div id="data-row" className="flex items-center justify-between hover:bg-slate-800 p-2 my-2 cursor-pointer rounded text-slate-300" >
                                    <div className="flex gap-1">
                                        <Skeleton className="h-6 w-6 bg-slate-600 rounded-full" />
                                        <Skeleton className="h-6 w-32 bg-slate-600"/>
                                    </div>
                                    <div className="flex gap-1 items-center">
                                        <Skeleton className="h-6 w-10 bg-slate-600"/>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </main>
        </>
    )
}
