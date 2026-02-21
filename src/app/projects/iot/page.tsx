"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import IoTProjectCard from "@/app/components/IoTProjectCard"
import { iotProjects } from "@/const/IoTProjects"

export default function IoTProjectsPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-[#121212] min-h-screen relative"
        >
            <div className="dots-background" />
            <div className="fixed top-1/4 left-1/5 w-72 h-72 rounded-full bg-[#0b6e4f]/5 blur-[120px] animate-float-slow" />
            <div className="fixed bottom-1/4 right-1/5 w-80 h-80 rounded-full bg-[#ffc951]/5 blur-[150px] animate-float" />
            <div className="fixed top-3/4 left-2/3 w-64 h-64 rounded-full bg-[#45565e]/8 blur-[100px] animate-float-slow" />

            <header className="relative z-10 pt-8 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-2 text-[#a0a0a0] hover:text-[#ffc951] transition-colors text-sm mb-8 group"
                    >
                        <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Powrót do projektów
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 rounded-xl bg-[#ffc951]/10 border border-[#ffc951]/20">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ffc951]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <span className="text-[#ffc951] text-sm font-medium tracking-widest uppercase">IoT & Hardware</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-2">
                            Projekty <span className="font-semibold text-[#ffc951]">IoT</span>
                        </h1>
                        <div className="h-[2px] w-20 bg-[#ffc951] mb-4" />
                        <p className="text-[#a0a0a0] max-w-2xl text-lg">
                            Systemy wbudowane, sensory, automatyka — projekty łączące hardware z oprogramowaniem.
                        </p>
                    </motion.div>
                </div>
            </header>

            <main className="relative z-10 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-20">
                    {/* Project 1 - media-left, full width */}
                    <div className="w-full">
                        <IoTProjectCard project={iotProjects[0]} variant="media-left" index={0} />
                    </div>

                    {/* Project 2 - media-center, cinematic */}
                    <div className="w-full flex justify-center">
                        <IoTProjectCard project={iotProjects[1]} variant="media-center" index={1} />
                    </div>

                    {/* Project 3 - asymmetric: media-right + stacked card */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                        <div className="lg:col-span-7">
                            <IoTProjectCard project={iotProjects[2]} variant="media-right" index={2} />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="lg:col-span-5 lg:sticky lg:top-24"
                        >
                            <div className="p-6 rounded-2xl bg-[#1e1e1e]/60 backdrop-blur-sm border border-[#ffc951]/10">
                                <h3 className="text-lg font-medium text-[#ffc951] mb-3">Technologie IoT</h3>
                                <p className="text-[#a0a0a0] text-sm leading-relaxed">
                                    ESP32, Arduino, Raspberry Pi, MQTT, czujniki, serwery lokalne — każdy projekt dobiera stack pod konkretny use-case.
                                </p>
                                <div className="mt-4 pt-4 border-t border-[#ffc951]/10">
                                    <p className="text-[#e0e0e0] text-xs">
                                        Więcej projektów webowych znajdziesz w sekcji{" "}
                                        <Link href="/#projects" className="text-[#ffc951] hover:underline">
                                            Projects Portfolio
                                        </Link>
                                        .
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>

            <footer className="py-8 bg-black/30 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                    <div className="h-[2px] w-16 bg-[#ffc951] mb-6" />
                    <p className="text-[#a0a0a0] text-sm">© {new Date().getFullYear()} Oliwia Waszczuk</p>
                </div>
            </footer>
        </motion.div>
    )
}
