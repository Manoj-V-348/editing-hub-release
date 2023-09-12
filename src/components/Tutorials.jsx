import { React, useState } from "react";

import "./Tutorials.css";

export default function Tutorials(props) {
  const [videoVisible, setVideoVisible] = useState(false);

  function showVideo() {
    setVideoVisible(true);
  }

  return (
    <>
      <div className="section">
        <div className="tutorials--area">
          <h2 className="tutorial--title">{props.title}</h2>
          <div className="tutorials--container">
            <div className="premiere-pro--container">
              <div className="logo--area">
                <img
                  src="/premiere-pro-logo.webp"
                  alt="Premiere Pro"
                  className="software--logo"
                  width={50}
                  height={50}
                />
                <img
                  src="/after-effects-logo.webp"
                  alt="After Effects"
                  className="software--logo"
                  width={50}
                  height={50}
                />
              </div>
              {videoVisible ? (
                <iframe
                  src={props.video1}
                  title="YouTube video player"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="tutorialVideo"
                  width={400}
                  height={300}
                ></iframe>
              ) : (
                <img
                  src={props.thumbnail1}
                  alt="thumbnail"
                  onClick={showVideo}
                  className="tutorialThumbnail"
                  style={{ cursor: "pointer" }}
                  width={400}
                  height={300}
                  loading="lazy"
                />
              )}
            </div>
            <div className="davinci--container">
              <div className="logo--area">
                <img
                  src="/davinci-logo.webp"
                  alt="Davinci Resolve"
                  className="software--logo"
                  width={50}
                  height={50}
                />
                <img
                  src="/capcut-logo.webp"
                  alt="Capcut"
                  className="software--logo"
                  width={50}
                  height={50}
                />
              </div>
              {videoVisible ? (
                <iframe
                  src={props.video2}
                  title="YouTube video player"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="tutorialVideo"
                  width={400}
                  height={300}
                ></iframe>
              ) : (
                <img
                  src={props.thumbnail2}
                  alt="thumbnail"
                  onClick={showVideo}
                  className="tutorialThumbnail"
                  style={{ cursor: "pointer" }}
                  width={400}
                  height={300}
                  loading="lazy"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
