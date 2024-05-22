import { BaseInput } from "../ui/BaseInput"
import { ButtonSm } from "../ui/ButtonSm"

export const Step2 = () => {
    return (
        <div className="bg-background-200 p-8 w-1/2 rounded-lg flex flex-col gap-8">
      <div className="flex flex-col items-center justify-center gap-4">

        <h1 className="text-xl font-bold">Quase lá!</h1>

        <span className="font-semibold text-lg">Passo 2:</span>

        <p className="text-zinc-300 w-[90%] text-sm text-center">
          Precisamos que você preencha algumas informações sobre seu evento
          esportivo. Para uma melhor experiência para todos!
        </p>

      </div>

      <form className="flex flex-col gap-8 items-center">
        <div className=" w-2/3 flex flex-col gap-4">
          <BaseInput label="Informe o" placeholder="Localizção" />
        </div>
        <div className="w-full flex justify-end">
          <ButtonSm
            type="button"
          >
            Finalizar
          </ButtonSm>
        </div>
      </form>
      {/* {showModal
        &&
        <ModalError

            error="Campos não preenchidos!"
            description="Parece que você não preencheu alguns campos, certifique-se de preenche-los e tente novamente."
            onClose={() => setShowModal(false)} />
    } */}
    </div>
    )
}