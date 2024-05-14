import { NavRoutes } from "../components/ui/NavRoutes"
import { WorkingHere } from "./Warning/WorkingHere"

export const MyReviews = () => {
   return (
      <section className="h-screen w-screen flex gap-4 flex-col justify-center items-center">
         <div className="flex flex-col gap-8">
            <NavRoutes to="/my-account" routerName="Minhas Avaliações" />
            <WorkingHere />
         </div>

      </section>


   )

}