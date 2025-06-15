import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

import birdScene from '../assets/3d/bird.glb';
import { useFrame } from "@react-three/fiber";

const Bird= () =>{

    const birdRef=useRef();

    const {scene,animations} =useGLTF(birdScene);

    const {actions} = useAnimations(animations,birdRef);

    useEffect(()=>{
        actions["Take 001"].play();
    },[]);

    const hasLanded = useRef(false);

    useFrame(({ clock }) => {
      const bird = birdRef.current;
    
      if (hasLanded.current) return; // Stop animation after landing
    
      bird.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;
    
      const stopX = 5;
      const stopZ = -5;
    
      if (bird.position.x < stopX) {
        bird.position.x += 0.01;
      }
    
      if (bird.position.z > stopZ) {
        bird.position.z -= 0.01;
      }
    
      // Check if bird has landed
      if (bird.position.x >= stopX && bird.position.z <= stopZ) {
        hasLanded.current = true;
      }
    });
    

    return(
        <mesh  position={[-5,2,1]} ref={birdRef} scale={[0.003,0.003,0.003]}>
            <primitive object={scene} />
        </mesh>
    );
};

export default Bird;