import React from "react";
import Navigation from "../components/Navigation";


function Home() {
  return (
    <>
      <div className="home">
        <Navigation />
        {/* le contenue de ma page home */}
        <div className="homeContent">
          <div className="content">
            <h1>Nayé SOUMARE</h1>
            <h2>Dévelopeuse Front-end</h2>
            <div className="pdf">
              <a href="https://1drv.ms/b/s!AoYgN0Xra79EkOg0-jbAjPnuVc15fg?e=aATCaY" target="_blank">
                Lien CV en pdf
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
