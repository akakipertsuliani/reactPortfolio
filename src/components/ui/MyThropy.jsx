import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'

export default function Model(props) {
  const { nodes, materials } = useGLTF("src/components/ui/textures/myThropy.gltf")
  const meshRef = useRef()

  useEffect(() => {
    if (meshRef.current) {
      gsap.timeline({
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      }).to(meshRef.current.position, {
        y: "+=0.5",
        duration: 1.5
      })
    }
  }, []);

  const controlPosition = () => {
		const windowWidth = window.innerWidth;
		if (windowWidth < 1024 && windowWidth > 768) {
			return [[-2, 0.5, 1], 0.8];
		} else if (windowWidth < 768) {
			return [[-1, 0.5, 1], 0.4];
		}
		
		return [[-4, -1, 1], 1];
	}

  return (
    <group {...props} dispose={null} position={controlPosition()[0]}>
      <group ref={meshRef} rotation={[-Math.PI / 2, 0, controlPosition()[1]]} scale={15}>
        <mesh geometry={nodes.Mesh_0_1.geometry} material={materials.Gold} />
        <mesh geometry={nodes.Mesh_0_2.geometry} material={materials['Material.001']} />
      </group>
    </group>
  )
}

useGLTF.preload("src/components/ui/textures/myThropy.gltf")
