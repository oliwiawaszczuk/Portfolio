"use client";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden z-1">
            <div className="absolute inset-0 w-full h-full bg-[#45565E]" />

            <motion.div
                className="absolute inset-0 w-full h-full"
                style={{
                    background: "radial-gradient(circle at 50% 50%, #4C5D62 10%, #45565E 40%, #3A4A4D 80%, #5A6A6C 100%)",
                    backgroundSize: "50% 50%",
                    filter: "blur(100px)",
                }}
                animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "50% 50%", "0% 0%"],
                }}
                transition={{
                    duration: 40,
                    ease: "linear",
                    repeat: Infinity,
                }}
            />

            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full bg-[#4C5D62] opacity-25"
                style={{ filter: "blur(150px)" }}
                animate={{
                    x: ["10%", "70%", "30%"],
                    y: ["20%", "60%", "40%"],
                    scale: [1, 1.5, 1],
                }}
                transition={{
                    duration: 30,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                }}
            />
        </div>
    );
};

export default AnimatedBackground;
