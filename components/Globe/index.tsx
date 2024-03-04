'use client';
import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three-stdlib'

import useWindowSize from '@/hooks/useWindowSize'

interface Node {
  lat: number
  lon: number
  speed: number
  zDirection: number
  xDirection: number
  yDirection: number
  conections: number[]
}

const NODES_COUNT = 90

function getRandonNumber(min: number, max: number) {
  return Math.random() * (max - min) + min
}

function latLonToVector3(lat: number, lon: number, radius: number) {
  if (isNaN(lat) || isNaN(lon)) {
    return new THREE.Vector3()
  }

  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lon + 180) * (Math.PI / 180)

  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  )
}

const Globe = ({ classname }: { classname?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer|null>(null)
  const windowSize = useWindowSize()
  const isMobile = useMemo(() => windowSize.innerWidth && windowSize.innerWidth < 1024, [windowSize.innerWidth])

  useEffect(() => {
    const container = containerRef.current

    if (!container) return

    container.innerHTML = ''

    /**
     * Create the scene
     */
    const scene = new THREE.Scene()

    /**
     * Create the camera
     */
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000)
    camera.position.z = 2

    /**
     * Create the renderer
     */

    rendererRef.current = new THREE.WebGLRenderer()

    if (!rendererRef.current) return

    const renderer = rendererRef.current

    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setClearColor(0xeef1f3, 1)

    container.appendChild(renderer.domElement)

    /**
     * Load Texture
     */
    const textureLoader = new THREE.TextureLoader()
    const earthTexture = textureLoader.load('/static/globe/globe-3.1.png')

    /**
     * Create the earth
     */
    const geometry = new THREE.SphereGeometry(1, 32, 32)
    const material = new THREE.MeshBasicMaterial({
      map: earthTexture,
      transparent: true,
      side: THREE.DoubleSide,
      opacity: 0.7,
    })
    const earth = new THREE.Mesh(geometry, material)

    scene.add(earth)

    /**
     * Create the nodes
     */
    const nodes: Node[] = []

    for (let i = 0; i < NODES_COUNT; i++) {
      const lat = Math.random() * 180 - 90
      const lon = Math.random() * 360 - 180
      const speed = Math.random() * 0.0012 + 0.0015
      let zDirection = getRandonNumber(-1, 1)
      let xDirection = getRandonNumber(-1, 1)
      let yDirection = getRandonNumber(-1, 1)

      if (getRandonNumber(0, 1) > 0.5) {
        zDirection = -zDirection
      }

      if (getRandonNumber(0, 1) > 0.5) {
        xDirection = -xDirection
      }

      if (getRandonNumber(0, 1) > 0.5) {
        yDirection = -yDirection
      }

      nodes.push({
        lat: lat,
        lon: lon,
        speed,
        zDirection,
        xDirection,
        yDirection,
        conections: [],
      })
    }

    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000,
      // transparent: true,
      // opacity: 0.7,
      // depthTest: false
    })
    const nodeGeometry = new THREE.SphereGeometry(0.0125, 5, 5)
    const nodeMesh = new THREE.InstancedMesh(nodeGeometry, nodeMaterial, nodes.length)
    const nodeGroup = new THREE.Group()

    nodeGroup.add(nodeMesh)
    earth.add(nodeGroup)

    const matrix = new THREE.Matrix4()
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i]
      const position = latLonToVector3(node.lat, node.lon, 1.15)

      matrix.setPosition(position.x, position.y, position.z)

      nodeMesh.setMatrixAt(i, matrix)
    }

    /**
     * Create the lines
     */

    const lineGeometry = new THREE.BufferGeometry()
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x000000,
      opacity: 0.4,
      transparent: true,
      depthTest: false,
    })
    const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial)
    earth.add(linesMesh)

    /**
     * Create the controls
     */

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.target = earth.position
    controls.autoRotate = true
    controls.autoRotateSpeed = 1
    controls.enableZoom = false
    controls.enableDamping = true
    controls.dampingFactor = 0.02

    /**
     * Handle Mouse Move
     */

    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()

    let isHovering = false

    container.addEventListener(
      'mouseover',
      function () {
        isHovering = true
      },
      false
    )

    container.addEventListener(
      'mouseout',
      function () {
        isHovering = false
      },
      false
    )

    container.addEventListener(
      'mousemove',
      function (event) {
        mouse.x = (event.offsetX / container.clientWidth) * 2 - 1
        mouse.y = -(event.offsetY / container.clientHeight) * 2 + 1
      },
      false
    )

    /**
     * Create the animation
     */

    function animate() {
      if (!container) return

      requestAnimationFrame(animate)

      const nodeMatrix = new THREE.Matrix4()
      for (let i = 0; i < nodes.length; i++) {
        const { speed, zDirection, xDirection, yDirection } = nodes[i]

        nodeMesh.getMatrixAt(i, nodeMatrix)

        const rotationQuaternion = new THREE.Quaternion()
        rotationQuaternion.setFromAxisAngle(new THREE.Vector3(xDirection, yDirection, zDirection), speed)

        const position = new THREE.Vector3()
        position.setFromMatrixPosition(nodeMatrix)
        position.applyQuaternion(rotationQuaternion)

        nodeMatrix.setPosition(position)
        nodeMesh.setMatrixAt(i, nodeMatrix)
      }

      raycaster.setFromCamera(mouse, camera)

      const intersects = raycaster.intersectObject(earth)

      if (isHovering) {
        if (intersects.length > 0) {
          container.style.cursor = 'none'

          const matrix = new THREE.Matrix4()
          const position = new THREE.Vector3()

          nodeMesh.getMatrixAt(0, matrix)
          position.setFromMatrixPosition(matrix)

          const point = intersects[0].point

          point.normalize()

          const spherical = new THREE.Spherical().setFromVector3(point)
          const lat = 90 - THREE.MathUtils.radToDeg(spherical.phi)
          const lon = THREE.MathUtils.radToDeg(spherical.theta) - 90
          const newPosition = latLonToVector3(lat, lon, 1.15)

          matrix.setPosition(newPosition.x, newPosition.y, newPosition.z)

          nodeMesh.setMatrixAt(0, matrix)
        } else {
          container.style.cursor = ''
        }
      } else {
        container.style.cursor = ''
      }

      const points = []

      for (let i = 0; i < nodes.length; i++) {
        for (let j = 0; j < i; j++) {
          const node1Index = i
          const node2Index = j

          const matrix1 = new THREE.Matrix4()
          nodeMesh.getMatrixAt(node1Index, matrix1)

          const position1 = new THREE.Vector3()
          position1.setFromMatrixPosition(matrix1)

          const matrix2 = new THREE.Matrix4()
          nodeMesh.getMatrixAt(node2Index, matrix2)

          const position2 = new THREE.Vector3()
          position2.setFromMatrixPosition(matrix2)

          const node1WorldPosition = new THREE.Vector3()
          const node2WorldPosition = new THREE.Vector3()

          node1WorldPosition.setFromMatrixPosition(matrix1)
          node2WorldPosition.setFromMatrixPosition(matrix2)

          const distance = node1WorldPosition.distanceTo(node2WorldPosition)

          if (distance < 0.5) {
            points.push(position1, position2)
          }
        }
      }

      linesMesh.geometry.setFromPoints(points)

      nodeMesh.instanceMatrix.needsUpdate = true

      controls.update()
      renderer.render(scene, camera)
    }

    animate()
  }, [])

  useEffect(() => {
    const container = containerRef.current

    if (!container) return
    if (!rendererRef.current) return

    rendererRef.current.setSize(container.clientWidth, container.clientHeight)

  },[isMobile, windowSize.innerWidth])

  return <div ref={containerRef} className={`${classname} mix-blend-darken`}></div>
}

export default Globe
