import { Call, Edit, Sms, UserSquare, Whatsapp } from "iconsax-react"



export const HeaderMyAccount = () => {
    return (
        <div className="bg-background-200 rounded-xl py-4 px-10 gap-2 flex justify-between items-center">

            <div className="flex gap-4 ">
                <UserSquare size="102" color="#fff" variant="Bulk" className="cursor-pointer hover:opacity-50" />

                <div className="flex flex-col gap-3 flex-wrap">

                    <div className="flex items-end gap-2">

                        <h3 className="text-lg font-medium">Matheus Magalhães</h3>
                        <span className="text-sm text-zinc-600">#123</span>

                    </div>

                    <div className="flex justify-between">
                        <div className="flex flex-col text-zinc-300">

                            <span className="text-sm">Masculino</span>
                            <span className="text-sm">Pernambuco</span>
                            <span className="text-sm">09/06/2004</span>

                        </div>
                        <div className="flex flex-col text-zinc-300">

                            <span>
                                <Whatsapp
                                    size="20"
                                    color="#3b82f6"
                                    variant="Bulk"
                                    className="hover:opacity-50 cursor-pointer" />
                            </span>
                            <span>
                                <Sms
                                    size="20"
                                    color="#3b82f6"
                                    variant="Bulk"
                                    className="hover:opacity-50 cursor-pointer" />
                            </span>
                            <span>
                                <Call
                                    size="20"
                                    color="#3b82f6"
                                    variant="Bulk"
                                    className="hover:opacity-50 cursor-pointer" />
                            </span>

                        </div>
                    </div>



                </div>

            </div>

            <div className="flex flex-col gap-8">

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