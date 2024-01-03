import React from "react";
import Banner from "./Banner";
import Exhibit from "./Exhibit";
import "./Banner.css"
import "./Exhibit.css"
import PublicIp from "./PublicIp";

function App() {
  return (
    <div className="App">
      <Banner bannerText="Sextant" />
      <Exhibit name="I'm an exhibit!">
        <PublicIp url="https://api.ipify.org?format=json" />
      </Exhibit>
      <Exhibit name="I'm an exhibit!">
        <PublicIp url="https://api.ipify.org?format=json" />
      </Exhibit>
      
    </div>
  );
}

export default App;
