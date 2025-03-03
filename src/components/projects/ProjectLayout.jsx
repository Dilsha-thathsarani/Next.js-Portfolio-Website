import { motion } from "framer-motion";
import Link from "next/link";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLink = motion(Link);
const ProjectLayout = ({
  name,
  description,
  technology,
  date,
  demoLink,
  image,
}) => {
  return (
    <div className="relative flex flex-col items-start w-full rounded-xl overflow-hidden p-4 md:p-6 bg-transparent border border-[#FEFE5B]/20 backdrop-blur-sm shadow-lg transition-transform hover:scale-[1.02]">
      {/* Golden accent line at top */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#FEFE5B]"></div>

      {/* Project Image with GitHub icon overlay */}
      <div className="w-full h-[180px] md:h-[220px] rounded-lg overflow-hidden bg-[#2a2a2a]/50 relative">
        <img src={image} alt={name} className="w-full h-full object-cover" />

        {/* GitHub icon overlay */}
        <Link
          href={demoLink}
          target="_blank"
          className="absolute top-3 right-3 w-10 h-10 bg-black/60 rounded-full flex items-center justify-center transition-transform hover:scale-110"
          onClick={(e) => e.stopPropagation()}
        >
          <svg
            className="w-6 h-6 text-[#e1e1e1]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.163 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.934.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.16 22 16.42 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
        </Link>
      </div>

      {/* Project Info */}
      <ProjectLink
        variants={item}
        href={demoLink}
        target={"_blank"}
        className="mt-4 flex flex-col items-start w-full"
      >
        <h2 className="text-[#e1e1e1] text-lg md:text-xl font-semibold">
          {name}
        </h2>
        <p className="text-[#737373] text-sm md:text-base mt-2">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {technology?.split(",").map((tech, index) => (
            <span
              key={index}
              className="text-xs md:text-sm px-2 py-1 rounded-md bg-[#333333]/50 text-[#FEFE5B]"
            >
              {tech.trim()}
            </span>
          ))}
        </div>
      </ProjectLink>
    </div>
  );
};

export default ProjectLayout;
