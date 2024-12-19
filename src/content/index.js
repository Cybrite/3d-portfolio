export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "Energize",
    desc: "Energize is an online web appl mae using Next15 and React19 , and utilizes Sanity CMS to manage content.",
    subdesc:
      "energize is a unique Software-as-a-Service app with Next and Sanity CMS as a full stack project.",
    href: "https://energize-self.vercel.app/",
    texture: "/textures/project/energize.mp4",
    logo: "/assets/energize.jpeg",
    logoStyle: {
      backgroundColor: "#FF1493",
      border: "0.2px solid #FF69B4",
      boxShadow: "0px 0px 60px 0px #FFB6C1",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Next",
        path: "assets/Next.png",
      },
      {
        id: 3,
        name: "Tailwindcss",
        path: "assets/tailwindcss.png",
      },
    ],
  },
  {
    title: "FindMusic - education platform",
    desc: "FindMusic is a comprehensive online learning platform that provides a range of online courses and educational resources. It offers a seamless and intuitive learning experience for students.",
    subdesc:
      "Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.",
    href: "https://find-music-nu.vercel.app/",
    texture: "/textures/project/findMusic.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/Next.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "AceternityUI",
        path: "/assets/Aceternity.png",
      },
    ],
  },
  {
    title: "UsePopCorn - movie rating platform",
    desc: "UsePopCorn is a comprehensive online movie rating platform that provides a range of movies and TV shows. It offers a seamless and intuitive rating experience for users.",
    subdesc:
      "Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.",
    href: "https://use-popcorn-umber.vercel.app/",
    texture: "/textures/project/UsePopcorn.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "CSS",
        path: "assets/css.png",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/JavaScript.png",
      },
    ],
  },
  {
    title: "KickStart - a funding platform",
    desc: "An innovative Funding Platform using BlockChain, Solidity, and Web3.0. and Next.js, to provide a secure and transparent way for users to raise funds for their projects.",
    subdesc:
      "Built as a unique software service app for startups and buisnesses to get funding in reliable ways and securely.",
    href: "https://github.com/Cybrite/CrowdCoin",
    texture: "/textures/project/FreeWill.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/Next.png",
      },
      {
        id: 2,
        name: "Solidity",
        path: "assets/Solidity.png",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/JavaScript.png",
      },
      {
        id: 4,
        name: "ReactSemantic UI",
        path: "/assets/ReactSemantic.png",
      },
    ],
  },
  {
    title: "Eat-n-Split - a bill manager",
    desc: "Eat-n-Split is a comprehensive online bill manager that provides a range of online bill management tools. It offers a seamless and intuitive bill management experience for users.",
    subdesc:
      "eat-n-split is a unique Software-as-a-Service app with React, vanilla CSS as a beginner project i made learning reactjs",
    href: "http://Cybrite.github.io/eat-n-split",
    texture: "/textures/project/eat-n-split.mp4",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "CSS",
        path: "assets/css.png",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/JavaScript.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "GDSC NIT Rourkela",
    pos: "Web Developer",
    duration: "2024 - Present",
    title:
      "Joined GDSC NITR to find and grow with people who are passionate about tech. I have been able to learn a lot from the members of GDSC NITR, currently Really active in Club pursuing my passion in Development.",
    icon: "/assets/GDSC.png",
    animation: "victory",
  },
  {
    id: 2,
    name: "NIT RourKela",
    pos: "Engineering Student",
    duration: "2023 - current",
    title:
      "Joined NIT Rourkela in Monsoon of 2023 to pursue a Bachelor of Technology in Chemical Engineering, met lot of peers and got a interest in Tech and Coding. Currently a Second Year Student.",
    icon: "/assets/NITR.png",
    animation: "clapping",
  },
  {
    id: 3,
    name: "NJMS",
    pos: "Student",
    duration: "2009 - 2021",
    title:
      "Did my High-School from Nav jeevan Mission School in Deoria,UP, and Cracked JEE from their to get a Seat in NIT",
    icon: "/assets/NJMS logo.jpeg",
    animation: "salute",
  },
];
