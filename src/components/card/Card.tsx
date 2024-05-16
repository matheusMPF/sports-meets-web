import { Calendar, Clock, Location, Lock1, People, User } from "iconsax-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../ui/Modal";
import { ButtonSm } from "../ui/ButtonSm";
import { IconInfo } from "../ui/IconInfo";

export const Card = () => {

    const [privateRoom] = useState(true)
    const [showModal, setShowModal] = useState(false)

    return (
        <div className="card flex w-2/5 gap-8 bg-background-200 my-6 p-6 rounded-lg ">

            <div className="infos-container flex flex-col gap-11 box-border">
                <div className="title-card flex justify-around items-center">
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-4 items-end">
                            <h3 className="text-2xl font-semibold">Ciclismo</h3>
                            <span className="text-sm text-zinc-400">#1234</span>
                        </div>
                        <span className="text-sm text-zinc-300 font-medium">Ciclismo de estrada</span>
                    </div>

                    <h6 className="text-sm text-zinc-300">Matheus Magalhães</h6>
                </div>

                <div className="data-events flex gap-4 items-center flex-wrap justify-center">
                    <IconInfo
                        infos="Localização"
                        iconInfos={<Location size="20" color="#3b82f6" variant="Bulk" />}
                    />

                    <IconInfo
                        infos="14h"
                        iconInfos={<Clock size="20" color="#3b82f6" variant="Bulk" />}
                    />

                    <IconInfo
                        infos="17/06"
                        iconInfos={<Calendar size="20" color="#3b82f6" variant="Bulk" />}
                    />

                    <IconInfo
                        infos="0/20"
                        iconInfos={<User size="20" color="#3b82f6" variant="Bulk" />}
                    />

                    <IconInfo
                        infos={privateRoom ? "Privada" : "Pública"}
                        iconInfos={
                            privateRoom ? (<Lock1 size="20" color="#3b82f6" variant="Bulk" />)
                                :
                                (<People size="20" color="#3b82f6" variant="Bulk"/>)
                        } />

                </div>

                <div className="description-container flex justify-center items-center w-full">
                    <p className="description-event w-10/12 ">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium dolorem et delectus cupiditate tempore odit magni vero! Necessitatibus asperiores repellendus deserunt reiciendis doloribus non voluptatibus sed? Nulla debitis odit suscipit.
                    </p>
                </div>

                <div className="footer-card flex justify-end px-8">
                
                    <Link to={privateRoom ? '#' : "/event-room"}>

                        <ButtonSm onClick={() => { privateRoom && setShowModal(true) }}>
                            Entrar
                        </ButtonSm>

                    </Link>
                </div>

                {showModal
                    &&
                    <Modal
                        linkTo="/event-room"
                        title="Informe a Senha"
                        nameButton="Validar"
                        onClose={() => setShowModal(false)} />
                }

            </div>
        </div>

    )
};