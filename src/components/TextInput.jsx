export default function TextInput({label, id, ...props}){
    return (
        <div className="flex flex-col gap-1 my-2">
            <label className="text-slate-100 font-semibold" htmlFor={id}>{label}</label>
            <input type="text" {...props} id={id} className="bg-slate-800 rounded p-2 outline-none focus:ring-pink-600 focus:ring-1" />
        </div>
    )
}