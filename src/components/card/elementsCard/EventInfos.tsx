import { Calendar, Clock, Location } from "iconsax-react"

export function EventInfos(){
    return (

        <div className="data-events flex gap-4 items-center justify-center">
            <div className="flex gap-1 text-sm items-center">

                <Location size="18" color="#3B82F6" variant="Bulk" />
                <span>Cajueiro - PE</span>

            </div>
            <div className="flex gap-1 text-sm items-center">

                <Clock size="18" color="#3B82F6" variant="Bulk"/>
                <span>14h</span>

            </div>
            <div className="flex gap-1 text-sm items-center">

                <Calendar size="18" color="#3B82F6" variant="Bulk"/>
                <span>17/06</span>

            </div>
        </div>


    )
}