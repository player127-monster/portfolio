import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../models/Island';
import Sky from '../models/Sky';
import Plane from '../models/Plane';
import Bird from '../models/Bird';
import HomeInfo from '../components/HomeInfo';

export default function Home() {

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage,setCurrentStage] = useState(1);

  const adjustPlaneScreenSize=()=>{
    let screenScale, screenPosition;

    if(window.innerWidth<768){
      screenScale=[1.5,1.5,1.5];
      screenPosition=[0,-1.5,0];
    }
    else{
      screenScale=[3,3,3];
      screenPosition=[0,-3,-4];
    }
    return [screenScale,screenPosition];
  };

  
  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale=[0.9, 0.9, 0.9];
      screenPosition=[0, -0.6, -43.4];
    } else {
      screenScale=[1, 1, 1];
      screenPosition=[0, -4, -43.4];
    }

    return [screenScale,screenPosition];
  };


  const [islandScale,islandPosition]=  adjustIslandForScreenSize();


  const [planeScale,planePosition]=adjustPlaneScreenSize();

  return (
    <div className='w-full h-screen relative'>

      <div className='absolute top-28 left-0 right-0 z-10 flex justify-center items-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent
          ${isRotating ?"cursor-grabbing":"cursor-grab"}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
          <hemisphereLight skyColor='#b1eff' groundColor='#000000' intensity={1} />

          <Bird />
          <Sky isRotating={isRotating}/>
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            position={islandPosition}
            setCurrentStage={setCurrentStage}
            scale={islandScale}
            rotation={[0.1, 4.7077, 0]}
          />
          
          <Plane 
          isRotating={isRotating} 
          position={planePosition} 
          rotation={[0,20.1,0]}
          scale={planeScale}
          />
          
        </Suspense>
      </Canvas>
    </div>
  );
}
