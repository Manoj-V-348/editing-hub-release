import React from "react";
import { useForm, ValidationError } from "@formspree/react";

import Form from "./Form";

import sadFace from "../images/sademoji.webp";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer--section">
      <footer id="footer">
        <h1>Contact</h1>
        <div className="footer--container">
          <div className="donate">
            <div className="im--broke">
              <h2 className="inner--heading">Support</h2>
              <img
                src={sadFace}
                alt="I'm broke"
                width={40}
                height={40}
                className="sad--face"
              />
            </div>
            <div className="buttons">
              <a href="https://www.youtube.com/channel/UC7gKPZVxUPWaVQiVJxMHuUA/join">
                <button className="membership--button button">
                  Join Membership
                </button>
              </a>
              <a href="https://www.youtube.com/channel/UC7gKPZVxUPWaVQiVJxMHuUA">
                <button className="subscribe--button button">Subscribe </button>
              </a>
            </div>
          </div>
          <div className="contact">
            <h3>Send feedback 💌</h3>
            <Form />
          </div>
        </div>
        <div className="credits">
          <p>
            Video Credits : <a href="https://www.youtube.com/@katyt_">@KatYT</a>{" "}
            | <a href="https://www.youtube.com/@BlAcK_sHiT">@Blackshit</a>
          </p>
          <p>
            Vector Arts :{" "}
            <a href="https://instagram.com/aishuvwxyz?igshid=NzZhOTFlYzFmZQ==">
              @Siva Aishwarya
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
