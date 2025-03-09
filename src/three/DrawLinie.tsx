import * as THREE from 'three'
import {line_material} from "@/const/three_const";


export const DrawLine = (start: THREE.Vector2, end: THREE.Vector2) => {
    const material = line_material
    const geometry = new THREE.BufferGeometry().setFromPoints([start, end])
    return new THREE.Line(geometry, material)
}