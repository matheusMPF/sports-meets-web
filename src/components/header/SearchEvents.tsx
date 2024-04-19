import { Filter, Search } from "lucide-react"

export const SearchEvents = () => {
    return(
        <div className="px-4 py-1.5 border border-white/10  rounded-lg text-sm flex items-center gap-6">

                <div className="flex border-r-2 gap-2">
                    <Search />
                    <input type="text" placeholder="Buscar evento" className="bg-transparent outline-none" />
                </div>

                <div className="hover:text-white/10 cursor-pointer flex items-center justify-center">
                    <Filter />
                </div>

            </div>
    )
}