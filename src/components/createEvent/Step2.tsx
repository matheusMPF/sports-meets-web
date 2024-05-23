import { useEffect, useState } from "react";
import { BaseInput } from "../ui/BaseInput";
import { BaseSelect } from "../ui/BaseSelect";
import { ButtonSm } from "../ui/ButtonSm";
import axios from "axios";
import { ArrowCircleRight2 } from "iconsax-react";
import { ModalError } from "../ui/Modals/ModalError";

interface Step2Props {
  onNextStep: () => void;
}

interface StateOption {
  label: string;
  value: string;
}

interface CityOption {
  label: string;
  value: string;
}

interface StateResponse {
  nome: string;
  sigla: string;
}

interface CityResponse {
  nome: string;
}

export const Step2: React.FC<Step2Props> = ({onNextStep}) => {
  const [states, setStates] = useState<StateOption[]>([]);
  const [cities, setCities] = useState<CityOption[]>([]);
  const [selectedState, setSelectedState] = useState<string>("");

  useEffect(() => {
    axios
      .get("https://brasilapi.com.br/api/ibge/uf/v1")
      .then((response) => {
        const stateOptions: StateOption[] = response.data.map(
          (state: StateResponse) => ({
            label: state.nome,
            value: state.sigla,
          })
        );
        setStates(stateOptions);
      })
      .catch((error) => {
        console.error("Erro ao carregar lista de estados", error);
      });
  }, []);

  useEffect(() => {
    if (selectedState) {
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedState}/municipios`
        )
        .then((response) => {
          const cityOptions: CityOption[] = response.data.map(
            (city: CityResponse) => ({
              label: city.nome,
              value: city.nome,
            })
          );
          setCities(cityOptions);
        })
        .catch((error) => {
          console.error("Erro ao carregar lista de cidades", error);
        });
    }
  }, [selectedState]);

  const [showModal, setShowModal] = useState(false)

  const nextStep = () => {
    if (selectedState && cities) {
      onNextStep();
    } else {
      setShowModal(true);
    }
  };

  return (
    <div className="bg-background-200 p-8 w-1/2 rounded-lg flex flex-col gap-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-xl font-bold">Localização do Evento esportivo!</h1>
        <p className="text-zinc-300 w-[90%] text-sm text-center">
          Agora precisamos saber onde será realizado o evento esportivo! Passe
          os dados da Localização:
        </p>
      </div>

      <form className="flex flex-col gap-8 items-center">
        <div className="w-2/3 flex flex-col gap-4">
          <BaseSelect
            label="Informe o Estado"
            placeholder="Estado"
            options={states}
            defaultValue=""
            value={selectedState}
            onChange={(e) => {
              setSelectedState(e.target.value);
            }}
          />
          <BaseSelect
            label="Informe a Cidade"
            placeholder="Cidade"
            options={cities}
            onChange={() => {}}
          />
          <BaseInput
            label="Informe o Logradouro"
            placeholder="*Bairro, Rua, Avenida..."
          />
        </div>
        <div className="w-full flex justify-end">
          <ButtonSm
            onClick={nextStep}
            type="button"
            endIcon={
              <ArrowCircleRight2 size="26" color="#fff" variant="Bulk" />
            }
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
