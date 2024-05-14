import { NavRoutes } from "../components/ui/NavRoutes"
import { WorkingHere } from "./Warning/WorkingHere"

export const MyEvents = () => {
    return (
        <section className="h-screen w-screen flex flex-col justify-center items-center">
            <div className="flex flex-col gap-8">
                <NavRoutes to="/my-account" routerName="Meus Eventos" />
                <WorkingHere />
            </div>

        </section>


    )
}