import { AddCircle, Home, UserOctagon } from "iconsax-react"
import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="flex gap-8">

            <Link to="/" className="flex flex-col items-center group hover:text-blue-500 transition-all">
                <Home size="26" color="#3B82F6" variant="Bulk" />
                <span className="relative overflow-hidden text-sm">
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all ease-in-out"></span>
                </span>
            </Link>

            <Link to="/create-event" className="flex flex-col items-center group hover:text-blue-500 transition-all">
                <AddCircle size="26" color="#3B82F6" variant="Bulk" />
                <span className="relative overflow-hidden text-sm">
                    Criar Evento
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all ease-in-out"></span>
                </span>
            </Link>

            <Link to="/my-account" className="flex flex-col items-center group hover:text-blue-500 transition-all">
                <UserOctagon size="26" color="#3B82F6" variant="Bulk" />
                <span className="relative overflow-hidden text-sm">
                    Minha Conta
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all ease-in-out"></span>
                </span>
            </Link>


        </nav>
    )
}