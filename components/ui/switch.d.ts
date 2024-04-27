import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
interface SwitchProps {
    className?: string;
}
declare const Switch: React.ForwardRefExoticComponent<Omit<SwitchPrimitives.SwitchProps & React.RefAttributes<HTMLButtonElement>, "ref"> & SwitchProps & React.RefAttributes<HTMLButtonElement>>;
export { Switch };
