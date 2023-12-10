import { useContext } from "react";
import "./App.css";
import { ThemeContext, ThemeContextValue } from "./contexts/Theme";
import { Header } from "./components/Header/Header";
import { About } from "./components/About/About";
import { Footer } from "./components/Footer/Footer";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";

export function App() {
  const { themeMode } = useContext(ThemeContext) as ThemeContextValue;

  return (
    <div id="top" className={`${themeMode} app`}>
      <header id="#home">
        <Header />
      </header>
      <main>
        <About />
      </main>
      <footer>
        <Footer />
        <ScrollToTop />
      </footer>
    </div>
  );
}
