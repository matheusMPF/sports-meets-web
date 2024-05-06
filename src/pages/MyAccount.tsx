import { CalendarTick, Headphone, Setting, Star1 } from "iconsax-react"
import { MyAccountRoutes } from "../components/myAccount/MyAccountRoutes"
import { Header } from "../components/header/Header"
import { HeaderMyAccount } from "../components/myAccount/HeaderMyAccount"

export const MyAccount = () => {

    return (
        <div className="h-full w-full">
            <Header />
            <section className="w-full h-full flex justify-center mt-6 mb-3">
                <div className="flex flex-col w-1/2 gap-3">

                    <div className="bg-background-200 rounded-xl flex flex-col py-4 px-10 gap-2">
                        <h2 className="text-xl font-semibold">Minha Conta</h2>
                    </div>

                    <HeaderMyAccount />

                    <MyAccountRoutes to="/settings" icon={<Setting size="28" color="#3b82f6" variant="Bulk" />} titleSetting="Configurações" />
                    <MyAccountRoutes to="/my-events" icon={<CalendarTick size="28" color="#3b82f6" variant="Bulk" />} titleSetting="Meus eventos" />
                    <MyAccountRoutes to="/my-reviews" icon={<Star1 size="28" color="#3b82f6" variant="Bulk" />} titleSetting="Minhas avaliações" />
                    <MyAccountRoutes to="/support" icon={<Headphone size="28" color="#3b82f6" variant="Bulk" />} titleSetting="Suporte" />

                </div>
            </section>
        </div>
    )
}