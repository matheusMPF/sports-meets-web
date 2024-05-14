import { Warning2 } from "iconsax-react"

export const WorkingHere = () => {
    return (

        <div className="bg-background-200 w-full rounded-xl p-8 flex flex-col gap-8 shadow-main-100 shadow-sm">
            <div className="flex flex-col items-center">
                <Warning2 size="50" color="#FF2" />
                <h1 className="text-xl font-bold">Tela em desenvolvimento</h1>
            </div>

            <p className="text-zinc-300">Nossos desenvolvedores estão buscando a melhor forma de melhorar sua experiência em nosso site!</p>

        </div>

    )
}