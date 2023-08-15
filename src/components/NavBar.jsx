import Link from "next/link";

export default function NavBar({ active }) {
    return (
        <nav className="flex justify-between items-center bg-slate-900 px-6 py-4">
            <ul className="flex gap-20 items-end">
                <li>
                    <Link href="/">
                        <h1 className="text-2xl text-slate-100">
                            MeuJulius
                        </h1>
                    </Link>
                </li>
                <li>
                    <Link className={active == "despesas" && "text-slate-100"} href="/despesas">
                        despesas
                    </Link>
                </li>
                <li>
                    <Link className={active == "contas" && "text-slate-100"} href="/contas">
                        contas
                    </Link>
                </li>
                <li>
                    <Link className={active == "categorias" && "text-slate-100"} href="/categorias">
                        categorias
                    </Link>
                </li>
                
            </ul>

            <div className="h-12 w-12 rounded-full overflow-hidden" >
                <img src="https://i.pravatar.cc/100" alt="avatar do usuário" />
            </div>

        </nav>
    )
}