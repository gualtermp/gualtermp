import React from "react";
import "./Footer.css";
import { ThemeContext, ThemeContextValue } from "../../contexts/Theme";

export function Footer() {
  const { themeMode } = React.useContext(ThemeContext) as ThemeContextValue;

  return (
    <>
      <div className={`section ${themeMode}`}>
        <a href="/" rel="noreferrer" target="_blank">
          <div className="footerBox">
            <h3 className="footer">
              Made with
              <span style={{ background: `transparent` }}> ˗ˏˋ☕ˎˊ˗ </span>
            </h3>
          </div>
        </a>
      </div>
    </>
  );
}
