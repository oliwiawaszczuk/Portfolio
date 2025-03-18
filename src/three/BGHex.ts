import {Hexagon} from "@/types/Hexagon";
import {HexagonLine} from "@/types/HexagonLine";
import {
    bottomBound, bottomLineX1, bottomLineX2,
    hexagon_border_material,
    hexagon_material,
    hexagon_size,
    leftBound, leftLineY1, leftLineY2,
    number_of_hexagons, rightBound, rightLineY1, rightLineY2,
    scene, topBound, topLineX1, topLineX2
} from "@/const/three_const";
import {DrawLine} from "@/three/DrawLinie";
import * as THREE from "three";
import HexagonGeometry from "@/three/HexagonGeometry";

export let hexagons: Hexagon[] = []
let lines: HexagonLine[] = []

export function CreateHexagons() {
    const aspectRatio = window.innerWidth / window.innerHeight

    for (let i=0; i<number_of_hexagons; i++) {
        const geometry = new HexagonGeometry(hexagon_size)
        const geometry_border = new HexagonGeometry(hexagon_size + hexagon_size*0.3)
        const mesh = new THREE.Mesh(geometry, hexagon_material)
        const mesh_border = new THREE.Mesh(geometry_border, hexagon_border_material)

        let rand_pos_x, rand_pos_y

        do {
            rand_pos_y = (Math.random() - 0.5) * 2 * aspectRatio * 2.5
            rand_pos_x = (Math.random() - 0.5) * 4 * 4.5
        } while (
            rand_pos_x >= leftBound && rand_pos_x <= rightBound &&
            rand_pos_y >= bottomBound && rand_pos_y <= topBound
        )

        mesh_border.position.y = rand_pos_y
        mesh_border.position.x = rand_pos_x
        mesh.position.y = rand_pos_y
        mesh.position.x = rand_pos_x

        mesh_border.renderOrder = 1
        mesh.renderOrder = 2

        const angle = Math.random() * Math.PI * 2
        const direction = new THREE.Vector2(Math.cos(angle), Math.sin(angle)).normalize()

        const hexagon: Hexagon = {
            mesh: mesh,
            border_mesh: mesh_border,
            rotation_speed: (Math.random() - 0.5) / 100,
            movement_speed: Math.random() * 0.0015,
            direction: direction,
            pulse_scale: 1,
            pulse_speed: Math.random() * 0.002 + 0.003,
        }

        scene.add(mesh_border)
        scene.add(mesh)

        hexagons.push(hexagon)
    }
}

export function AnimateHexagons() {
    const aspectRatio = window.innerWidth / window.innerHeight

    for(let hexagon of hexagons) {
        hexagon.mesh.rotation.z += hexagon.rotation_speed
        hexagon.border_mesh.rotation.z += hexagon.rotation_speed

        hexagon.pulse_scale = 1 + (Math.sin(Date.now() * hexagon.pulse_speed) * 0.06) + (Math.cos(Date.now() * hexagon.pulse_speed * 0.8) * 0.02)
        hexagon.mesh.scale.set(hexagon.pulse_scale, hexagon.pulse_scale, 1)
        hexagon.border_mesh.scale.set(hexagon.pulse_scale, hexagon.pulse_scale, 1)

        hexagon.mesh.position.x += hexagon.direction.x * hexagon.movement_speed
        hexagon.mesh.position.y += hexagon.direction.y * hexagon.movement_speed
        hexagon.border_mesh.position.x = hexagon.mesh.position.x
        hexagon.border_mesh.position.y = hexagon.mesh.position.y

        if (hexagon.mesh.position.x < -aspectRatio * 5 || hexagon.mesh.position.x > aspectRatio * 5)
            hexagon.direction.x *= -1
        if (hexagon.mesh.position.y < -5 || hexagon.mesh.position.y > 5)
            hexagon.direction.y *= -1

        if (hexagon.mesh.position.y >= topBound &&
            hexagon.mesh.position.x >= topLineX1 && hexagon.mesh.position.x <= topLineX2) {
            hexagon.direction.y *= -1;
        }

        if (hexagon.mesh.position.y <= bottomBound &&
            hexagon.mesh.position.x >= bottomLineX1 && hexagon.mesh.position.x <= bottomLineX2) {
            hexagon.direction.y *= -1;
        }

        if (hexagon.mesh.position.x <= leftBound &&
            hexagon.mesh.position.y >= leftLineY1 && hexagon.mesh.position.y <= leftLineY2) {
            hexagon.direction.x *= -1;
        }

        if (hexagon.mesh.position.x >= rightBound &&
            hexagon.mesh.position.y >= rightLineY1 && hexagon.mesh.position.y <= rightLineY2) {
            hexagon.direction.x *= -1;
        }
    }
}

export function AnimateLinesBetweenHexagons() {
    for (let i = 0; i < hexagons.length; i++) {
        for (let j = i + 1; j < hexagons.length; j++) {
            const hexagonA = hexagons[i]
            const hexagonB = hexagons[j]

            const line_exist = lines.find(line =>
                (line.HexagonA === hexagonA && line.HexagonB === hexagonB) ||
                (line.HexagonA === hexagonB && line.HexagonB === hexagonA)
            )

            const distance = Math.sqrt(
                Math.pow(hexagonA.mesh.position.x - hexagonB.mesh.position.x, 2) +
                Math.pow(hexagonA.mesh.position.y - hexagonB.mesh.position.y, 2)
            )

            if (line_exist) {
                if (distance > 2) {
                    lines = lines.filter(line => line !== line_exist)
                    scene.remove(line_exist.line_mesh)
                } else {
                    const positions = line_exist.line_mesh.geometry.attributes.position.array
                    positions[0] = hexagonA.mesh.position.x
                    positions[1] = hexagonA.mesh.position.y
                    positions[3] = hexagonB.mesh.position.x
                    positions[4] = hexagonB.mesh.position.y

                    line_exist.line_mesh.geometry.attributes.position.needsUpdate = true
                }
            } else {
                if (distance < 2) {
                    const line_mesh = DrawLine(
                        new THREE.Vector2(hexagonA.mesh.position.x, hexagonA.mesh.position.y),
                        new THREE.Vector2(hexagonB.mesh.position.x, hexagonB.mesh.position.y)
                    )
                    line_mesh.renderOrder = 1

                    const line: HexagonLine = {
                        HexagonA: hexagonA,
                        HexagonB: hexagonB,
                        line_mesh: line_mesh
                    }

                    lines.push(line)
                    scene.add(line_mesh)
                }
            }
        }
    }
}