import Link from "next/link";
const LinkButton = ({children, href}: {children: string, href: string}) => {
    return (
        <Link className="p-4 bg-slate-800 border-none text-indigo-500 text-center font-bold rounded-lg hover:bg-slate-700 transition-all" href={href}>{children}</Link>
    )
}

export default LinkButton