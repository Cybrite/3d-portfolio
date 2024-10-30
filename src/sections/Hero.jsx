import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/canvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../content/index.js";
import { Leva, useControls } from "leva";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";
// use Leva this to import leva and get console to adjust controls of the objects

const Hero = () => {
  // const controls = useControls("HackerRoom", {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotateX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotateY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotateZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   scaleX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   scaleY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   scaleZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  // });

  const isSmall = useMediaQuery({ maxWidth: 400 });
  const isMobile = useMediaQuery({ maxWidth: 650 });
  const isTablet = useMediaQuery({ minWidth: 650, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="relative flex-col w-full min-h-screen" id='home'>
      <div className="flex flex-col w-full gap-3 mx-auto mt-20 sm:mt-36 c-space">
        <p className="text-2xl font-medium text-center text-white sm:text-3xl font-generalsans">
          Hi, I am Harsh!<span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          I can code your Dreams.
        </p>
      </div>

      <div className="absolute inset-0 w-full h-full">
        {/*<Leva />*/}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                position={sizes.deskPosition}
                rotation={[0, -Math.PI, 0]}
                scale={sizes.deskScale}
              />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>

            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute left-0 right-0 z-10 w-full bottom-7 c-space">
        <a href='#about' className="w-fit">
          <Button name='Lets work Together !' isBeam containerClass='sm:w-fit w-full sm:min-w-96'/>
        </a>
      </div>
  
    </section>
  );
};

export default Hero;
