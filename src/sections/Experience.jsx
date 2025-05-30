import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState, useRef } from "react";
import { workExperiences } from "../content/index.js"; // Import workExperiences
import CanvasLoader from "../components/canvasLoader.jsx";
import { OrbitControls } from "@react-three/drei";
import Developer from "../components/Developer.jsx";

const Experience = () => {
  const [animationName, setAnimationName] = useState("idle");
  const workExperiencesRef = useRef(workExperiences);
  return (
    <section className="my-20 c-space">
      <div className="w-full text-white-600">
        <h3 className="head-text">My Journey so Far..</h3>
        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penubra={1} />
              <directionalLight position={[10, 10, 10]} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Suspense fallback={<CanvasLoader />}>
                <Developer
                  position-y={-3}
                  scale={3}
                  animationName={animationName}
                />
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiencesRef.current.map((item, index) => ( 
                <div
                  key={index}
                  className="work-content_container group"
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() =>
                    setAnimationName(item.animation.toLowerCase())
                  }
                  onPointerOut={() => setAnimationName("idle")}
                >
                  <div className="flex flex-col items-center justify-start h-full py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="mb-5 text-sm">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="transition-all duration-500 ease-in-out group-hover:text-white">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;