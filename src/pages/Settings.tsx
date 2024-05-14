import { NavRoutes } from "../components/ui/NavRoutes"
import { WorkingHere } from "./Warning/WorkingHere"

export const Settings = () => {
    return (

        <section className="h-screen w-screen flex gap-4 flex-col justify-center items-center">
            <div className="flex flex-col gap-8">
                <NavRoutes to="/my-account" routerName="Configurações" />
                <WorkingHere />
            </div>

        </section>



    )
}