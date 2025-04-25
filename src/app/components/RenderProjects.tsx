import { useEffect, useState } from "react";
import ProjectFrame from "@/app/components/ProjectFrame";
import {Project} from "@/types/Project";
import {EnumTech} from "@/const/EnumTech";
import {projects} from "@/const/Projects";


type SelectedTech = {
    tech: EnumTech
    selected: boolean
}

type SelectedProject = {
    project: Project
    selected: boolean
}


const RenderProjects = () => {
    const [selectedTech, setSelectedTech] = useState<SelectedTech[]>([])
    const [selectedProject, setSelectedProject] = useState<SelectedProject[]>([])
    const [selectedProjectCount, setSelectedProjectCount] = useState<number>(0)

    function setEveryTech(state: boolean) {
        const initializedTech: SelectedTech[] = Object.values(EnumTech).map((tech) => ({
            tech,
            selected: state,
        }))
        setSelectedTech(initializedTech)
    }

    function filterProjects() {
        const activeTechs = selectedTech
            .filter((t) => t.selected)
            .map((t) => t.tech)

        const filteredProjects = projects
            .filter((project) =>
                project.tech.some((t) => activeTechs.includes(t))
            )
            .map((project) => ({
                project,
                selected: true
            }))

        setSelectedProject(filteredProjects)
        setSelectedProjectCount(filteredProjects.length)
    }


    useEffect(() => {
        const initializedProjects = projects.map((project) => ({
            project,
            selected: true,
        }))
        setSelectedProject(initializedProjects)

        setEveryTech(true)

        filterProjects()
    }, [])

    useEffect(() => {
        filterProjects()
    }, [selectedTech]);

    return (
        <>
            <div className="flex flex-wrap gap-2 p-2 mx-6 items-start justify-center mt-8">
                {selectedTech.map(({ tech, selected }, idx) => (
                    <div
                        key={idx}
                        onClick={() =>
                            setSelectedTech((prev) =>
                                prev.map((item) =>
                                    item.tech === tech ? { ...item, selected: !item.selected } : item
                                )
                            )
                        }
                        className={`w-35 h-10 border-2 border-gray-800 rounded-xl flex items-center justify-center "bg-gray-700" ${selected ? "opacity-100" : "opacity-30"}`}
                    >
                        <img src={`./icons/${tech == "C#" ? "CSharp" : tech}.png`} className="w-6 rounded-2xl mr-2"/> <p className="text-[12px] font-medium">{tech}</p>
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap gap-4 p-4 mx-10 items-center justify-center">
                <div onClick={() => setEveryTech(true)} className="w-50 rounded-2xl flex justify-center cursor-pointer p-3 border-2 border-gray-800"><p>Select all Tech</p></div>
                <div onClick={() => setEveryTech(false)} className="w-50 rounded-2xl flex justify-center cursor-pointer p-3 border-2 border-gray-800"><p>Unselect all tech</p></div>
                <p>Displayed {selectedProjectCount} projects</p>
            </div>

            {selectedProjectCount == 0 &&
                <div className="flex flex-wrap gap-4 p-4 mx-10 items-center justify-center">
                    <p>No project to display. Select tech</p>
                </div>
            }
            {selectedProjectCount != 0 && selectedProject
                .filter((p) => p.selected)
                .map(({ project }, idx) => (
                    <ProjectFrame
                        key={idx}
                        name={project.name}
                        date={project.date}
                        description={project.description}
                        images={project.images}
                        tech={project.tech}
                        isDescriptionOnRight={!(idx % 2)}
                    />
            ))}
        </>
    )
}

export default RenderProjects
