import React, {Suspense} from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, useGLTF} from "@react-three/drei";

import CanvasLoader from '../Loader';

const Earth = () => {
  const earth = useGLTF('./death_star/death_star_-_star_wars.glb');
  return (
    <mesh>

      <hemisphereLight intensity={0.15}
                       groundColor="black"/>
      <directionalLight position={[3, 2, 2]} intensity={3} castShadow/>
      <spotLight position={[-20, 20, 10]}
                 angle={0.12}
                 penumbra={1}
                 intensity={2}
                 castShadow
                 shadow-mapSize={1024}
      />
      <primitive
        object={earth.scene}
        scale={0.04}
        position-y={0}
        rotation-y={0}
      />
    </mesh>
  )
}
const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='emand'
      gl={{preserveDrawingBuffer: true}}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [4, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth/>
      </Suspense>
    </Canvas>
  )
}
export default EarthCanvas;