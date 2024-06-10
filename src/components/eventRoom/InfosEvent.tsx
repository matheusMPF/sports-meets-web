import { Calendar, Clock, Location, Lock1, LockSlash, User } from "iconsax-react"
import { IconInfo } from "../ui/IconInfo"
import { useState } from "react"

export const InfosEvents = () => {

    const [privateRoom] = useState(true)

    return (
        <div className="flex flex-col rounded-lg text-wrap gap-2">

            <IconInfo infos="Av. Boa Viagem, 1998 - Boa Viagem, Recife - PE" iconInfos={<Location size="20" color="#3b82f6" variant="Bulk" />}
            />


            <div className="flex gap-2">
                <IconInfo infos="14h" iconInfos={<Clock size="20" color="#3b82f6" variant="Bulk" />} />
                <IconInfo infos="17/06" iconInfos={<Calendar size="20" color="#3b82f6" variant="Bulk" />} />
                <IconInfo infos="0/20" iconInfos={<User size="20" color="#3b82f6" variant="Bulk" />} />
                <IconInfo
                    infos={privateRoom ? "Privada" : "Pública"}

                    iconInfos={
                        privateRoom ? (<Lock1 size="20" color="#3b82f6" variant="Bulk" />)
                            :
                            (<LockSlash size="20" color="#3b82f6" variant="Bulk" />)
                    } />
            </div>

        </div>
    )
}