import React from "react";
import "./css/Skills.css";
import { SKILLS } from "../constants";
import ReactMarkdown from "react-markdown";

const styles = {
  iconStyle: {
    height: 75,
    width: 75,
    margin: 10,
    marginBottom: 0,
  },
  introTextContainer: {
    whiteSpace: "pre-wrap",
  },
};

const renderSkillsIntro = (intro) => (
  <h4 style={styles.introTextContainer}>
    <ReactMarkdown children={intro} />
  </h4>
);

function Skills() {
  return (
    <div className="skills-wrapper">
      <h1 className="skills-title">Skills</h1>

      <div className="section-content-container">
        {renderSkillsIntro(SKILLS.intro)}
        {SKILLS.skills?.map((rows) => (
          <div key={rows.title}>
            <br />
            <h3>{rows.title}</h3>
            {rows.items.map((item) => (
              <div key={item.title} style={{ display: "inline-block" }}>
                <img
                  style={styles.iconStyle}
                  src={item.icon}
                  alt={item.title}
                />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
