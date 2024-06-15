import { ButtonSm } from "../components/ui/ButtonSm";
import { BaseInput } from "../components/ui/BaseInput";
import { Link } from "react-router-dom";

export const Signin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center w-screen">
      <div className="bg-background-200 w-2/5 py-8 px-10 shadow rounded-lg flex flex-col gap-4">
        <h1 className="text-lg font-bold">Faça seu Login</h1>

        <form className="flex flex-col gap-4">
          <BaseInput required placeholder="E-mail" />

          <BaseInput required placeholder="Senha" type="password" />

          <p>
            Ainda não possui uma conta?
            <Link
              to="/sports-meets-web"
              className="text-main-100 cursor-pointer"
            >
              Cadastrar-se
            </Link>
          </p>

          <Link to="/home" className="w-full flex justify-end">
            <ButtonSm >Logar</ButtonSm>
          </Link>
        </form>
      </div>
    </div>
  );
};
