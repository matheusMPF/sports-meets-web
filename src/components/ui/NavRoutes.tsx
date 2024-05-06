import { ArrowLeft2 } from "iconsax-react"
import { ReactNode } from "react"
import { Link } from "react-router-dom"

interface NavRoutesProps {
    routerName: string,
    to: string
}

export const NavRoutes = ({
    routerName,
    to

}: NavRoutesProps) => {
    return (
        <div className="bg-background-200 rounded-xl p-4 w-full flex gap-4">
            <Link to={to}>
            <ArrowLeft2 size="32" color="#3b82f6" className="hover:opacity-30 transition-all"/>
            </Link>
            <h2 className="text-xl font-semibold">{routerName}</h2>
        </div>

    )
}