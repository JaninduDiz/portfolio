import "./css/About.css";
import React from "react";
import { Row, Col, Typography, Card, Image } from "antd";
import myPicture from "../assets/about/profile.jpg";

const { Title } = Typography;

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">Who Am I?</h1>
      {/* Desktop Layout */}
      <div className="desktop-layout">
        <div className="desktop-description">
          <h3 className="about-subtitle">
            I am a fresh software engineering graduate with a focus on front-end
            development, specializing in JavaScript, React, and TypeScript. I
            love building dynamic and responsive web applications, and I am
            always striving to improve my skills by learning new technologies
            and frameworks.
          </h3>
          <h3 className="about-subtitle">
            Currently, I am working as a freelancer while actively seeking
            full-time opportunities.
            <br /> I specialize in developing full-stack web applications and
            mobile apps. In my free time, I enjoy experimenting with new coding
            techniques, and keeping up-to-date with the latest industry trends.
          </h3>
          <h3 className="about-subtitle">
            In addition to my hands-on work, I dedicate time to self-study and
            personal projects to stay ahead of emerging technologies. I explore
            new JavaScript frameworks, cloud computing, and AI tools, always
            pushing my boundaries to apply what I learn to real-world projects.
            As a tech enthusiast, I constantly expand my skill set by engaging
            with tech blogs, podcasts, and tutorials to keep growing as a
            software engineer.
          </h3>
        </div>
        <div className="desktop-image">
          <img src={myPicture} alt="My Picture" className="about-image-img" />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="mobile-layout">
        <div className="mobile-image">
          <img src={myPicture} alt="My Picture" className="about-image-img" />
        </div>
        <div className="mobile-description">
          <h3 className="about-subtitle">
            I am a fresh software engineering graduate with a focus on front-end
            development, specializing in JavaScript, React, and TypeScript. I
            love building dynamic, responsive web applications and am always
            working to improve my skills. Currently, I work as a freelancer,
            developing full-stack web applications and mobile apps, while
            actively seeking full-time opportunities. In my free time, I
            experiment with new coding techniques and stay updated on industry
            trends.
          </h3>
          <h3 className="about-subtitle">
            To stay ahead of emerging technologies, I dedicate time to
            self-study, exploring new JavaScript frameworks, cloud computing,
            and AI tools, while engaging with tech blogs, podcasts, and
            tutorials to keep growing as a software engineer.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default About;
