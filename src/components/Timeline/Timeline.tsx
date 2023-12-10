import { useContext, useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ThemeContext, ThemeContextValue } from "../../contexts/Theme";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarRateIcon from "@mui/icons-material/StarRate";

import "./Timeline.css";
import { THEME_MODE_OPTIONS } from "../../helpers/consts";
import { COLORS } from "../../helpers/colors";

export function Timeline() {
  const { themeMode } = useContext(ThemeContext) as ThemeContextValue;
  const [linecolor, setlinecolor] = useState(
    themeMode === THEME_MODE_OPTIONS.light ? COLORS.WHITE : COLORS.DARK_BLUE
  );

  useEffect(() => {
    themeMode === THEME_MODE_OPTIONS.dark
      ? setlinecolor(COLORS.WHITE)
      : setlinecolor(COLORS.DARK_BLUE);
  }, [themeMode]);

  return (
    <>
      <div className="section mainsection">
        <h2 className="section__title" data-aos="fade-right">
          My <span className="different">journey</span>
        </h2>
        <VerticalTimeline lineColor={linecolor}>
          <VerticalTimelineElement
            date={"Mar 2020 - Now"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Software Developer
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Runtime Revolution
            </h4>
            <p data-aos="fade-right">
              Working as a full stack developer. Currently (and for 2 years) in
              a front-end project, using TypeScript with React + Redux (RTK
              Query).
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"Feb 2019 - Feb 2020"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Research Fellow
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              NOVA FCT - PRECISE
            </h4>
            <p data-aos="fade-right">
              Studied automatic inference of program invariants, useful in
              software verification. Developed a fully automatic testing
              architecture with Java.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"Sep 2015 - Feb 2020"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Student
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              FCT NOVA
            </h4>
            <p data-aos="fade-right">
              Completed a MSc degree in Computer Science. Also did a 6 months
              internship at Border Innovation where I worked with JavaScript.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            icon={<StarRateIcon />}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}
