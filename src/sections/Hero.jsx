import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/canvasLoader";

const Hero = () => {
  return (
    <section className="relative flex-col w-full min-h-screen">
      <div className="flex flex-col w-full gap-3 mx-auto mt-20 sm:mt-36 c-space">
        <p className="text-2xl font-medium text-center text-white sm:text-3xl font-generalsans">
          Hi, I am Harsh!<span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          To the stars, Through Hardships
        </p>
      </div>

      <div className="absolute inset-0 w-full h-full">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HackerRoom scale={0.08} position={[0, 0, 0]} rotation={[0, Math.PI, 0]} />

            <ambientLight intensity={0.5} />
            <directionalLight position={[10,10,10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
