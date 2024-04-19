import { Link } from "react-router-dom"
import { CirclePlus, CircleUserRound, Home } from "lucide-react"

export const Navbar = () => {
    return (
        <nav className="flex gap-8">

            <Link to="/" className="flex flex-col items-center group hover:text-blue-500 transition-all">
                <Home className="w-6" />
                <span className="relative overflow-hidden">
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all ease-in-out"></span>
                </span>
            </Link>

            <Link to="/create-event" className="flex flex-col items-center group hover:text-blue-500 transition-all">
                <CirclePlus className="w-6" />
                <span className="relative overflow-hidden">
                    Criar Evento
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all ease-in-out"></span>
                </span>
            </Link>
            
            <Link to="/my-account" className="flex flex-col items-center group hover:text-blue-500 transition-all">
                <CircleUserRound className="w-6" />
                <span className="relative overflow-hidden">
                    Minha Conta
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all ease-in-out"></span>
                </span>
            </Link>

            
        </nav>
    )
}