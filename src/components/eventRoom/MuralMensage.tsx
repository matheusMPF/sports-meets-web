interface MuralMensageProps {
    mensage: string;
}

export const MuralMensage = ({
    mensage,
}: MuralMensageProps) => {

    const hour = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
    return(
        <section className="bg-main-100 rounded-lg p-2">
                        <p>{mensage}</p>
                        <div className="flex justify-end">
                            <span className="text-sm text-zinc-800">{hour}</span>
                        </div>

                    </section>
    )
}