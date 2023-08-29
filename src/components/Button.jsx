import Link from "next/link"

export default function Button({children, icon, variant="primary", element="link", ...props}){
    const styles = {
        primary: "flex  items-center gap-2 bg-pink-600 py-1 px-4 rounded hover:bg-pink-800",
        secondary: "flex items-center gap-2 border-2 border-slate-500 py-1 px-4 rounded hover:bg-slate-700"
    }

    const variantClass = styles[variant]

    return(
        <>
        {element==="link"?
            <Link href="#" {...props} className={variantClass}>
                {icon}
                {children}
            </Link>
        :
            <div className={variantClass} >
                {icon}
                <input type="submit" value={children} />
            </div>
        }   
        </>
    )
}