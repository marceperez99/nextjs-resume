import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJava,
  faJs,
  faReact,
  faDocker,
  faNode,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
const TechnologyBadge = ({ title, icon }) => {
  return (
    <div>
      <FontAwesomeIcon color="white" icon={icon} size={"4x"} fixedWidth />
    </div>
  );
};

const Stack = () => {
  const tech = [
    { title: "javascript", icon: faJs, color: "#F7DF1C" },
    { title: "python", icon: faPython, color: "#2396ED" },
    { title: "java", icon: faJava, color: "#EC2024" },
    { title: "react", icon: faReact, color: "#00D8FF" },
    { title: "node", icon: faNode, color: "#8CC401" },
    { title: "docker", icon: faDocker, color: "#2396ED" },
  ];

  return (
    <div className="flex flex-col w-full">
      <div className="flex pt-16 w-full justify-center">
        <span className="text-center text-2xl pb-16 md:pb-0 md:text-5xl font-semibold">
          My Stack
        </span>
      </div>
      <div class="flex-1 grid grid-cols-2 md:grid-cols-3 grid-flow-row content-around gap-8 justify-items-center">
        {tech.map((t) => (
          <div
            key={t.title}
            style={{ backgroundColor: t.color }}
            className="  rounded-2xl p-4 md:p-10 hover:shadow-lg transform hover:scale-110 duration-75"
          >
            <TechnologyBadge title={t.title} icon={t.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stack;
