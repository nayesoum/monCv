import React from "react";
import Navigation from "../components/Navigation";


function Home() {
  return (
    <>
      <div className="home">
        <Navigation />
        <div className="homeContent">
          <div className="content">
            <h1>Nayé SOUMARE</h1>
            <h2>Dévelopeuse FullStack & Devops</h2>
            <div className="pdf">
              <a href="/" target="_blank">
                Télécharger CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
