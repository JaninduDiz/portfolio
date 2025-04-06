import React from "react";
import { Row, Col, Typography, Card, Image } from "antd";
import myPicture from "../assets/about/profile.jpg";

const { Title } = Typography;

function About() {
  return (
    <div style={{ padding: "20px" }}>
      <Title level={1}>About Me</Title>

      <Row gutter={[12, 12]} align="middle">
        <Col xs={24} md={12} style={{ textAlign: "start" }}>
          <Card style={{ padding: "30px" }}>
            <Title level={3}>
              I am a fresh software engineering graduate with a focus on
              front-end development, specializing in JavaScript, React, and
              TypeScript. I love building dynamic and responsive web
              applications.
            </Title>
            <Title level={3}>
              Currently, I am working at Syntax Forgers, where I am developing
              full-stack web applications and mobile apps. In my free time, I
              enjoy learning new technologies, gaming, and exploring different
              cultures.
            </Title>
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card>
            <Image
              src={myPicture}
              alt="My Picture"
              style={{ width: "60%", borderRadius: "8px" }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default About;
