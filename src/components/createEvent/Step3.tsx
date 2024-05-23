

interface Step3Props {

}

export const Step3: React.FC<Step3Props> = () => {
  
  return (
    <div className="bg-background-200 p-8 w-1/2 rounded-lg flex flex-col gap-8">
      <div className="flex flex-col items-center justify-center gap-4">

        <h1 className="text-xl font-bold">Informações do evento</h1>

        <p className="text-zinc-300 w-[90%] text-sm text-center">
          Chegamos a etapa final, só precisamos saber alguns detalhes. Por favor, passe as informações a seguir:
        </p>

      </div>
      
      <form className="flex flex-col gap-8 items-center">
        <div className=" w-2/3 flex flex-col gap-4">
          
        </div>
      </form>
    </div>
  );
};
