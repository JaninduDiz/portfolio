import "./css/Me.css";
import React from "react";
import { BIO } from "../constants";
import Typewriter from "typewriter-effect";
import { SocialIcon } from "react-social-icons";

function Me() {
  return (
    <div className="me-container">
      <h1 className="me-name">{BIO?.name}</h1>
      <div className="me-role-line">
        <h2 className="me-role-text">I'm&nbsp;</h2>
        <h2 className="me-role-text">
          <Typewriter
            options={{
              loop: true,
              autoStart: true,
              strings: BIO?.roles,
            }}
          />
        </h2>
      </div>

      <div className="social-icons">
        {BIO?.social.map((social) => (
          <SocialIcon
            key={social.network}
            className="social-icon"
            url={social.href}
            network={social.network}
            target="_blank"
            rel="noopener"
          />
        ))}
      </div>
    </div>
  );
}

export default Me;
