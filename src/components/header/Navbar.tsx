import { Link } from "react-router-dom"
import { CirclePlus, CircleUserRound, Home } from "lucide-react"

export const Navbar = () => {
    return(
        <nav className="flex gap-8">

                    <Link to="/" className="flex flex-col items-center hover:scale-110 hover:transition-all hover:text-white/30">
                        <Home className="w-6" />
                        <span>Home</span>
                    </Link>

                    <Link to="/create-event" className="flex flex-col items-center hover:scale-110 hover:transition-all hover:text-white/30">
                        <CirclePlus className="w-6" />
                        <span>Criar evento</span>
                    </Link>

                    <Link to="/my-account" className="flex flex-col items-center hover:scale-110 hover:transition-all hover:text-white/30">
                        <CircleUserRound className="w-6" />
                        <span>Minha Conta</span>
                    </Link>
            </nav>
    )
}