import React, { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";

const About = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("harshtanishq2002@gmail.com");
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <section className="my-20 c-space">
      <div
        className="grid h-full grid-cols-1 gap-5 xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2"
        id="about"
      >
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hello there, this is Harsh.</p>
              <p className="grid-subtext">
                With a passion for development, i am have and experience in web
                development especially frontend.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/techstack.jpeg"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I work with React.js, Next.js, Tailwind, and familiar with
                various UI libraries,and i explore smart contracts with Solidity
                and Ethereum.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="w-full rounded-3xl sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 22.260424,
                    lng: 84.853584,
                    text: "I'm Here!",
                    color: "red",
                    size: 500,
                  },
                ]}
                markers={[
                  {
                    id: "pointer",
                    coordinates: [22.260424, 84.853584],
                    value: 1,
                  },
                ]}
                markerOptions={{
                  color: () => "red",
                  radiusScale: 1,
                }}
              />
            </div>
            <div>
              <p className="grid-headtext">I develop from Rourkela,Odisha.</p>
              <p className="grid-subtext">
                I am pursuing my B.Tech from NIT Rourkela.
              </p>
              <Button
                name="Get in touch"
                isBeam
                containerClass="mt-10 w-full"
              />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My passion for coding</p>
              <p className="grid-subtext">
                I love being able to create and design things i want and able to
                solve problems through development, It is growing on me.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="text-center grid-subtext">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={isCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="font-medium text-white lg:text-2xl md:text-xl text-gray_gradient">
                  {isCopied ? "Copied" : "harshtanishq2002@gmail.com"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
