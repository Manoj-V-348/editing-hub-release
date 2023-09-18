import { React, useState } from "react";

import "./Presets.css";

import preset from "../images/preseticon.webp";

export default function Presets(props) {
  const [videoVisible, setVideoVisible] = useState(false);

  function showVideo() {
    setVideoVisible(true);
  }

  return (
    <>
      <div className="section">
        <main className="presets--area" id="presets">
          <div className="preset--container">
            <div className="preset--video">
              <h2 className="preset--heading">{props.presetName}</h2>
              {videoVisible ? (
                <iframe
                  src={props.videoURL}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  className="iframe"
                  allowFullScreen
                ></iframe>
              ) : (
                <img
                  src={props.thumbnail}
                  alt="thumbnail"
                  onClick={showVideo}
                  className="thumbnail"
                  style={{ cursor: "pointer" }}
                  width={960}
                  height={540}
                />
              )}
            </div>
            <div className="preset--image">
              <h2 className="preset--heading">Result</h2>

              <img
                src={props.image}
                alt="reference-image"
                className="preset--reference-image"
                loading="lazy"
                width={300}
                height={300}
              />
            </div>
            <div className="download-preset">
              <a href={props.presetFile} download={props.presetName}>
                <img
                  src={preset}
                  alt="download preset"
                  className="preset--icon"
                />
              </a>
              <h3 className="preset--heading">Download</h3>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
