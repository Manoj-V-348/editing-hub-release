import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header.jsx";
import Presets from "./components/Presets";
import Tutorials from "./components/Tutorials";
import Footer from "./components/Footer";

import data from "./components/presetsData";
import TutorialsData from "./components/TutorialsData";

import "./App.css";

function App() {
  const preset = data.map(function (data) {
    return (
      <Presets
        key={data.name}
        presetName={data.name}
        image={data.imageLocation}
        videoURL={data.videoURL}
        presetFile={data.presetFile}
        thumbnail={data.thumbnail}
      />
    );
  });
  const tutorials = TutorialsData.map(function (values) {
    return (
      <Tutorials
        key={values.title}
        title={values.title}
        video1={values.software1URL}
        video2={values.software2URL}
        thumbnail1={values.thumbnail1}
        thumbnail2={values.thumbnail2}
      />
    );
  });
  return (
    <>
      <div className="app">
        <Header />
        <div className="presets">
          <h1 className="preset--heading">PRESETS</h1>
          {preset}
        </div>
        <div className="tutorials">
          <h1 className="preset--heading">QUICK TUTORIALS</h1>
          {tutorials}
          <p className="tutorials--end">
            All the best in your editing journey. 😄👍
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
