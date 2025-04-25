"use client"
import Header from "@/app/components/Header";
import ScrollTracker from "@/utils/ScrollTracker";
import {useEffect, useState} from "react";
import KnowledgeGraph from "@/app/components/KnowledgeGraph";
import RenderProjects from "@/app/components/RenderProjects";


export default function Home() {
    // const scrollY = ScrollTracker()

    // const [isHeaderVisible, setIsHeaderVisible] = useState(true)
    //
    // useEffect(() => {
    //     setIsHeaderVisible(scrollY <= 30)
    // }, [scrollY])

    return (
        <>
            {/*<div className={`w-full transition-all duration-500 ease-in-out ${isHeaderVisible ? "translate-y-10 opacity-100" : "-translate-y-full opacity-0"}`}>*/}
                <Header />
            {/*</div>*/}

            <KnowledgeGraph/>

            <RenderProjects/>


            {/*<h1 className="flex justify-center text-4xl">To be continued...</h1>*/}
        </>
    )
}
