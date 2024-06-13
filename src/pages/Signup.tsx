import { ButtonSm } from "../components/ui/ButtonSm";
import { BaseInput } from "../components/ui/BaseInput";
import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center w-screen">
      <div className="bg-background-200 w-2/5 py-8 px-10 shadow rounded-lg flex flex-col gap-4">
        <h1 className="text-lg font-bold">Cadastre-se</h1>

        <form className="flex flex-col gap-4">
          <BaseInput placeholder="E-mail" />

          <BaseInput placeholder="Senha" type="password" />

          <BaseInput placeholder="Confirmar senha" type="password" />

          <ButtonSm>Cadastrar</ButtonSm>

          <div className="">
            <p>
              Já possui uma conta?{" "}
              <Link to="/sports-meets-web/signin" className="text-main-100 cursor-pointer">
                Logar
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
