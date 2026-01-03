"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, MeshDistortMaterial, Sphere } from "@react-three/drei"
import type * as THREE from "three"

function AnimatedRing() {
  const ringRef = useRef<THREE.Mesh>(null)
  const particlesRef = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.getElapsedTime() * 0.3
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.z = -state.clock.getElapsedTime() * 0.15
    }
  })

  // Create particles for sparks
  const particleCount = 50
  const positions = new Float32Array(particleCount * 3)
  const colors = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount; i++) {
    const angle = (i / particleCount) * Math.PI * 2
    const radius = 2.5 + Math.random() * 0.3
    positions[i * 3] = Math.cos(angle) * radius
    positions[i * 3 + 1] = Math.sin(angle) * radius
    positions[i * 3 + 2] = (Math.random() - 0.5) * 0.2

    // Cyan to magenta gradient
    const t = i / particleCount
    colors[i * 3] = t // R
    colors[i * 3 + 1] = 0.94 * (1 - t) // G
    colors[i * 3 + 2] = 1 // B
  }

  return (
    <group>
      {/* Main rotating ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[2.5, 0.08, 16, 100]} />
        <meshStandardMaterial color="#00F0FF" emissive="#00F0FF" emissiveIntensity={2} toneMapped={false} />
      </mesh>

      {/* Inner ring */}
      <mesh rotation={[0, 0, Math.PI / 4]}>
        <torusGeometry args={[2.3, 0.05, 16, 100]} />
        <meshStandardMaterial color="#FF00E5" emissive="#FF00E5" emissiveIntensity={1.5} toneMapped={false} />
      </mesh>

      {/* Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={particleCount} array={colors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.1} vertexColors sizeAttenuation toneMapped={false} />
      </points>

      {/* Ambient glow sphere */}
      <Sphere args={[2, 32, 32]}>
        <MeshDistortMaterial
          color="#B84FFF"
          emissive="#B84FFF"
          emissiveIntensity={0.3}
          transparent
          opacity={0.1}
          distort={0.3}
          speed={2}
          toneMapped={false}
        />
      </Sphere>

      {/* Lighting */}
      <pointLight position={[0, 0, 0]} intensity={2} color="#00F0FF" />
      <ambientLight intensity={0.5} />
    </group>
  )
}

export function NeonRing3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <AnimatedRing />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}
