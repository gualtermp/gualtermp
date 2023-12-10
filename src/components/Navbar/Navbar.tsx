import { useContext, useState } from "react";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import "./Navbar.css";
import { ThemeContext, ThemeContextValue } from "../../contexts/Theme";
import { THEME_MODE_OPTIONS } from "../../helpers/consts";

export const Navbar = () => {
  const { themeMode, toggleTheme } = useContext(
    ThemeContext
  ) as ThemeContextValue;
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = (id?: string) => {
    if (!id) return;
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
  };

  return (
    <>
      <nav className="center nav">
        <ul
          style={{ display: showNavList ? "flex" : undefined }}
          className="nav__list"
        >
          <li className="nav__list-item">
            <a
              href="#home"
              onClick={() => toggleNavList("#home")}
              className="link link--nav"
            >
              Home
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#about"
              onClick={() => toggleNavList("#about")}
              className="link link--nav"
            >
              About
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#skills"
              onClick={() => toggleNavList("#skills")}
              className="link link--nav"
            >
              Skills
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="/src/assets/CV.pdf"
              onClick={() => toggleNavList()}
              className="link link--nav"
              target="_blank"
              rel="noreferrer"
            >
              CV
            </a>
          </li>
        </ul>
        <button
          type="button"
          onClick={toggleTheme}
          className="btn btn--icon nav__theme"
          aria-label="toggle theme"
          style={{ backgroundColor: "inherit" }}
        >
          {themeMode === THEME_MODE_OPTIONS.dark ? (
            <WbSunnyIcon />
          ) : (
            <Brightness2Icon />
          )}
        </button>
        <button
          type="button"
          onClick={() => toggleNavList()}
          className="btn btn--icon nav__hamburger"
          aria-label="toggle navigation"
        >
          {showNavList ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>
    </>
  );
};
