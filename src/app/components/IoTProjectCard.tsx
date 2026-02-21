"use client"

import { IoTProject } from "@/types/IoTProject"
import { motion } from "framer-motion"
import { useState } from "react"

type LayoutVariant = "media-left" | "media-right" | "media-center" | "stacked"

type IoTProjectCardProps = {
    project: IoTProject
    variant: LayoutVariant
    index: number
}

const MediaPlaceholder = ({ className = "" }: { className?: string }) => (
    <div className={`bg-gradient-to-br from-[#0b6e4f]/30 via-[#45565e]/20 to-[#ffc951]/10 flex items-center justify-center ${className}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#ffc951]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    </div>
)

export default function IoTProjectCard({ project, variant, index }: IoTProjectCardProps) {
    const [expanded, setExpanded] = useState(false)
    const [mainMediaIndex, setMainMediaIndex] = useState(0)
    const [failedMedia, setFailedMedia] = useState<Record<number, boolean>>({})
    const mainMedia = project.media[mainMediaIndex]

    const basePath = "/projects_image/"

    const MediaBlock = ({ src, type, mediaIndex, extraClass = "" }: { src: string; type: "image" | "video"; mediaIndex: number; extraClass?: string }) => {
        const hasFailed = failedMedia[mediaIndex]
        if (hasFailed) return <MediaPlaceholder className={`w-full h-full ${extraClass}`} />

        if (type === "video") {
            return (
                <video
                    src={`${basePath}${src}`}
                    className={`w-full h-full object-cover ${extraClass}`}
                    playsInline
                    autoPlay
                    loop
                    muted
                    onError={() => setFailedMedia((p) => ({ ...p, [mediaIndex]: true }))}
                />
            )
        }
        return (
            <img
                src={`${basePath}${src}`}
                alt={project.name}
                className={`w-full h-full object-cover ${extraClass}`}
                onError={() => setFailedMedia((p) => ({ ...p, [mediaIndex]: true }))}
            />
        )
    }

    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
        >
            <div className={`
                relative overflow-hidden rounded-2xl
                bg-[#1e1e1e]/90 backdrop-blur-md
                border border-[#ffc951]/15 hover:border-[#ffc951]/35
                shadow-xl hover:shadow-[0_20px_60px_-15px_rgba(255,201,81,0.12)]
                transition-all duration-500
                ${variant === "media-center" ? "max-w-4xl mx-auto" : ""}
                ${variant === "stacked" ? "max-w-xl" : ""}
            `}>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0b6e4f]/5 via-transparent to-[#ffc951]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {variant === "media-left" && (
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-[45%] relative aspect-[4/3] lg:aspect-auto lg:min-h-[320px] overflow-hidden">
                            <div className="absolute inset-0">
                                {mainMedia ? (
                                    <MediaBlock src={mainMedia.src} type={mainMedia.type} mediaIndex={mainMediaIndex} />
                                ) : (
                                    <MediaPlaceholder className="w-full h-full" />
                                )}
                            </div>
                            {project.media.length > 1 && (
                                <div className="absolute bottom-3 left-3 flex gap-1.5">
                                    {project.media.map((m, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setMainMediaIndex(i)}
                                            className={`w-2 h-2 rounded-full transition-all ${mainMediaIndex === i ? "bg-[#ffc951] scale-125" : "bg-white/40 hover:bg-white/60"}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center">
                            <span className="text-[#a0a0a0] text-sm font-medium tracking-wider uppercase mb-1">{project.date}</span>
                            <h3 className="text-2xl font-semibold text-[#ffc951] mb-3">{project.name}</h3>
                            <p className="text-[#e0e0e0] text-[0.95rem] leading-relaxed mb-4">{project.summary}</p>
                            <button
                                onClick={() => setExpanded(!expanded)}
                                className="text-[#ffc951] text-sm font-medium hover:underline flex items-center gap-1 self-start"
                            >
                                {expanded ? "Zwiń" : "Szczegóły techniczne"}
                                <svg className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {expanded && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    className="mt-4 p-4 rounded-lg bg-[#121212]/60 border border-[#ffc951]/10"
                                >
                                    <p className="text-[#a0a0a0] text-sm leading-relaxed">{project.technicalDescription}</p>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="px-2.5 py-1 text-xs rounded-md bg-[#ffc951]/10 text-[#ffc951] border border-[#ffc951]/20">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                )}

                {variant === "media-right" && (
                    <div className="flex flex-col lg:flex-row-reverse">
                        <div className="lg:w-[50%] relative aspect-[16/9] lg:aspect-auto lg:min-h-[340px] overflow-hidden rounded-l-2xl lg:rounded-l-none lg:rounded-r-2xl">
                            <div className="absolute inset-0">
                                {mainMedia ? (
                                    <MediaBlock src={mainMedia.src} type={mainMedia.type} mediaIndex={mainMediaIndex} />
                                ) : (
                                    <MediaPlaceholder className="w-full h-full" />
                                )}
                            </div>
                            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-[#ffc951] text-xs font-medium">
                                IoT
                            </div>
                        </div>
                        <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center">
                            <span className="text-[#a0a0a0] text-sm font-medium tracking-wider uppercase mb-1">{project.date}</span>
                            <h3 className="text-2xl font-semibold text-[#ffc951] mb-3">{project.name}</h3>
                            <p className="text-[#e0e0e0] text-[0.95rem] leading-relaxed mb-4">{project.summary}</p>
                            <button
                                onClick={() => setExpanded(!expanded)}
                                className="text-[#ffc951] text-sm font-medium hover:underline flex items-center gap-1 self-start"
                            >
                                {expanded ? "Zwiń" : "Szczegóły techniczne"}
                                <svg className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {expanded && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    className="mt-4 p-4 rounded-lg bg-[#121212]/60 border border-[#ffc951]/10"
                                >
                                    <p className="text-[#a0a0a0] text-sm leading-relaxed">{project.technicalDescription}</p>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="px-2.5 py-1 text-xs rounded-md bg-[#ffc951]/10 text-[#ffc951] border border-[#ffc951]/20">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                )}

                {variant === "media-center" && (
                    <div className="p-6 lg:p-8">
                        <div className="flex flex-col items-center text-center mb-6">
                            <span className="text-[#a0a0a0] text-sm font-medium tracking-wider uppercase mb-1">{project.date}</span>
                            <h3 className="text-2xl font-semibold text-[#ffc951] mb-3">{project.name}</h3>
                            <p className="text-[#e0e0e0] text-[0.95rem] leading-relaxed max-w-2xl">{project.summary}</p>
                        </div>
                        <div className="relative aspect-[21/9] rounded-xl overflow-hidden mb-6">
                            <div className="absolute inset-0">
                                {mainMedia ? (
                                    <MediaBlock src={mainMedia.src} type={mainMedia.type} mediaIndex={mainMediaIndex} />
                                ) : (
                                    <MediaPlaceholder className="w-full h-full" />
                                )}
                            </div>
                            {project.media.length > 1 && (
                                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                                    {project.media.map((m, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setMainMediaIndex(i)}
                                            className={`w-2.5 h-2.5 rounded-full transition-all ${mainMediaIndex === i ? "bg-[#ffc951] scale-125" : "bg-white/40 hover:bg-white/60"}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="flex justify-center">
                            <button
                                onClick={() => setExpanded(!expanded)}
                                className="text-[#ffc951] text-sm font-medium hover:underline flex items-center gap-1"
                            >
                                {expanded ? "Zwiń" : "Szczegóły techniczne"}
                                <svg className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                        {expanded && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                className="mt-6 p-4 rounded-lg bg-[#121212]/60 border border-[#ffc951]/10"
                            >
                                <p className="text-[#a0a0a0] text-sm leading-relaxed text-center">{project.technicalDescription}</p>
                                <div className="flex flex-wrap justify-center gap-2 mt-3">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-2.5 py-1 text-xs rounded-md bg-[#ffc951]/10 text-[#ffc951] border border-[#ffc951]/20">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>
                )}

                {variant === "stacked" && (
                    <div className="p-6">
                        <div className="grid grid-cols-2 gap-2 mb-4">
                            {project.media.slice(0, 2).map((m, i) => (
                                <div key={i} className={`relative aspect-video rounded-lg overflow-hidden ${i === 0 ? "col-span-2" : ""}`}>
                                    <MediaBlock src={m.src} type={m.type} mediaIndex={i} extraClass="absolute inset-0" />
                                </div>
                            ))}
                            {project.media.length === 0 && <MediaPlaceholder className="col-span-2 aspect-video rounded-lg" />}
                        </div>
                        <span className="text-[#a0a0a0] text-sm font-medium tracking-wider uppercase mb-1 block">{project.date}</span>
                        <h3 className="text-xl font-semibold text-[#ffc951] mb-2">{project.name}</h3>
                        <p className="text-[#e0e0e0] text-sm leading-relaxed mb-4">{project.summary}</p>
                        <button
                            onClick={() => setExpanded(!expanded)}
                            className="text-[#ffc951] text-sm font-medium hover:underline flex items-center gap-1"
                        >
                            {expanded ? "Zwiń" : "Szczegóły techniczne"}
                            <svg className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {expanded && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                className="mt-4 p-3 rounded-lg bg-[#121212]/60 border border-[#ffc951]/10"
                            >
                                <p className="text-[#a0a0a0] text-xs leading-relaxed">{project.technicalDescription}</p>
                                <div className="flex flex-wrap gap-1.5 mt-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-2 py-0.5 text-xs rounded bg-[#ffc951]/10 text-[#ffc951]">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>
                )}
            </div>
        </motion.article>
    )
}
