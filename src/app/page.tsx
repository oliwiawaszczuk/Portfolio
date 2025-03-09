"use client"
import Header from "@/app/components/Header";
import GradientBackground from "@/app/components/GradientBackground";
import {useEffect} from "react";

export default function Home() {

    // useEffect(() => {
    //     console.log(window.innerWidth, window.innerHeight)
    // }, [])

    // const {width, height} = Dimensions.get("window")

    return (
        <>
            <GradientBackground/>
            <Header />
        </>
    );
}
