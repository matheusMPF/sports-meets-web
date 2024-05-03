import { Link } from "react-router-dom";
import { ButtonSm } from "../ui/ButtonSm";
import { EventIcons } from "./EventInfos";
import { Calendar, Clock, Location, Lock1, LockSlash, User } from "iconsax-react";
import { useState } from "react";

export const Card = () => {

    const [privateRoom, setPrivateRoom] = useState(true)

    return (
        <div className="card flex w-2/5 gap-8 bg-background-200 my-6 p-6 rounded-lg ">

            <div className="infos-container flex flex-col gap-11 box-border">
                <div className="title-card flex justify-around items-center">
                    <h3 className="text-2xl font-semibold">Ciclismo</h3>
                    <h6 className="text-sm text-zinc-300">Organizador: Matheus Magalhães</h6>
                </div>

                <div className="data-events flex gap-4 items-center justify-center">
                    <EventIcons infos="Localização" iconInfos={<Location size="20" color="#3b82f6" variant="Bulk" />} />
                    <EventIcons infos="14h" iconInfos={<Clock size="20" color="#3b82f6" variant="Bulk"/>} />
                    <EventIcons infos="17/06" iconInfos={<Calendar size="20" color="#3b82f6" variant="Bulk"/>} />
                    <EventIcons infos="0/20" iconInfos={<User size="20" color="#3b82f6" variant="Bulk"/>} />
                    <EventIcons 
                    infos={privateRoom ? "Privada" : "Pública"} 
                    
                    iconInfos={
                    privateRoom ? (<Lock1 size="20" color="#3b82f6" variant="Bulk"/>)
                    :
                    (<LockSlash size="20" color="#3b82f6" variant="Bulk"/>)
                    } />
                    
                </div>

                <div className="description-container flex justify-center items-center w-full">
                    <p className="description-event w-10/12 ">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium dolorem et delectus cupiditate tempore odit magni vero! Necessitatibus asperiores repellendus deserunt reiciendis doloribus non voluptatibus sed? Nulla debitis odit suscipit.
                    </p>
                </div>

                <div className="footer-card flex justify-around">
                    <span>Valor: Gratuito</span>
                    <Link to="/event-room">
                        <ButtonSm>Entrar</ButtonSm>
                    </Link>
                </div>

            </div>
        </div>

    )
};