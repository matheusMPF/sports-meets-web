import { ArrowCircleRight2 } from "iconsax-react";
import { BaseSelect } from "../ui/BaseSelect";
import { BaseTextarea } from "../ui/BaseTextarea";
import { ButtonSm } from "../ui/ButtonSm";
import { useState } from "react";

import { ModalError } from "../ui/Modals/ModalError";

interface Step1Props {
  onNextStep: () => void
}

export const Step1: React.FC<Step1Props> = ({ onNextStep }) => {
  const [selectedSport, setSelectedSport] = useState<string>("");
  const [selectedModality, setSelectedModality] = useState<string>("");

  const [showModal, setShowModal] = useState(false)

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

  const modalities = [
    { value: "futsal", label: "Futsal", sport: "soccer" },
    { value: "campo", label: "Futebol de Campo", sport: "soccer" },
    { value: "areia", label: "Futebol de Areia", sport: "soccer" },
    { value: "society", label: "Society", sport: "soccer" },
    { value: "quadra", label: "Vôlei de Quadra", sport: "volleyball" },
    { value: "areia", label: "Vôlei de Areia", sport: "volleyball" },
    { value: "futevolei", label: "Futevôlei", sport: "volleyball" },
    { value: "5x5", label: "Basquete 5x5", sport: "basketball" },
    { value: "3x3", label: "Basquete 3x3", sport: "basketball" },
    { value: "pingpong", label: "Ping Pong", sport: "hall" },
    { value: "sinuca", label: "Sinuca", sport: "hall" },
    { value: "tabuleiro", label: "Jogos de Tabuleiro", sport: "hall" },
    { value: "simples", label: "Tênis Simples", sport: "tennis" },
    { value: "dupla", label: "Tênis de Dupla", sport: "tennis" },
    { value: "matchplay", label: "Match Play", sport: "golf" },
    { value: "strokeplay", label: "Stroke Play", sport: "golf" },
    { value: "rua", label: "Corrida de Rua", sport: "running" },
    { value: "crosscountry", label: "Cross country", sport: "running" },
    { value: "militarizada", label: "Corrida Militarizada", sport: "running" },
    { value: "montanha", label: "Corrida de Montanha", sport: "running" },
    { value: "estrada", label: "Ciclismo de Estrada", sport: "cycling" },
    { value: "mountainbike", label: "Mountain Bike", sport: "cycling" },
    { value: "bmx", label: "BMX", sport: "cycling" },
    { value: "badmintonsimples", label: "Badminton Simples", sport: "badminton" },
    { value: "badmintondupla", label: "Badminton de Dupla", sport: "badminton" },
    { value: "boxe", label: "Boxe", sport: "martialArts" },
    { value: "muaythai", label: "Muay Thai", sport: "martialArts" },
    { value: "kickboxing", label: "Kickboxing", sport: "martialArts" },
    { value: "judo", label: "Judô", sport: "martialArts" },
    { value: "jiujitsu", label: "Jiu-jitsu", sport: "martialArts" },
    { value: "capoeira", label: "Capoeira", sport: "martialArts" },
    { value: "karate", label: "Karatê", sport: "martialArts" },
    { value: "kungfu", label: "Kung fu", sport: "martialArts" },
    { value: "taekwondo", label: "Taekwondo", sport: "martialArts" },
    { value: "quadrahandebol", label: "Handebol de Quadra", sport: "handball" },
    { value: "campohandebol", label: "Handebol de Campo", sport: "handball" },
    { value: "areiahandebol", label: "Handebol de Areia", sport: "handball" },
    { value: "acrobática", label: "Ginástica Acrobática", sport: "gymnastics" },
    { value: "artística", label: "Ginástica Artística", sport: "gymnastics" },
    { value: "trampolim", label: "Ginástica Trampolim", sport: "gymnastics" },
    { value: "rítmica", label: "Ginástica Rítmica", sport: "gymnastics" },
    { value: "natação", label: "Natação", sport: "swimmingPool" },
    { value: "poloaquático", label: "Polo Aquático", sport: "swimmingPool" },
    { value: "shortboard", label: "Shortboard", sport: "surfing" },
    { value: "longboard", label: "Longboard", sport: "surfing" },
    { value: "bodyboard", label: "Bodyboard", sport: "surfing" },
    { value: "handsurf", label: "Handsurf", sport: "surfing" },
    { value: "bodysurf", label: "Bodysurf", sport: "surfing" },
    { value: "skimboard", label: "Skimboard", sport: "surfing" },
    { value: "kneeboard", label: "Kneeboard", sport: "surfing" },
  ];

  const handleSportChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSport(event.target.value);
    setSelectedModality("");
  };

  const handleModalityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModality(event.target.value);
  };

  const filteredModalities = modalities.filter(
    (modality) => modality.sport === selectedSport
  );

  const nextStep = () => {

    if (selectedSport && selectedModality) {
      onNextStep()
    } else {
      setShowModal(true)
    }
    
  }

  return (
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
            value={selectedSport}
            onChange={handleSportChange}
            placeholder="Esporte"
          />
          <BaseSelect
            label="Escolha a Modalidade"
            options={filteredModalities}
            value={selectedModality}
            onChange={handleModalityChange}
            placeholder="Modalidade"
            disabled={!selectedSport}
          />
          <BaseTextarea
            placeholder="Fale um pouco mais sobre o seu evento esportivo."
            rows={5}
            label="Descrição do Evento"
          />
        </div>
        <div className="w-full flex justify-end">
          <ButtonSm
           onClick={nextStep}
            type="button"
            endIcon={<ArrowCircleRight2 size="26" color="#fff" variant="Bulk" />}
          >
            Avançar
          </ButtonSm>
        </div>
      </form>
      {showModal
        &&
        <ModalError

            error="Campos não preenchidos!"
            description="Parece que você não preencheu alguns campos, certifique-se de preenche-los e tente novamente."
            onClose={() => setShowModal(false)} />
    }
    </div>
  );
};
