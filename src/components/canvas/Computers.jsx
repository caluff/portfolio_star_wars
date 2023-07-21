import {Suspense, useEffect, useState} from "react";
import {Canvas, useLoader, useFrame} from "@react-three/fiber";
import {OrbitControls, Preload, useGLTF} from "@react-three/drei";
import {AnimationMixer} from "three";
import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
  const {scene, animations} = useGLTF('./r2-d2_animated/scene.gltf');
  const [mixer] = useState(() => new AnimationMixer(scene));

  useEffect(() => {
    const action = mixer.clipAction(animations[0]);
    action.play();
    return () => mixer.stopAllAction();
  }, [animations, mixer]);

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  return (
    <mesh>
      <hemisphereLight intensity={0.15}
                       groundColor="black"/>
      <pointLight intensity={1}/>
      <spotLight position={[-20, 50, 10]}
                 angle={0.12}
                 penumbra={1}
                 intensity={1}
                 castShadow
                 shadow-mapSize={1024}
      />
      <primitive object={scene}
                 scale={isMobile ? 2 : 3.2}
                 position={isMobile ? [0, -2.25, -0.5] : [-1, -1.8, -0.5]}
                 rotation={[-0.01, -0.0, -0.005]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{position: [1.2, 3, 0]}}
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          enableZoom={false}
          autoRotate
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}
export default ComputersCanvas;
