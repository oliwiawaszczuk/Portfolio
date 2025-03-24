'use client'

import {useEffect, useState} from "react"

const ScrollTracker = () => {
    const [scrollY, setScrollY] = useState<number>(0)

    useEffect(() => {
        if (typeof window === "undefined") return

        const handleScroll = () => {
            console.log("owieh")
            setScrollY(window.scrollY)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div>
            <p>{scrollY} - wlefh</p>
            <p>{scrollY} - wlefh</p>
            <p>{scrollY} - wlefh</p>
            <p>{scrollY} - wlefh</p>
            <p>{scrollY} - wlefh</p>
            <p>{scrollY} - wlefh</p>
            <p>{scrollY} - wlefh</p>
        </div>
    )
}

export default ScrollTracker