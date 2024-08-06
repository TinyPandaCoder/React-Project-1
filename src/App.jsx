import { useState } from "react";
import { useEffect } from "react";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";

function App() {
  const [state, setstate] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => { 
      setstate(window.scrollY < 300);
     })
  }, []);
  return (
    <div id="container" className="container">
      <Header />
      <Hero />
      <div className="divider" />

      <Main />
      <div className="divider" />

      <Contact />
      <div className="divider" />

      <Footer />
      <a
        style={{ opacity: state ? 0 : 1 }}
        className="circle"
        href="#container"
      >
        <div style={{ rotate: "-90deg" }} className="icon-arrow-right"></div>
      </a>
    </div>
  );
}

export default App;
