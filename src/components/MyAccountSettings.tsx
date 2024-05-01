import { ArrowCircleRight } from "iconsax-react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface MyAccountSettingsProps{
    to: string,
    icon: ReactNode,
    titleSetting: string
}

export function MyAccountSettings({
    to,
    icon,
    titleSetting

}: MyAccountSettingsProps){
    return (
        <Link to={to}>
            <div className="bg-background-200 flex flex-col rounded-xl hover:bg-main-100/5">
                <ul className="flex justify-between border-b rounded-xl border-main-100 p-4">
                    <div className="flex gap-2 items-center">
                        {icon}
                        <li>{titleSetting}</li>
                    </div>
                    <ArrowCircleRight size="26" color="#3b82f6" variant="Bulk" />
                </ul>
            </div>
        </Link>
    )
}