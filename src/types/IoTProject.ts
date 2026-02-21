export type IoTProject = {
    id: string
    name: string
    date: string
    summary: string
    technicalDescription: string
    media: { type: "image" | "video"; src: string }[]
    tech: string[]
}
