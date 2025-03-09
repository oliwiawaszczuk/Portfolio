import * as THREE from 'three'
import {Hexagon} from "@/types/Hexagon";

export type HexagonLine = {
    HexagonA: Hexagon
    HexagonB: Hexagon
    line_mesh: THREE.Line
}