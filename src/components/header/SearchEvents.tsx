import { Filter, SearchNormal1 } from "iconsax-react"


export const SearchEvents = () => {
    return (
        <div className="px-4 py-1.5 border border-white/10  rounded-lg text-sm flex items-center gap-6">

            <div className="flex border-r-2 gap-2">
                <SearchNormal1 size="24" color="#fff" variant="Bulk" />
                <input type="text" placeholder="Buscar evento" className="bg-transparent outline-none" />
            </div>

            <div className="hover:text-white/10 cursor-pointer flex items-center justify-center">
                <Filter size="24" color="#FFF" variant="Bulk" />
            </div>

        </div>
    )
}