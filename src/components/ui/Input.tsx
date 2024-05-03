import { ComponentProps, ReactNode } from "react";

interface BaseInputProps extends ComponentProps<'input'>{
    label?: string,
    startDecoration?: ReactNode,
    endDecoration?: ReactNode,

}

export const BaseInput = ({
    label,
    startDecoration,
    endDecoration,
    ...props

}: BaseInputProps) => {
    return(
        <div className="flex flex-col gap-1 w-1/3">
            <label>{label}</label>

            <div className="flex justify-between gap-2 p-4 border border-blue-500 rounded-3xl shadow-2xl items-center">
                {startDecoration}
                <input
                {...props}
                className="outline-none  bg-transparent w-full" />
                {endDecoration}
            </div>

        </div>
    )
}