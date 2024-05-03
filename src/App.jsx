import React, { useState, useEffect } from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import NavBar from "./Components/Header";
import Parallax from "./Components/Parallax";
import Home2 from "./Components/Home2";
import Loader from "./Components/Loader";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Projects from "./Components/Projects";

const App = () => {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div id="main">
      <Loader load={load} />
      <NavBar />
      <Home2 />
      <section id="Portfolio">
        <Parallax />
      </section>
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
