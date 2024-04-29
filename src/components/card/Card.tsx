import { Link } from "react-router-dom";
import { ButtonSm } from "../ui/ButtonSm";
import { EventIcons } from "./EventInfos";
import { Calendar, Clock, Location, User } from "iconsax-react";

export const Card = () => {
    return (
        <div className="card flex w-2/5 gap-8 bg-background-200 my-6 p-6 rounded-lg">

            <div className="infos-container flex flex-col gap-11 ">
                <div className="title-card flex justify-around items-center">
                    <h3 className="text-2xl font-semibold">Ciclismo</h3>
                    <h6 className="text-sm text-zinc-300">Organizador: Matheus Magalhães</h6>
                </div>

                <div className="data-events flex gap-4 items-center justify-center">
                    <EventIcons infos="Localização" iconInfos={<Location size="22" color="#3b82f6" variant="Bulk" />} />
                    <EventIcons infos="14h" iconInfos={<Clock size="22" color="#3b82f6" variant="Bulk"/>} />
                    <EventIcons infos="17/06" iconInfos={<Calendar size="22" color="#3b82f6" variant="Bulk"/>} />
                    <EventIcons infos="0/20" iconInfos={<User size="22" color="#3b82f6" variant="Bulk"/>} />
                </div>

                <div className="description-container flex justify-center items-center">
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