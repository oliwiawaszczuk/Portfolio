"use client"
import * as THREE from 'three';
import {useEffect, useRef} from "react";
import {scene} from "@/const/three_const";
import {AnimateHexagons, AnimateLinesBetweenHexagons, CreateHexagons} from "@/three/BGHex";
import {DrawLine} from "@/three/DrawLinie";


const Scene = () => {
    const ref = useRef(null)

    useEffect(() => {
        const aspectRatio = window.innerWidth / window.innerHeight
        const camera = new THREE.OrthographicCamera(-aspectRatio * 5, aspectRatio * 5, 5, -5, 0.1, 1000)
        camera.position.z = 5

        const render = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
        })
        render.setSize(window.innerWidth, window.innerHeight)
        // @ts-ignore
        ref.current.appendChild(render.domElement)

        CreateHexagons()

        const animate = () => {
            requestAnimationFrame(animate)

            AnimateHexagons()
            AnimateLinesBetweenHexagons()

            render.render(scene, camera)
        }
        animate()

        return () => {
            // @ts-ignore
            ref.current.removeChild(render.domElement)
        }
    }, [])

    return <div className={"absolute z-2"} ref={ref}/>
}

export default Scene