import React from "react";
import TimeLine from "./timeline";
import education from "../content/education.json";
const EducationInfo = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <span className="flex px-16 pt-16 text-5xl font-semibold text-right">
        Educational Background
      </span>
      <div className="flex-1  w-10/12 ">
        <div className="flex items-center h-full my-auto">
          <div className="hidden md:block">
            <img width="200" height="200" src={"/images/education.svg"} />
          </div>
          <div className="flex-1 p-5 ">
            <TimeLine
              leftTimeLine
              list={education.map((item) => ({
                title: item.study,
                subTitle: item.school,
                time: item.period,
              }))}
            />
          </div>
        </div>
      </div>
      <div className="flex pb-8">
        <p className="text-gray-600 text-center pb-5 pt-10">
          This site was built with Next.JS. Checkout the source code at{" "}
          <a
            href="https://github.com/marzeperez99/nextjs-resume"
            className="text-blue-800 font-bold"
          >
            Github
          </a>
        </p>
      </div>
    </div>
  );
};

export default EducationInfo;
