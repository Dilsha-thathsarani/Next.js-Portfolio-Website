/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "MANGOWISE - MOBILE APPLICATION",
    description:
      "This is the our final year research project. Our main objective is to identify and analyze challenges faced in mango cultivation to maximize profits. Int this app we provide facilities to determining the optimal timing for budding, identifying suitable varieties, managing diseases, proper fertilization, and knowledge dissemination gaps, with the goal of providing recommendations for improving cultivation practices and profitability.",
    technology:
      "React Native,Node Js,MongoDB,Express Js,YOLOv8,Machine Learning,Google Cloud",
    image: "/images/projects/ee.jpeg",
    demoLink: "https://ecotracker.example.com",
  },
  {
    id: 2,
    name: "RESEARCH MANAGEMENT SYSTEM - WEB APPLICATION ",
    description:
      "The research management tool is a new self-contained software product which will be produced by the project team in order to overcome the problems that have occurred due to the current manual system. This tool will provide an easy access to the system and it will contain user friendly functions with attractive interfaces. The system will give better options for the problem of handling large scale of physical research file system, for the errors occurring in calculations and all the other required tasks that has been specified by the student.",
    technology:
      " MongoDB, Express JS, React JS, Node JS, Bootstrap, Material-UI ",
    image: "/images/projects/rmt.png",
    demoLink: "https://github.com/Dilsha-thathsarani/Research-Management-Tool",
  },
  {
    id: 3,
    name: "TICKET RESERVATION - ENTERPRISE APPLICATION ",
    description: "Plan and track expenses",
    technology: " C#, Java, React JS, Android Studio",
    demoLink: "https://github.com/Dilsha-thathsarani/Ticket-Reservation",
  },
  {
    id: 4,
    name: "AQTRO - WEB APPLICATION ",
    description: "Monitor heart rate zones",
    technology: " Astro, Typescript, Supabase, Drizzle ORM ",
    image: "/images/projects/aqtro.png",
    demoLink: "https://github.com/Dilsha-thathsarani/vigorous-venus",
  },
  {
    id: 5,
    name: "AQTRO - WEB APPLICATION ",
    description: "Monitor heart rate zones",
    technology: " Astro, Typescript, Supabase, Drizzle ORM ",
    image: "/images/projects/rmt.png",
    demoLink: "https://github.com/Dilsha-thathsarani/vigorous-venus",
  },
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Work",
    link: "/work",
    icon: "education",
    newTab: false,
  },
  {
    label: "Github",
    link: "https://github.com/Dilsha-thathsarani",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/dilsha-thathsarani-574638217/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "X",
    link: "https://www.x.com/code_bucks",
    icon: "twitter",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/Dilsha_Thathsarani_-_Associate_Software_Engineer.pdf",
    icon: "resume",
    newTab: true,
  },
];
