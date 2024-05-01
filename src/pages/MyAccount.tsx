import { CalendarTick, Edit, Headphone, Setting, Star1, UserSquare } from "iconsax-react"
import { MyAccountSettings } from "../components/MyAccountSettings"
import { Header } from "../components/header/Header"

export const MyAccount = () => {
    return (
        <div className="h-full w-full">
            <Header />
            <section className="w-full h-full flex justify-center mt-6 mb-6">
                <div className="flex flex-col w-1/2 gap-3">
                    <div className="bg-background-200 rounded-xl flex flex-col py-4 px-10 gap-2">
                        <h2 className="text-xl font-semibold">Minha Conta</h2>
                    </div>
                    <div className="bg-background-200 rounded-xl py-4 px-10 gap-2 flex justify-between items-center">

                        <UserSquare size="102" color="#fff" variant="Bulk" className="cursor-pointer hover:opacity-50"/>

                        <div className="flex gap-8 items-center">
                            <div>
                                <h3>Matheus Magalhães</h3>
                                <span className="text-sm text-zinc-600">id: 123</span>
                            </div>
                            <button type="button" >
                                <Edit
                                    size="32"
                                    color="#3b82f6"
                                    variant="Bulk"
                                    className="hover:opacity-50"
                                />
                            </button>
                        </div>

                    </div>

                    <MyAccountSettings to="/settings" icon={<Setting size="28" color="#3b82f6" variant="Bulk" />} titleSetting="Configurações" />
                    <MyAccountSettings to="/my-events" icon={<CalendarTick size="28" color="#3b82f6" variant="Bulk" />} titleSetting="Meus eventos" />
                    <MyAccountSettings to="/my-reviewsO" icon={<Star1 size="28" color="#3b82f6" variant="Bulk" />} titleSetting="Minhas avaliações" />
                    <MyAccountSettings to="/support" icon={<Headphone size="28" color="#3b82f6" variant="Bulk" />} titleSetting="Suporte" />

                </div>
            </section>
        </div>
    )
}