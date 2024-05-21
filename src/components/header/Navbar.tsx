import { AddCircle, Home, UserOctagon } from "iconsax-react"
import { NavLinks } from "./NavLinks"

export const Navbar = () => {
    return (
        <nav className="flex gap-8">
            <NavLinks to="/sports-meets-web" icon={<Home size="28" variant="Bulk"/>} >Home</NavLinks>
            <NavLinks to="/create-event" icon={<AddCircle size="28" variant="Bulk"/>} >Criar evento</NavLinks>
            <NavLinks to="/my-account" icon={<UserOctagon size="28" variant="Bulk"/>} >Minha conta</NavLinks>
        </nav>
    )
}