import React from "react";
import Nav from "./components/nav/Nav";
import Intro from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Startup from "./components/startup/Startup";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Nav />
      <Intro />
      <Experience />
      <Portfolio />
      <Startup />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
