import { Edit, UserSquare } from "iconsax-react"

export const HeaderMyAccount = () => {
    return (
            <div className="bg-background-200 rounded-xl py-4 px-10 gap-2 flex justify-between items-center">

                <UserSquare size="102" color="#fff" variant="Bulk" className="cursor-pointer hover:opacity-50" />

                <div className="flex gap-8">
                    <div>
                        <h3>Matheus Magalhães</h3>
                        <span className="text-sm text-zinc-600">id: 123</span>
                    </div>
                    <button type="button" >
                        <Edit
                            size="32"
                            color="#3b82f6"
                            variant="Bulk"
                            className="hover:opacity-50"
                        />
                    </button>
                </div>

            </div>
    )
}