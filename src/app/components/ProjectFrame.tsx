'use client'

import ImageSlider from "@/app/components/ImageSlider";
import "@fontsource/fredoka";
import { Project } from "@/types/Project";
import { motion } from "framer-motion";
import { SelectedTech } from "@/app/components/RenderProjects";
import { EnumTech } from "@/const/EnumTech";

type ProjectFrameProps = Project & {
    isDescriptionOnRight: boolean,
    onImageClick: (imgSrc: string) => void,
    selectedTech: SelectedTech[],
    onTechClick: (tech: EnumTech) => void
}

const ProjectFrame = ({
    isDescriptionOnRight, 
    name, 
    description, 
    images, 
    date, 
    tech, 
    onImageClick,
    selectedTech,
    onTechClick
}: ProjectFrameProps) => {
    
    // Function to check if a tech is selected
    const isTechSelected = (techItem: EnumTech): boolean => {
        const found = selectedTech.find(item => item.tech === techItem);
        return found ? found.selected : false;
    };
    
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 rounded-xl overflow-hidden shadow-lg hover:shadow-xl border border-[#ffc951]/20 hover:border-[#ffc951]/40 bg-[#1e1e1e]/80 backdrop-blur-sm transition-all duration-300"
        >
            <div className="flex flex-col lg:flex-row">
                {isDescriptionOnRight && (
                    <div className="lg:w-1/2 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] relative bg-[#151515]">
                        {images.length > 0 ? (
                            <div className="w-full h-full">
                                <ImageSlider 
                                    images={images}
                                    onImageClick={onImageClick}
                                />
                            </div>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <div className="text-center p-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-[#a0a0a0]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <p className="text-[#a0a0a0] text-lg">Coming soon</p>
                                </div>
                            </div>
                        )}
                    </div>
                )}
                
                {/* CONTENT SECTION */}
                <div className="lg:w-1/2 p-6 lg:p-8">
                    {/* HEADER WITH NAME AND DATE */}
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-6 pb-4 border-b border-[#ffc951]/30">
                        <h2 className="text-3xl font-bold text-[#ffc951]" style={{ fontFamily: "'Indie Flower', cursive" }}>
                            {name}
                        </h2>
                        <span className="text-[#a0a0a0] text-lg" style={{ fontFamily: "Crimson Text" }}>
                            {date}
                        </span>
                    </div>
                    
                    {/* DESCRIPTION */}
                    <div className="mb-8 text-white/90 overflow-y-auto max-h-[180px] md:max-h-[250px] pr-2 custom-scrollbar">
                        {description}
                    </div>
                    
                    {/* TECH STACK */}
                    <div className="flex flex-wrap gap-2">
                        {tech.map((item, i) => (
                            <div 
                                key={i} 
                                className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer transition-all duration-200 ${
                                    isTechSelected(item)
                                        ? "border-[#ffc951]/40 bg-[#ffc951]/10 text-white" 
                                        : "border-gray-800/50 bg-[#121212]/70 text-[#a0a0a0] hover:bg-[#121212]/90"
                                }`}
                                onClick={() => onTechClick(item)}
                            >
                                <img 
                                    src={`./icons/${item === "C#" ? "CSharp" : item}.png`} 
                                    className={`w-5 h-5 object-contain ${isTechSelected(item) ? "opacity-100" : "opacity-70"}`} 
                                    alt={item}
                                /> 
                                <span className="text-sm">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* IMAGES SECTION - when description is on the left */}
                {!isDescriptionOnRight && (
                    <div className="lg:w-1/2 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] relative bg-[#151515] order-first lg:order-last">
                        {images.length > 0 ? (
                            <div className="w-full h-full">
                                <ImageSlider 
                                    images={images} 
                                    onImageClick={onImageClick}
                                />
                            </div>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <div className="text-center p-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-[#a0a0a0]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <p className="text-[#a0a0a0] text-lg">Coming soon</p>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </motion.div>
    )
}

export default ProjectFrame;
