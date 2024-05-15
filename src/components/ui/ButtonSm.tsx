import { ComponentProps, ReactNode } from "react";

interface ButtonSmProps extends ComponentProps<"button"> {
  children: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export function ButtonSm({
  children,
  startIcon,
  endIcon,
  ...props
}: ButtonSmProps) {
  return (
      <button {...props} className="bg-main-100 rounded-md hover:bg-main-100/50 transition-all flex py-1 px-8">
        <div className="flex items-center gap-4">{startIcon}{children}{endIcon}</div>
      </button>
  );
}
