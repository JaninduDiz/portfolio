import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { EXPERIENCES } from "../constants";
import "./css/Experience.css";

function Experience() {
  return (
    <div className="experiences-container">
      <h1 className="experiences-title">My Experiences</h1>
      <VerticalTimeline lineColor="#3e497a" className="vertical-timeline">
        {EXPERIENCES.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: experience.bgColor, color: "#fff" }}
            date={experience.dateText}
            dateClassName="date-text"
            iconStyle={{
              background: experience.bgColor,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              alignContent: "center",
              flexDirection: "column",
            }}
            icon={
              <img
                src={experience.icon}
                alt="Icon"
                width={50}
                height={50}
                style={{ borderRadius: "50%" }}
              />
            }
            contentArrowStyle={{
              borderRight: "7px solid " + experience.bgColor,
            }}
          >
            <h3 className="vertical-timeline-element-title">
              {experience.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {experience.subtitle}
            </h4>
            <p className="vertical-timeline-element-description">
              {experience.workDescription}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
