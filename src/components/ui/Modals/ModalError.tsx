import { CloseCircle } from "iconsax-react";

interface ModalProps {
  onClose: () => void;
  error: string;
  description: string
}

export const ModalError = ({ onClose, error, description }: ModalProps) => {
  return (
    <div className="fixed inset-0 overflow-y-auto flex items-center justify-center">
      <div className="absolute  inset-0 bg-black opacity-30"></div>

      <div className="bg-background-100 z-10 rounded-lg p-8 max-w-sm w-full flex flex-col">
        <div className="flex justify-end">
          <CloseCircle
            size="28"
            color="#CD0000"
            variant="Bulk"
            className="hover:opacity-50 cursor-pointer"
            onClick={onClose}
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <h3 className="text-xl font-semibold text-">{error}</h3>
          <p className="text-zinc-300 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};
