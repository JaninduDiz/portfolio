import React from "react";
import Typewriter from "typewriter-effect";
import { SocialIcon } from "react-social-icons";

const data = {
  name: "Janindu Dissanayake",
  roles: [
    "a Software Engineer",
    "a Freelancer",
    "a Web Developer",
    "a Mobile Developer",
    "a Full Stack Developer",
    "a Frontend Developer",
  ],
  social: [
    {
      network: "linkedin",
      href: "https://www.linkedin.com/in/janindu-dissanayake/",
    },
    {
      network: "github",
      href: "https://github.com/JaninduDiz",
    },
    {
      network: "email",
      href: "mailto:janindu001@gmail.com",
    },
  ],
};

function Me() {
  return (
    <div style={styles.mainContainer}>
      <h1 style={styles.nameStyle}>{data?.name}</h1>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2>
        <h2 style={styles.inlineChild}>
          <Typewriter
            options={{
              loop: true,
              autoStart: true,
              strings: data?.roles,
            }}
          />
        </h2>
      </div>

      <div className="social">
        {data
          ? data.social.map((social) => (
              <SocialIcon
                key={social.network}
                style={styles.iconStyle}
                url={social.href}
                network={social.network}
                target="_blank"
                rel="noopener"
              />
            ))
          : null}
      </div>
    </div>
  );
}

export default Me;

const styles = {
  nameStyle: {
    fontSize: "5em",
    marginBottom: 0,
  },
  inlineChild: {
    display: "inline-block",
    fontSize: "2em",
  },
  mainContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  iconStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
};
