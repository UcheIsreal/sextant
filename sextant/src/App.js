import React from "react";
import Banner from "./Banner";
import Exhibit from "./Exhibit";

function App() {
  return (
    <div className="App">
      <Banner bannerText="Sextant" />
    <Exhibit name="I'm an exhibit!"></Exhibit>
    </div>
  );
}

export default App;
