import * as THREE from "three";

// VARIABLE
export let is_scene_active: boolean = true
export const scene: THREE.Scene = new THREE.Scene();

export const line_material = new THREE.LineBasicMaterial({ color: 0xffc200, transparent: true })
export const hexagon_material = new THREE.MeshBasicMaterial({ color: 0xffc951 })
export const hexagon_border_material = new THREE.MeshBasicMaterial({ color: 0xffc200 })

export const hexagon_size = 0.1
export const number_of_hexagons = 50

export const leftBound = -2.5
export const rightBound = 2.5
export const topBound = 1
export const bottomBound = -1


export const topLineX1 = -2.5, topLineX2 = 2.5
export const bottomLineX1 = -2.5, bottomLineX2 = 2.5
export const leftLineY1 = -1, leftLineY2 = 1
export const rightLineY1 = -1, rightLineY2 = 1