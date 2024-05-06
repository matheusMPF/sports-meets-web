import { ReactNode } from "react"

interface IconInfoProps {
    iconInfos: ReactNode,
    infos: string
}

export function IconInfo({
    iconInfos,
    infos
}: IconInfoProps) {
    return (

            <div className="flex gap-1 text-sm items-center">

                <div>{iconInfos}</div>
                <span className="text-zinc-300">{infos}</span>

            </div>
    )
}