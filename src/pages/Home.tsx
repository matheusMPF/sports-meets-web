import { Card } from "../components/card/Card"
import { Header } from "../components/header/Header"


export const Home = () => {
    return (

        <div>

            <Header />

            <main className="w-full h-full flex flex-wrap items-center justify-center gap-5">
                <Card />
                <Card />
                <Card />
                <Card />
            </main>
        </div>


    )
}