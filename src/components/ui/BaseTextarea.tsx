
interface BaseTextareaProps {
    label: string,
    rows?: number,
    placeholder?: string,
}

export const BaseTextarea = ({
    label,
    rows,
    placeholder,
    ...props
}: BaseTextareaProps) => {
    return(
        <div className="flex flex-col gap-1">
            <label className="text-lg font-medium">{label}</label>

            <div className="flex justify-between gap-2 p-4 border border-blue-500 rounded-3xl shadow-2xl items-center">
                <textarea
                placeholder={placeholder}
                rows={rows}
                {...props}
                className="outline-none bg-transparent w-full resize-none" />
            </div>

        </div>
    )
}