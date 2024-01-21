// App.jsx

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style/landingPage.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import SuperHero from "./components/Superhero";
import HOROR from "./components/horor";

import Footer2 from "./components/footer2";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>

      <div className="trending">
        <Trending />
      </div>

      <div className="superhero">
        <SuperHero />
      </div>

      <div className="HOROR">
        <HOROR />
      </div>
      <div className="footer">
        <Footer2 />
      </div>
    </div>
  );
}

export default App;
