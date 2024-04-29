import { ReactNode } from "react"

interface EventInfosProps {
    iconInfos: ReactNode,
    infos: string
}

export function EventIcons({
    iconInfos,
    infos
}: EventInfosProps) {
    return (

            <div className="flex gap-1 text-sm items-center">

                {iconInfos}
                <span>{infos}</span>

            </div>
    )
}