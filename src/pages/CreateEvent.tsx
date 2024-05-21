import { useState } from "react";
import { BaseSelect } from "../components/ui/BaseSelect";
import { ButtonSm } from "../components/ui/ButtonSm";
import { ArrowCircleRight2 } from "iconsax-react";
import { NavRoutes } from "../components/ui/NavRoutes";
import { BaseTextarea } from "../components/ui/BaseTextarea";

export const CreateEvents = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const sports = [
    { value: "soccer", label: "Futebol" },
    { value: "volleyball", label: "Vôlei" },
    { value: "basketball", label: "Basquete" },
    { value: "hall", label: "Salão" },
    { value: "tennis", label: "Tênis" },
    { value: "golf", label: "Golfe" },
    { value: "running", label: "Corrida" },
    { value: "cycling", label: "Ciclismo" },
    { value: "badminton", label: "Badminton" },
    { value: "martialArts", label: "Artes Marciais" },
    { value: "handball", label: "Handebol" },
    { value: "gymnastics", label: "Ginástica" },
    { value: "swimmingPool", label: "Piscina" },
    { value: "surfing", label: "Surfe" },
  ];

  const modality = [
    { value: "soccer", label: "Futsal" },
    { value: "volleyball", label: "Futebol de Campo" },
    { value: "basketball", label: "Futebol de Areia" },
    { value: "hall", label: "Society" },
    { value: "tennis", label: "Vôlei de Quadra" },
    { value: "golf", label: "Vôlei de Areia" },
    { value: "running", label: "Futevôlei" },
    { value: "cycling", label: "Basquete 5x5" },
    { value: "badminton", label: "Basquete 3x3" },
    { value: "martialArts", label: "Ping Pong" },
    { value: "handball", label: "Sinuca" },
    { value: "gymnastics", label: "Jogos de Tabuleiro" },
    { value: "swimmingPool", label: "Tênis Simples" },
    { value: "surfing", label: "Tênis de Dupla" },
    { value: "cycling", label: "Match Play" },
    { value: "badminton", label: "Stroke Play" },
    { value: "martialArts", label: "Corrida de Rua" },
    { value: "handball", label: "Cross country" },
    { value: "gymnastics", label: "Corrida Militarizada" },
    { value: "swimmingPool", label: "Corrida de Montanha" },
    { value: "surfing", label: "Ciclismo de Estrada" },
    { value: "cycling", label: "Mountain Bike" },
    { value: "badminton", label: "BMX" },
    { value: "martialArts", label: "Badminton Simples" },
    { value: "handball", label: "Badminton de Dupla" },
    { value: "gymnastics", label: "Boxe" },
    { value: "swimmingPool", label: "Muay Thai" },
    { value: "surfing", label: "Kickboxing" },
    { value: "cycling", label: "Judô" },
    { value: "badminton", label: "Jiu-jitsu" },
    { value: "martialArts", label: "Capoeira" },
    { value: "handball", label: "Karatê" },
    { value: "gymnastics", label: "Kung fu" },
    { value: "swimmingPool", label: "Taekwondo" },
    { value: "surfing", label: "Handebol de Quadra" },
    { value: "gymnastics", label: "Handebol de Campo" },
    { value: "swimmingPool", label: "Handebol de Areia" },
    { value: "surfing", label: "Ginástica Acrobática" },
    { value: "cycling", label: "Ginástica Artística" },
    { value: "badminton", label: "Ginástica Trampolim" },
    { value: "martialArts", label: "Ginástica Rítmica" },
    { value: "handball", label: "Natação" },
    { value: "gymnastics", label: "Polo Aquático" },
    { value: "swimmingPool", label: "shortboard" },
    { value: "surfing", label: "longboard" },
    { value: "handball", label: "bodyboard" },
    { value: "gymnastics", label: "handsurf" },
    { value: "swimmingPool", label: "bodysurf" },
    { value: "surfing", label: "skimboard" },
    { value: "handball", label: "kneeboard" },
  ];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <section className="h-full w-full flex flex-col justify-center items-center gap-4 my-8">
      <div className="w-1/2">
        <NavRoutes routerName="Criar Evento Esportivo" to="/sports-meets-web" />
      </div>
      <div className="bg-background-200 p-8 w-1/2 rounded-lg flex flex-col gap-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-xl font-bold">Crie seu evento esportivo!</h1>
          <p className="text-zinc-300 w-[90%] text-sm text-center">
            Precisamos que você preencha algumas informações sobre seu evento
            esportivo. Para uma melhor experiência para todos!
          </p>
        </div>
        <form className="flex flex-col gap-8 items-center">
          <div className=" w-2/3 flex flex-col gap-4">
            <BaseSelect
              label="Informe o Esporte"
              options={sports}
              value={selectedValue}
              onChange={handleChange}
              style={{ padding: "10px", fontSize: "16px" }}
              placeholder="Esporte"
            />
            <BaseSelect
              label="Informe a modalidade"
              options={modality}
              value={selectedValue}
              onChange={handleChange}
              style={{ padding: "10px", fontSize: "16px" }}
              placeholder="Modalidade"
            />

            <BaseTextarea placeholder="Fale um pouco mais sobre o seu evento esportivo." rows={4} label="Descrição do Evento" />
          </div>


          <div className="w-full flex justify-end">
            <ButtonSm
              endIcon={
                <ArrowCircleRight2 size="26" color="#fff" variant="Bulk" />
              }
            >
              Avançar
            </ButtonSm>
          </div>
        </form>
      </div>
    </section>
  );
};
