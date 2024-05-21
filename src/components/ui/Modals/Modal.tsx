import { CloseCircle } from "iconsax-react";
import { BaseInput } from "../BaseInput";
import { ButtonSm } from "../ButtonSm";
import { Link } from "react-router-dom";

interface ModalProps {
    onClose: () => void,
    title: string,
    nameButton: string,
    linkTo?: string,
}

export const Modal = ({
    onClose,
    title,
    nameButton,
    linkTo,
}:ModalProps) => {
    return (
        <div className="fixed inset-0 overflow-y-auto flex items-center justify-center">
            <div className="absolute  inset-0 bg-black opacity-30"></div>

            <div className="bg-background-100 z-10 rounded-lg p-8 max-w-sm w-full flex flex-col gap-4">

                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">{title}</h3>

                    <CloseCircle size="32" color="#CD0000" variant="Bulk" className="hover:opacity-50 cursor-pointer"
                    onClick={onClose}
                     />

                </div>

                <BaseInput placeholder="Digite a senha" />

                <div className="flex justify-end">
                    {linkTo ? 
                    (<Link to={linkTo}><ButtonSm className="" >{nameButton}</ButtonSm></Link>) :
                    (<ButtonSm className="" >{nameButton}</ButtonSm>)
                    
                }
                    
                </div>
            </div>
        </div>
    );
};