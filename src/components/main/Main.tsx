import { Calendar, CalendarDays, Clock, MapPin, User } from "lucide-react";

const renderCards = () => {
    return Array.from({ length: 10 }, (_, index) => (
        <div key={index} className="card flex w-2/5 gap-8 bg-zinc-900 my-6 p-6 rounded-lg">
            {/* <img src="" alt="Imagem do Card" className="bg-slate-600" /> */}
            <div className="infos-container flex flex-col gap-11 ">
                <div className="title-card flex justify-around items-center">
                    <h3 className="text-2xl">Ciclismo</h3>
                    <h6>Organizador: Matheus Magalhães</h6>
                </div>
                <div className="data-events flex gap-4 items-center justify-center">
                    <div className="flex gap-1 text-sm items-center">
                        <MapPin />
                        <span>Cajueiro - PE</span>
                    </div>
                    {/* <div className="flex gap-1 text-sm">
                        <User />
                        <span>10/20</span>
                    </div> */}
                    <div className="flex gap-1 text-sm items-center">
                        <Calendar />
                        <span>18-69 Anos</span>
                    </div>
                    <div className="flex gap-1 text-sm items-center">
                        <CalendarDays />
                        <span>20/06/2024</span>
                    </div>
                    <div className="flex gap-1 text-sm items-center">
                        <Clock />
                        <span>14:00</span>
                    </div>
                </div>
                <div className="description-container flex justify-center items-center">
                    <p className="description-event w-10/12 ">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium dolorem et delectus cupiditate tempore odit magni vero! Necessitatibus asperiores repellendus deserunt reiciendis doloribus non voluptatibus sed? Nulla debitis odit suscipit.
                    </p>
                </div>
                <div className="footer-card flex justify-around">
                    <span>Valor: Gratuito</span>
                    <button className="bg-blue-500 px-10 py-1 rounded-sm hover:bg-blue-500/50 transition-all">Entrar</button>
                </div>
            </div>
        </div>
    ));
};

export const Main = () => {
    return (
        <main className="flex items-center justify-center flex-wrap gap-4">
            {renderCards()}
        </main>
    );
};