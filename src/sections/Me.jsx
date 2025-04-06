import React from "react";
import { BIO } from "../constants";
import Typewriter from "typewriter-effect";
import { SocialIcon } from "react-social-icons";

function Me() {
  return (
    <div style={styles.mainContainer}>
      <h1 style={styles.nameStyle}>{BIO?.name}</h1>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2>
        <h2 style={styles.inlineChild}>
          <Typewriter
            options={{
              loop: true,
              autoStart: true,
              strings: BIO?.roles,
            }}
          />
        </h2>
      </div>

      <div className="social">
        {BIO
          ? BIO.social.map((social) => (
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
