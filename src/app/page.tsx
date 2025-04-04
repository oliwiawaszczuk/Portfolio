"use client"
import Header from "@/app/components/Header";
import ScrollTracker from "@/utils/ScrollTracker";
import {useEffect, useState} from "react";
import ProjectCard from "@/app/components/ProjectCard";
import ProjectFrame from "@/app/components/ProjectFrame";
import {projects} from "@/const/Projects";
import {Project} from "@/types/Project";

export default function Home() {
    const scrollY = ScrollTracker()

    const [isHeaderVisible, setIsHeaderVisible] = useState(true)

    useEffect(() => {
        setIsHeaderVisible(scrollY <= 30)
    }, [scrollY])

    return (
        <>
            {/*<div className={`w-full transition-all duration-500 ease-in-out ${isHeaderVisible ? "translate-y-10 opacity-100" : "-translate-y-full opacity-0"}`}>*/}
            {/*    <Header />*/}
            {/*</div>*/}
            {projects.map((project: Project, id: number) => (
                <ProjectFrame
                    key={id}
                    name={project.name}
                    date={project.date}
                    description={project.description}
                    images={project.images}
                    tech={project.tech}
                    isDescriptionOnRight={!(id % 2)}
                />
            ))}
            <h1 className="flex justify-center text-4xl">To be continued...</h1>
        </>
    )
}
