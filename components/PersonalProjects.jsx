import TimeLine from "../components/timeline";
import React from "react";
import projects from "../content/projects.json";
const PersonalProjects = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <span className="flex px-16 pt-16 text-5xl font-semibold text-right">
        My Projects
      </span>
      <div className="flex-1 w-10/12 ">
        <div className="flex items-center h-full my-auto">
          <div className="flex-1 p-5">
            <TimeLine
              rightTimeline
              list={projects.map((item) => ({
                title: item.name,
                link: item.link,
                subTitle: item.description,
              }))}
            />
          </div>
          <div className="hidden md:block">
            <img
              className="mx-auto"
              width="200"
              height="200"
              src={"/images/projects.svg"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PersonalProjects;
