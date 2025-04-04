import {useEffect, useState} from "react"

const ScrollTracker = () => {
    const [scrollY, setScrollY] = useState<number>(0)

    useEffect(() => {
        if (typeof window === "undefined") return

        const handleScroll = () => {
            setScrollY(window.scrollY)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return scrollY
}

export default ScrollTracker