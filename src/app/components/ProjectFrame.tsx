'use client'

import ImageSlider from "@/app/components/ImageSlider";
import "@fontsource/fredoka";
import {Project} from "@/types/Project";

type ProjectFrameProps = Project & {
    isDescriptionOnRight: boolean,
}

const ProjectFrame = ({isDescriptionOnRight, name, description, images, date, tech}: ProjectFrameProps) => {
    return (
        <div className="m-8 h-180 bg-gray-700 flex p-5 gap-4 rounded-3xl border-2 border-gray-800"> {/*border-t-2 border-dotted border-[#ffc951]*/}
            {/* IMAGES / SCREENSHOTS ON LEFT*/}
            {isDescriptionOnRight && <div className="w-1/2 h-full ">
                <ImageSlider images={images} />
            </div>}

            <div className="w-1/2 h-full flex flex-col">
                {/* NAME */}
                <div className="flex h-1/5">
                    <div className={`w-3/4 border-b-3 border-[#ffc951] flex items-center px-6`}>
                        <h1 className={`text-[#ffc951] text-5xl font-bold tracking-wider`} style={{ fontFamily: "'Indie Flower', cursive" }}>{name}</h1>
                    </div>
                    <div className={`w-1/4 border-b-3 border-[#ffc951] flex items-end justify-end px-6`}>
                        <h1 className={`text-[#ffc951] text-2xl`} style={{ fontFamily: "Crimson Text" }}>{date}</h1>
                    </div>
                </div>
                {/* DESCRIPTION */}
                <div className="h-4/6 rounded-4xl p-6 overflow-y-auto bg-green-900/30 backdrop-blur-sm m-3 mt-5 border-2 border-gray-800">
                    {description}
                </div>

                {/* SKILLS / WHAT I USED*/}
                <div className="h-2/8 flex flex-wrap gap-4 p-4 mx-10 items-start justify-center">
                    {tech.map((item, i) => (
                        <div key={i} className="inline-flex items-center gap-1 px-2 h-12 border-2 border-gray-800 rounded-xl">
                            <img src={`./icons/${item == "C#" ? "CSharp" : item}.png`} className="w-8 rounded-2xl mr-2"/> <p className="text-sm font-medium">{item}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* IMAGES / SCREENSHOTS ON RIGHT*/}
            {!isDescriptionOnRight && <div className="w-1/2 h-full ">
                <ImageSlider images={images} />
            </div>}
        </div>
    )
}

export default ProjectFrame;
