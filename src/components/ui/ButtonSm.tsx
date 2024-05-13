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
        className="bg-main-100 px-10 py-1 rounded-md hover:bg-main-100/50 transition-all">
        {children}
    </button>
    )
}