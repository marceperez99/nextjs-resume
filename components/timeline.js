import React from "react";
import styles from "./timeline.module.css";

const TimeLine = ({ list, leftTimeLine, rightTimeline }) => {
  return (
    <div className="px-7 flex-col">
      {list.map((item, i) => (
        <TimeLineItem
          key={item.title}
          link={item.link}
          item={item}
          index={i + 1}
          leftTimeLine={leftTimeLine}
          rightTimeline={rightTimeline}
        />
      ))}
    </div>
  );
};

const TimeLineItem = ({ item, index, leftTimeLine, rightTimeline, link }) => {
  if (leftTimeLine)
    return (
      <div className={styles.containerLeft}>
        <span className={styles.dot}>{index}</span>
        <span className="w-28 text-sm text-gray-600">{item.time}</span>
        <div className="flex flex-1 flex-col">
          <span className=" px-4 flex-1 text-xl font-bold">{item.title}</span>
          <span className=" px-4 flex-1 text-gray-600">{item.subTitle}</span>
        </div>
      </div>
    );
  if (rightTimeline)
    return (
      <div className={styles.containerRight}>
        <div className="flex flex-1 flex-col">
          <a
            className=" px-4 flex-1 text-xl font-bold text-right"
            href={link}
            target="_blank"
          >
            {item.title}
          </a>
          {item.subTitle && (
            <span className=" px-4 flex-1 text-gray-600 text-right">
              {item.subTitle}
            </span>
          )}
        </div>
        {item.time && (
          <span className="w-28 text-sm text-gray-600 text-right">
            {item.time}
          </span>
        )}
        <span className={styles.dotRight}>{index}</span>
      </div>
    );
};
export default TimeLine;
