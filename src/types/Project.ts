import {EnumTech} from "@/const/EnumTech";

export type Project = {
    name: string
    date: string
    description: React.ReactNode
    images: string[]
    tech: EnumTech[]
}