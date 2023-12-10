import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { Introduction } from "../Introduction/Introduction";
import { Timeline } from "../Timeline/Timeline";
import { Techstacks } from "../Techstacks/Techstacks";

import "./About.css";

export function About() {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I'm <span className="about__name">Gualter Parada</span>
        </h1>
        <p className="about__desc" data-aos="fade-right">
          A software engineer who loves more <br /> problem solving than solving
          problems
        </p>

        <div className="about__contact center" data-aos="fade-right">
          <a
            href="https://github.com/gualtermp"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:gualterparada@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+351966583871"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <LocalPhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/gualterparada/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://docs.google.com/document/d/1q0cCCb0OBcN7pTsfW2e_KOqCMcp9ty_yxTrb8VthdE8/edit?usp=sharing"
            aria-label="cv"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <ContactPageIcon />
          </a>
        </div>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
}
