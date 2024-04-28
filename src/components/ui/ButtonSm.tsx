import { ComponentProps } from "react";

interface ButtonSmProps extends ComponentProps<'button'> {
    children: string;
}

export function ButtonSm ({
    children,
    ...props
}:ButtonSmProps){
    return(
    <button {...props}
        className="bg-blue-500 px-10 py-1 rounded-md hover:bg-blue-500/50 transition-all">
        {children}
    </button>
    )
}