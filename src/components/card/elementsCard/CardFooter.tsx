import { Link } from "react-router-dom"
import { ButtonSm } from "../../ui/ButtonSm"

export function CardFooter(){
    return (
        <div className="footer-card flex justify-around">
            <span>Valor: Gratuito</span>
            <Link to="/event-room">
                <ButtonSm>Entrar</ButtonSm>
            </Link>
        </div>
    )
}