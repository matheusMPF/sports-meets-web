import { ButtonSm } from "../components/ui/ButtonSm"
import { BaseInput } from "../components/ui/BaseInput"

export const Signup = () => {
    return (
        <section className="w-screen h-screen flex items-center justify-center" >
            <form action="" className="bg-background-200 p-16  rounded-lg flex flex-col gap-4">
                <BaseInput placeholder="E-mail" />
                <BaseInput type="password" />
                <ButtonSm>Cadastrar</ButtonSm>
            </form>

        </section>
    )
}