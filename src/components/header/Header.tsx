import Logo from "../../assets/logo.svg"
import { Navbar } from "./Navbar"
import { SearchEvents } from "./SearchEvents"

export const Header = () => {

    return (

        <div className="navbar-container bg-zinc-900 flex justify-between px-16 py-4 items-center">

            <img src={Logo} alt="Logo Sport's Meet's" className="w-16 " />

            <SearchEvents />
            <Navbar/> 

            
        </div>
    )
}