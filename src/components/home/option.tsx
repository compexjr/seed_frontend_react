import { ReactNode } from "react";

interface OptionProps {
    children: ReactNode;
}

export function Option(props: OptionProps) {
    return (
        <div className="bg-muted rounded-lg p-7">
            {props.children}
        </div>
    )
}