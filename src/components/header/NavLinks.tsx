import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface NavLinkProps {
    to: string,
    icon: ReactNode,
    children: string,
}

export function NavLinks({
    to,
    icon,
    children
}: NavLinkProps){
    return(
        <Link to={to} className="flex flex-col items-center group hover:text-blue-500 transition-all hover:scale-110">
                {icon}
                <span className="relative overflow-hidden text-sm">
                    {children}
                    {/* <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all ease-in-out"></span> */}
                </span>
            </Link>
    )
}