import { CloudLightning } from "iconsax-react"
import { Link } from "react-router-dom"

export const NotFound = () => {
    return (

        <section className="h-screen w-screen flex flex-col items-center justify-center">
            <div className="bg-background-200 w-1/2 rounded-xl p-8 flex flex-col gap-8 shadow-main-100 shadow-sm">
                <div className="flex flex-col items-center">
                    <CloudLightning size="50" color="#FF8A65" />
                    <h1 className="text-xl font-bold">Calma aí, Amigão!</h1>
                </div>

                <p className="text-zinc-300">Infelizmente não conseguimos localizar esta página, mas por favor, tente novamente. Se o problema persistir, tente uma das opções abaixo:</p>

                <ul>
                    <li className="flex gap-2">
                        <span>1. Voltar a tela de Início.</span>
                        <Link to='/' className="text-main-100 hover:text-main-100/50" >Tela Inicial</Link>
                    </li>
                    <li className="flex gap-2">
                        <span>2. Verifique sua conexão de internet.</span>
                        <Link to='https://www.google.com/search?q=teste+de+velocidade&rlz=1C1CHBD_pt-PTBR1091BR1091&oq=teste+de+velocidade&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDMwMzhqMGo5qAIAsAIB&sourceid=chrome&ie=UTF-8' 
                        className="text-main-100 hover:text-main-100/50">Testar Rede</Link>
                    </li>
                    <li className="flex gap-2">
                        <span>3. Em caso de dúvida, entre em contato com o suporte.</span>
                        <Link to='/support' className="text-main-100 hover:text-main-100/50" >Suporte</Link>
                    </li>
                </ul>

            </div>

        </section>

    )
}