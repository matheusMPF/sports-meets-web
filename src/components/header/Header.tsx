import { Link } from "react-router-dom"
import Logo from "../../assets/logo.svg"
import { Navbar } from "./Navbar"
import { SearchEvents } from "./SearchEvents"

export const Header = () => {

    return (

        <div className="w-full navbar-container bg-background-200 flex justify-between px-16 py-4 items-center text-text-100">

            <Link to="/">
                <img src={Logo} alt="Logo Sport's Meet's" className="w-16 hover:opacity-40 cursor-pointer" />
            </Link>

            <SearchEvents />
            <Navbar />


        </div>
    )
}