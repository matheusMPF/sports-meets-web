import { NavRoutes } from "../components/ui/NavRoutes"
import { WorkingHere } from "./Warning/WorkingHere"

export const Support = () => {
    return (
        <section className="h-screen w-screen flex gap-4 flex-col justify-center items-center">
            <div className="flex flex-col gap-8">
                <NavRoutes to="/my-account" routerName="Suporte" />
                <WorkingHere />
            </div>
        </section>
    )
}