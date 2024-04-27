import * as React from "react";
interface ButtonProps {
    className?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button };
