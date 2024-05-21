import { DescriptionEvent } from "../components/eventRoom/DescriptionEvent"
import { NavRoutes } from "../components/ui/NavRoutes"
import { Participants } from "../components/eventRoom/Participants"
import { MuralMensage } from "../components/eventRoom/MuralMensage"

export const EventRoom = () => {

    return (
        <section className="w-full h-full flex flex-col items-center justify-center ">
            <div className="flex flex-col items-center justify-center gap-8 my-8 w-1/2 h-full">

                <NavRoutes to="/sports-meets-web" routerName="Sala do Evento" />
                <DescriptionEvent />

                <div className="card flex flex-col w-full gap-8 bg-background-200 p-6 rounded-lg ">
                    <h3 className="text-lg">Mural</h3>

                    <MuralMensage mensage="Olá Galera, não esqueçam de levar suas próprias águas em nosso evento." />
                    <MuralMensage mensage="Gente, Tudo certo? Espero que sim. Só um breve aviso, está havendo obras em alguns pontos do nosso circuito, por isso vamos mudar um pouco a rota. Para mais dúvidas, falar através do WhatsApp" />
                    <MuralMensage mensage="Bem-vindos ao melhor evento de ciclismo!" />

                </div>

                <div className="card flex flex-col w-full gap-8 bg-background-200 p-6 rounded-lg">
                    <h5 className="text-lg">Participantes</h5>

                    <Participants id="123" participantName="Matheus Magalhães" admin={true} />
                    <Participants id="124" participantName="Jupipi" admin={false} />
                    <Participants id="125" participantName="Sanzinho Dino Gamer" admin={false} />
                    <Participants id="126" participantName="Victor Teixeira" admin={false} />
                    <Participants id="127" participantName="Marcos Antônio" admin={false} />
                    <Participants id="128" participantName="Hellen Barreto" admin={false} />
                    <Participants id="129" participantName="Madu" admin={false} />
                    <Participants id="130" participantName="Luizinho" admin={false} />
                    <Participants id="131" participantName="Jorge Denys" admin={false} />

                </div>

            </div>


        </section>
    )
}