import { useEffect, useState } from "react"
import ProjectFrame from "@/app/components/ProjectFrame"
import FullscreenImageViewer from "@/app/components/FullscreenImageViewer"
import {Project} from "@/types/Project"
import {EnumTech} from "@/const/EnumTech"
import {projects} from "@/const/Projects"
import { motion } from "framer-motion"

export type SelectedTech = {
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
    const [fullscreenImage, setFullscreenImage] = useState<string | null>(null)

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
    
    const handleImageClick = (imgSrc: string) => {
        console.log(imgSrc)
        setFullscreenImage(imgSrc)
        document.body.style.overflow = "hidden"
    }
    
    const closeFullscreen = () => {
        setFullscreenImage(null)
        document.body.style.overflow = "auto"
    }
    
    const handleTechClick = (tech: EnumTech) => {
        setSelectedTech((prev) =>
            prev.map((item) =>
                item.tech === tech ? { ...item, selected: !item.selected } : item
            )
        )
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
    }, [selectedTech])

    return (
        <section className="py-16 relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
            >
                <h2 className="text-3xl font-light text-white mb-2 tracking-tight">Projects<span className="font-semibold"> Portfolio</span></h2>
                <div className="h-[2px] w-24 bg-[#ffc951] mb-6"></div>
                <p className="text-[#a0a0a0] max-w-2xl">Filter projects by technology to see what I've been working on.</p>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                <div className="mb-12 bg-[#1e1e1e]/80 backdrop-blur-sm rounded-xl p-6 border border-[#ffc951]/20 shadow-lg">
                    <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
                        <h3 className="text-white font-medium text-lg">Filter by technology</h3>
                        <div className="flex flex-wrap gap-2">
                            <button 
                                onClick={() => setEveryTech(true)} 
                                className="px-4 py-2 text-sm rounded-md bg-[#ffc951]/10 text-[#ffc951] border border-[#ffc951]/20 hover:bg-[#ffc951]/20 transition-all"
                            >
                                Select all
                            </button>
                            <button 
                                onClick={() => setEveryTech(false)} 
                                className="px-4 py-2 text-sm rounded-md bg-black/30 text-[#a0a0a0] border border-gray-800/50 hover:bg-black/50 transition-all"
                            >
                                Clear all
                            </button>
                            <div className="px-4 py-2 text-sm rounded-md bg-black/20 text-[#a0a0a0] border border-gray-800/30">
                                {selectedProjectCount} projects
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                        {selectedTech.map(({ tech, selected }, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: idx * 0.03 }}
                                onClick={() => handleTechClick(tech)}
                                className={`group py-2 px-4 border rounded-lg flex items-center justify-center gap-3 cursor-pointer transition-all ${
                                    selected 
                                        ? "border-[#ffc951]/40 bg-[#ffc951]/10 text-white" 
                                        : "border-gray-800/50 bg-black/20 text-[#a0a0a0]"
                                }`}
                            >
                                <img 
                                    src={`./icons/${tech === "C#" ? "CSharp" : tech}.png`} 
                                    className={`w-6 h-6 rounded-sm transition-all ${selected ? "opacity-100" : "opacity-50 group-hover:opacity-70"}`}
                                    alt={tech}
                                /> 
                                <p className="text-sm font-medium">{tech}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {selectedProjectCount === 0 && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-16 text-[#a0a0a0]"
                    >
                        <svg 
                            className="mx-auto h-12 w-12 text-gray-500 mb-4" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor" 
                            aria-hidden="true"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="1.5" 
                                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" 
                            />
                        </svg>
                        <p className="mt-2 text-sm font-medium">No projects match your filter selection.</p>
                        <p className="mt-1 text-sm">Please select at least one technology to view projects.</p>
                    </motion.div>
                )}
                
                {/* Projects list */}
                <div className="space-y-0">
                    {selectedProjectCount > 0 && selectedProject
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
                                onImageClick={handleImageClick}
                                selectedTech={selectedTech}
                                onTechClick={handleTechClick}
                            />
                        ))}
                </div>
            </motion.div>
            
            {/* Fullscreen Image Viewer (outside of any project component) */}
            <FullscreenImageViewer
                imageSrc={fullscreenImage}
                onClose={closeFullscreen}
            />
        </section>
    )
}

export default RenderProjects
