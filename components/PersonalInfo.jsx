import React, { useMemo } from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const PersonalInfo = () => {
  const currentAge = useMemo(() => {
    const now = moment();
    const birthday = moment("1999-03-02T00:00:00-04:00");
    return Math.floor(moment.duration(now.diff(birthday)).asYears());
  }, []);

  const socialInfo = [
    {
      name: "Mail: mnperez99@gmail.com",
      link: "mailto:mnperez99@gmail.com",
      icon: faEnvelope,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/marceloperez99",
      icon: faLinkedin,
    },
    {
      name: "GitHub",
      link: "https://github.com/marzeperez99",
      icon: faGithub,
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="flex-1 container">
        <span className="flow-root text-4xl text-center pt-16 font-bold">
          Marcelo Perez
        </span>
        <p className="flow-root italic text-lg text-center pb-8 pt-4">
          Full-Stack Developer
        </p>
        <img
          className="flow-root mx-auto w-5/12 mb-8 md:w-1/6"
          src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Blue03&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light"
        />
        <p className="mx-auto text-justify w-10/12 md:w-4/6  md:text-center text-base text-gray-700">
          {currentAge} year old Software Engineer based on Paraguay. Tech
          enthusiast trying to keep up with the industry. Currently working as a
          Full-Stack Developer, focusing on Hybrid Mobile Development with React
          Native
        </p>

        <div className="w-10/12 md:w-1/4 mx-auto pt-4 text-center md:text-left">
          <span className="text-lg font-mono font-bold">Contact Info</span>
          {socialInfo.map((item) => (
            <div key={item.name} className="flex">
              <a
                href={item.link}
                target="_blank"
                className="flex justify-center items-center hover:text-blue-600"
              >
                <FontAwesomeIcon className="mr-3 flex" icon={item.icon} />
                <span className="flex-1 ">{item.name}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
