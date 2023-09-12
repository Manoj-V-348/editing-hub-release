import React from "react";

import "./Header.css";

import Mavoc from "../images/mavoc.webp";
import presetsUser from "../images/presetsuser.webp";
import Thanks from "../images/thanks.webp";

export default function Header() {
  return (
    <header>
      <nav>
        <a href="https://youtube.com/@MavocYT?si=VBFS8wVy4kSv1FEA">
          <img
            src={Mavoc}
            alt="mavoc logo"
            className="mavoc--logo"
            width={30}
            height={30}
          />
        </a>

        <h1 className="header-elements">EDITING HUB 👨🏽‍💻</h1>
        <a href="#presets" className="header-elements">
          PRESETS
        </a>
        <a href="#footer" className="header-elements">
          CONTACT
        </a>
      </nav>

      <section>
        <h1>WHY PRESETS?</h1>
        <div className="textbox--container">
          <div className="textbox textbox1">
            <h2>Saves time. 🕒</h2>
            <p>
              Less editing time 👨🏽‍💻 + More time for content making
              <br />
              <span className="bold-green">[Perks : 🫵 can 👉🌿]</span>
            </p>

            <img
              src={presetsUser}
              alt="wojak-template"
              className="meme-template"
              width={300}
              height={300}
            />
          </div>
          <div className="textbox textbox2">
            <h2>Suitability ✅</h2>
            <p>
              Meme creators , Content creators 🖼️
              <br />
              <span className="bold-black">[Not for Cinematic Editors ❌]</span>
            </p>
            <img
              src={Thanks}
              alt="thank me later"
              className="meme-template"
              width={300}
              height={300}
            />
          </div>
        </div>
      </section>
    </header>
  );
}
