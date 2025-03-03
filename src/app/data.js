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
    description: "Track your carbon footprint",
    technology: "Machine Learning, YOLOv8, Roboflow, React Native",

    demoLink: "https://ecotracker.example.com",
  },
  {
    id: 2,
    name: "RESEARCH MANAGEMENT SYSTEM - WEB APPLICATION ",
    description: "Digital art showcase platform",
    technology: " MongoDB, Express JS, React JS, Node JS, Bootstrap ",
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
    demoLink: "https://github.com/Dilsha-thathsarani/vigorous-venus",
  },
  {
    id: 5,
    name: "RecipeFinder",
    description: "Discover new recipes",
    date: "2022-07-12",
    demoLink: "https://recipefinder.example.com",
  },
  {
    id: 6,
    name: "JourneyLogger",
    description: "Log your travels",
    date: "2022-10-01",
    demoLink: "https://journeylogger.example.com",
  },
  {
    id: 7,
    name: "StudyBuddy",
    description: "Collaborative learning platform",
    date: "2022-04-18",
    demoLink: "https://studybuddy.example.com",
  },
  {
    id: 8,
    name: "TechTalk",
    description: "Tech news aggregator",
    date: "2022-11-05",
    demoLink: "https://techtalk.example.com",
  },
  {
    id: 9,
    name: "FitTrack",
    description: "Fitness and workout tracker",
    date: "2022-03-22",
    demoLink: "https://fittrack.example.com",
  },
  {
    id: 10,
    name: "MindfulMoments",
    description: "Meditation and mindfulness app",
    date: "2022-02-14",
    demoLink: "https://mindfulmoments.example.com",
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

export const experiences = [
  {
    title: "Public Pulse",
    company_name: "Flutter, React JS, Firebase, Python",
    iconBg: "#383E56",
    date: "June 2024 - Present",
    points: [
      "Developed a decentralized app using Web3 technology to enable secure and anonymous voting on policy opinions.",
      "Wrote and deployed smart contracts to manage voting and data transparency on the blockchain",
      "Created an intuitive UI with React for seamless user interaction and engagement.",
    ],
  },
  {
    title: "FoodDel ",
    company_name: "MERN Stack",
    iconBg: "#E6DEDD",
    date: "Feb 2024 - May 2024",
    points: [
      "Developed a responsive and user-friendly interface using React and Tailwind CSS.",
      "Built RESTful APIs with Node.js and Express.js to handle user data, product listings, and orders",
      "Used MongoDB to securely manage user profiles, product information, and order history",
      "Implemented secure user authentication and authorization with JWT.",
    ],
  },
  {
    title: "Ceylon Marketplace",
    company_name: "Flutter, NodeJS, MongoDB, Express JS",
    iconBg: "#383E56",
    date: "June 2024 - Nov 2024",
    points: [
      "Developed a cross-platform mobile app with Flutter for a smooth shopping experience.",
      "Focused on an intuitive, user-friendly interface and easy navigation.",
      "Integrated product management, user profiles, and secure payment features.",
    ],
  },
  {
    title: "Predicting Weather Conditions in Sri Lanka",
    company_name: "Python, Pandas, Scikit-learn, Matplotlib",
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Jan 2025",
    points: [
      "Developed a machine learning model to predict weather conditions (Sunny, Rainy, Cloudy) using historical weather data from 30 Sri Lankan cities (2010–2023).",
      "Conducted data preprocessing and exploratory data analysis to identify key meteorological patterns.",
      "Trained and evaluated Logistic Regression and Random Forest algorithms to classify future weather conditions with high accuracy.",
      "Visualized climate trends and prediction results to enable better planning for weather-dependent activities.",
    ],
  },
];
