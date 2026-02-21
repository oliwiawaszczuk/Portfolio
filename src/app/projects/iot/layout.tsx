import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Projekty IoT | Oliwia Waszczuk",
    description: "Projekty IoT i embedded - systemy wbudowane, sensory, automatyka domowa.",
}

export default function IoTProjectsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
