import { ReactNode } from "react"

interface TextinfoProps {
    children: ReactNode;
}

export function Textinfo(props: TextinfoProps) {
    return (
        <h1 className="text-justify my-5 text-muted-foreground">{props.children}</h1>
    )
}