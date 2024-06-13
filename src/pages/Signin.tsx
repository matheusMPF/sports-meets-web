import { ButtonSm } from "../components/ui/ButtonSm";
import { BaseInput } from "../components/ui/BaseInput";

export const Signin = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center ">
      <div className="bg-background-200 mx-auto max-w-md py-8 px-10 shadow rounded-lg">
        <div className="mb-4"></div>
        <form action="">
          <div className="mb-4">
            <BaseInput placeholder="E-mail" />
          </div>
          <div className="mb-4">
            <BaseInput placeholder="Senha" />
          </div>
          <div className="mb-4">
            <ButtonSm>Entrar</ButtonSm>
          </div>
          <div className="nb-4">
            <p>
              <a href="#" className="">
                Esqueceu sua senha?
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
