import { ProfileCircle } from "iconsax-react"

interface ParticipantsProps{
    participantName: string,
    id: string,
    admin: boolean,
}

export const Participants = ({
    participantName,
    id,
    admin,
}: ParticipantsProps) => {

    return (
        <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
                <ProfileCircle size="46" color="#fff" variant="Bulk" />

                <div>
                    <h5>{participantName}</h5>
                    <p className="text-sm text-zinc-400">id:{id}</p>
                </div>

            </div>
            <div>
                <span className="text-main-100" >{admin ? 'Admin' : ""}</span>
            </div>

        </div>
    )
}