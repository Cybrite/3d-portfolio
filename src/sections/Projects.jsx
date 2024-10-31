import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";

import { myProjects } from "../content/index.js";
import CanvasLoader from "../components/canvasLoader.jsx";
import DemoComputer from "../components/DemoComputer.jsx";

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) =>
      direction === "previous"
        ? (prevIndex === 0 ? projectCount : prevIndex) - 1
        : (prevIndex + 1) % projectCount
    );
  };

  useGSAP(() => {
    gsap.fromTo(
      `.animatedText`,
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.2, ease: "power2.inOut" }
    );
  }, [selectedProjectIndex]);

  const { spotlight, logoStyle, logo, title, desc, subdesc, tags, href, texture } = myProjects[selectedProjectIndex];

  return (
    <section className="my-20 c-space">
      <p className="head-text" id="work">My Projects</p>

      <div className="grid w-full grid-cols-1 gap-5 mt-12 lg:grid-cols-2">
        <div className="relative flex flex-col gap-5 px-5 py-10 shadow-2xl sm:p-10 shadow-black-200">
          <div className="absolute top-0 right-0">
            <img src={spotlight} alt="spotlight" className="object-cover w-full h-96 rounded-xl" />
          </div>

          <div className="p-3 rounded-lg backdrop-filter backdrop-blur-3xl w-fit" style={logoStyle}>
            <img className="w-10 h-10 shadow-sm" src={logo} alt="logo" />
          </div>

          <div className="flex flex-col gap-5 my-5 text-white-600">
            <p className="text-2xl font-semibold text-white animatedText">{title}</p>
            <p className="animatedText">{desc}</p>
            <p className="animatedText">{subdesc}</p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              {tags.map(({ path, name }, index) => (
                <div key={index} className="tech-logo">
                  <img src={path} alt={name} />
                </div>
              ))}
            </div>

            <a className="flex items-center gap-2 cursor-pointer text-white-600" href={href} target="_blank" rel="noreferrer">
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
          </div>

          <div className="flex items-center justify-between mt-7">
            <button className="arrow-btn" onClick={() => handleNavigation("previous")}>
              <img src="/assets/left-arrow.png" alt="left arrow" />
            </button>

            <button className="arrow-btn" onClick={() => handleNavigation("next")}>
              <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="border rounded-lg border-black-300 bg-black-200 h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
