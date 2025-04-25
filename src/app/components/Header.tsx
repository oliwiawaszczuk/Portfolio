'use client'

import Scene from "@/three/scene";
import {is_scene_active} from "@/const/three_const";
import GradientBackground from "@/app/components/GradientBackground";

export default function Header() {
    return (
        <div className="w-full min-h-screen z-20">
            <GradientBackground/>
            {is_scene_active && <Scene/>}
            <div className="absolute z-3 w-full h-full bg-black opacity-30"></div>
            <div className="absolute z-4 w-full h-full flex flex-col items-center justify-center text-center space-y-4">
                <p className="text-6xl">Oliwia</p>
                <p className="text-8xl">Waszczuk</p>
            </div>
        </div>
    )
}
