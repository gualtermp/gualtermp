import React from "react";
import "./Introduction.css";

import profilePic from "../../assets/me.jpeg";
import { ThemeContext, ThemeContextValue } from "../../contexts/Theme";

export const Introduction = () => {
  const { themeMode } = React.useContext(ThemeContext) as ThemeContextValue;

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themeMode}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hey there! I'm
                <span className="different"> Gualter</span>, currently living
                nearby
                <span className="different"> Lisbon, Portugal</span>. I'm a
                software engineer navigating the ever-evolving landscape of
                technology.
              </h4>
              <h4>
                My journey involves crafting elegant solutions, ensuring that
                every project I work in not only meets but exceeds expectations.
                I mostly enjoy working with everything
                <span className="different"> JavaScript</span> related.
              </h4>
              <h4>
                Apart from programming, I play guitar and have some knowledge on
                music recording and editing. I'm also a philosophy student at
                Lisbon University's School of Letters.
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
