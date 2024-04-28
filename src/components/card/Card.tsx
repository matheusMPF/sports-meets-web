import { EventTitle } from "./elementsCard/EventTitle";
import { EventInfos } from "./elementsCard/EventInfos";
import { EventDescription } from "./elementsCard/EventDescription";
import { CardFooter } from "./elementsCard/CardFooter";

export const Card = () => {
    return (
        <div className="card flex w-2/5 gap-8 bg-zinc-900 my-6 p-6 rounded-lg">
            <div className="infos-container flex flex-col gap-11 ">
                <EventTitle />
                <EventInfos />
                <EventDescription />
                <CardFooter />
            </div>
        </div>

    )
};