import React from "react";
import Nav from "./components/nav/Nav";
import Intro from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Startup from "./components/startup/Startup";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Nav />
      <main id="main-content">
        <h1 className="sr-only">Bethvour Chike Portfolio</h1>
        <Intro />
        <Experience />
        <Portfolio />
        <Startup />
      </main>
      <Footer />
    </>
  );
};

export default App;
