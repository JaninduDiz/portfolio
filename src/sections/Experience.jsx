import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { EXPERIENCES, EDUCATION } from "../constants";
import "./css/Experience.css";

function Experience() {
  return (
    <div className="experiences-wrapper">
      <h1 className="experiences-title">My Journey</h1>

      <div className="timeline-columns">
        {/* Experience Timeline */}
        <div className="timeline-section">
          <h2 className="section-title">Experience</h2>
          <VerticalTimeline lineColor="#3e497a" layout="1-column-left">
            {EXPERIENCES.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element custom-timeline-box"
                iconStyle={{
                  background: experience.bgColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
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
                contentStyle={{
                  background: experience.bgColor,
                  color: "#fff",
                }}
              >
                <h3 className="vertical-timeline-element-title">
                  {experience.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {`${experience.subtitle} (${experience.dateText})`}
                </h4>

                <ul className="vertical-timeline-element-description">
                  {experience.workDescription.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        {/* Education Timeline */}
        <div className="timeline-section">
          <h2 className="section-title">Education</h2>
          <VerticalTimeline lineColor="#3e497a" layout="1-column-left">
            {EDUCATION.map((education, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element custom-timeline-box"
                iconStyle={{
                  background: education.bgColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                icon={
                  <img
                    src={education.icon}
                    alt="Icon"
                    width={50}
                    height={50}
                    style={{ borderRadius: "50%" }}
                  />
                }
                contentArrowStyle={{
                  borderRight: "7px solid " + education.bgColor,
                }}
                contentStyle={{
                  background: education.bgColor,
                  color: "#fff",
                }}
              >
                <h3 className="vertical-timeline-element-title">
                  {education.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {`${education.subtitle} (${education.dateText})`}
                </h4>
                <ul className="vertical-timeline-element-description">
                  {education.workDescription.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
}

export default Experience;
