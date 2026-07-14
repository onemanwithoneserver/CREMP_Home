import { useEffect, useRef, useMemo } from 'react'
import * as THREE from 'three'

export default function ParticleField({ className = '' }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const frameRef = useRef<number>(0)

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return

    const container = containerRef.current
    const width = container.clientWidth
    const height = container.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100)
    camera.position.z = 30

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: 'low-power' })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    const particleCount = 60
    const positions = new Float32Array(particleCount * 3)
    const velocities = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
      velocities[i * 3] = (Math.random() - 0.5) * 0.005
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.008
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.003
      sizes[i] = Math.random() * 2 + 0.5
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

    const material = new THREE.PointsMaterial({
      color: new THREE.Color('#C79A17'),
      size: 0.08,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    const shapeMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#6B82B5'),
      transparent: true,
      opacity: 0.04,
      wireframe: true,
    })

    const shapes: THREE.Mesh[] = []
    for (let i = 0; i < 5; i++) {
      const geoType = i % 3
      let geo: THREE.BufferGeometry
      if (geoType === 0) geo = new THREE.IcosahedronGeometry(1.5, 0)
      else if (geoType === 1) geo = new THREE.OctahedronGeometry(1.2, 0)
      else geo = new THREE.TetrahedronGeometry(1, 0)

      const mesh = new THREE.Mesh(geo, shapeMaterial.clone())
      mesh.position.set(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 15 - 5
      )
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0)
      scene.add(mesh)
      shapes.push(mesh)
    }

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate)

      const posAttr = geometry.attributes.position as THREE.BufferAttribute
      for (let i = 0; i < particleCount; i++) {
        posAttr.array[i * 3] += velocities[i * 3]
        posAttr.array[i * 3 + 1] += velocities[i * 3 + 1]
        posAttr.array[i * 3 + 2] += velocities[i * 3 + 2]

        if (Math.abs(posAttr.array[i * 3] as number) > 25) velocities[i * 3] *= -1
        if (Math.abs(posAttr.array[i * 3 + 1] as number) > 15) velocities[i * 3 + 1] *= -1
        if (Math.abs(posAttr.array[i * 3 + 2] as number) > 10) velocities[i * 3 + 2] *= -1
      }
      posAttr.needsUpdate = true

      shapes.forEach((shape, i) => {
        shape.rotation.x += 0.001 * (i + 1)
        shape.rotation.y += 0.0008 * (i + 1)
        shape.position.y += Math.sin(Date.now() * 0.0003 + i) * 0.003
      })

      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(frameRef.current)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
      shapes.forEach((s) => {
        s.geometry.dispose()
        ;(s.material as THREE.Material).dispose()
      })
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [prefersReducedMotion])

  if (prefersReducedMotion) return null

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      aria-hidden="true"
    />
  )
}
