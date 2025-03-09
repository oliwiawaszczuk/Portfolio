import * as THREE from 'three'


export default class HexagonGeometry extends THREE.BufferGeometry {
    constructor(radius: number) {
        super()

        const vertices = []
        for (let i = 0; i < 6; i++) {
            const angle = (i / 6) * Math.PI * 2
            const x = radius * Math.cos(angle)
            const y = radius * Math.sin(angle)
            vertices.push(x, y, 0)
        }

        vertices.push(0, 0, 0)

        const indices = []
        for (let i = 0; i < 6; i++) {
            indices.push(i, (i + 1) % 6, 6)
        }

        this.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(vertices, 3)
        )

        this.setIndex(indices)

        this.computeVertexNormals()
    }
}