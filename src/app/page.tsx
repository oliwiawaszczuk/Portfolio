"use client"
import Header from "@/app/components/Header";
import KnowledgeGraph from "@/app/components/KnowledgeGraph";
import RenderProjects from "@/app/components/RenderProjects";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-[#121212] min-h-screen relative"
        >
            <div className="dots-background"></div>
            
            <div className="fixed top-1/4 left-1/5 w-72 h-72 rounded-full bg-[#0b6e4f]/5 blur-[120px] animate-float-slow"></div>
            <div className="fixed bottom-1/4 right-1/5 w-80 h-80 rounded-full bg-[#ffc951]/5 blur-[150px] animate-float"></div>
            <div className="fixed top-3/4 left-2/3 w-64 h-64 rounded-full bg-[#45565e]/8 blur-[100px] animate-float-slow"></div>
            
            <section className="relative">
                <Header />
            </section>
            
            <section id="projects" className="relative z-10">
                <RenderProjects/>
            </section>

            <section id="skills" className="relative z-10">
                <KnowledgeGraph/>
            </section>
            
            <footer className="py-12 bg-black/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                    <div className="h-[2px] w-16 bg-[#ffc951] mb-6"></div>
                    <p className="text-[#a0a0a0] text-sm">© {new Date().getFullYear()} Oliwia Waszczuk</p>
                </div>
            </footer>
        </motion.div>
    )
}
