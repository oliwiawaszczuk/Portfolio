'use client'

import Scene from "@/three/scene";
import {is_scene_active} from "@/const/three_const";
import { motion } from "framer-motion";

export default function Header() {
    return (
        <div className="w-full min-h-screen relative overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-[#121212] z-0">
                <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[#0b6e4f]/30 blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-[#45565e]/40 blur-[100px]" />
                <div className="absolute top-3/4 left-1/3 w-64 h-64 rounded-full bg-[#ffc951]/20 blur-[100px]" />
            </div>
            
            <div className="absolute inset-0 w-full h-full z-1 opacity-10"
                style={{
                    backgroundImage: 'linear-gradient(#ffc951 1px, transparent 1px), linear-gradient(90deg, #ffc951 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />
            
            {is_scene_active && <Scene/>}
            
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-2"
                >
                    <p className="text-[#a0a0a0] uppercase tracking-widest text-sm">Portfolio</p>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    className="relative"
                >
                    <h1 className="text-6xl md:text-7xl font-light tracking-tighter text-white mb-2">
                        <span className="font-normal">Oliwia</span>
                    </h1>
                    <h1 className="text-7xl md:text-8xl font-semibold tracking-tighter text-white">
                        Waszczuk
                    </h1>
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 0.8, duration: 1.5 }}
                        className="h-[3px] bg-[#ffc951] mt-6 mb-8"
                    />
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 0.8 }}
                    className="absolute bottom-16"
                >
                    <div className="animate-pulse-slow">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="#ffc951" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        >
                            <path d="M12 5v14M19 12l-7 7-7-7" />
                        </svg>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
