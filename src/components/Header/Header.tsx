import React from "react";
import { Navbar } from "../Navbar/Navbar";

import "./Header.css";
import { ThemeContext, ThemeContextValue } from "../../contexts/Theme";

export const Header = () => {
  const { themeMode } = React.useContext(ThemeContext) as ThemeContextValue;

  return (
    <>
      <header className={`header center ${themeMode}`}>
        <h3>
          <a href="#home" className="link">
            @gualterparada
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  );
};
