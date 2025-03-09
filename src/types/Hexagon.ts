import * as THREE from "three";

export type Hexagon = {
    mesh: THREE.Mesh
    border_mesh: THREE.Mesh
    rotation_speed: number
    movement_speed: number
    direction: THREE.Vector2
    pulse_speed: number
    pulse_scale: number
}