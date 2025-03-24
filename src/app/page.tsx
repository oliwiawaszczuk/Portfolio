"use client"
import Header from "@/app/components/Header";
import GradientBackground from "@/app/components/GradientBackground";
import {useEffect} from "react";
import ScrollTracker from "@/app/components/ScrollTracker";

export default function Home() {

    // useEffect(() => {
    //     console.log(window.innerWidth, window.innerHeight)
    // }, [])

    // const {width, height} = Dimensions.get("window")

    return (
        <>
            {/*<GradientBackground/>*/}
            {/*<div className="w-full h-100 bg-black">*/}
                <Header/>
            {/*</div>*/}
            {/*<div className="h-100 bg-gray-700">*/}
            {/*    <ScrollTracker/>*/}
            {/*</div>*/}
        </>
    )
}
