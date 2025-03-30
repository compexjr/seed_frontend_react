import { ReactNode } from "react"

interface TitleProps {
    children: ReactNode;
}

export function Title(props: TitleProps) {
    return (
        <h1 className="font-bold text-lg leading-3">{props.children}</h1>
    )
}