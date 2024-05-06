import { Sms, Whatsapp } from "iconsax-react"
import { InfosEvents } from "./InfosEvent"

export const DescriptionEvent = () => {
    return (
        <div className="card flex flex-col w-full gap-8 bg-background-200 p-8 rounded-lg ">
            <h1 className="text-3xl font-bold">Ciclismo</h1>
            <div className="flex justify-between items-center">
                <h3 className="text-zinc-300">Organizador: Matheus Magalhães</h3>
                <div className="flex gap-4">
                    <Whatsapp size="24" color="#3b82f6" variant="Bulk" className="hover:opacity-50 cursor-pointer transition-all" />
                    <Sms size="24" color="#3b82f6" variant="Bulk" className="hover:opacity-50 cursor-pointer transition-all" />
                </div>
            </div>
            
            <InfosEvents />

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis esse cum reiciendis ducimus, adipisci asperiores. Impedit esse dolores, rem consequatur praesentium veniam, magnam consequuntur ratione architecto cumque adipisci porro autem</p>

            <span>Valor: Gratuito</span>
        </div>
    )
}