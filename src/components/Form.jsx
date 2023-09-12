import React from "react";
import { useForm, ValidationError } from "@formspree/react";

import "./Footer.css";

export default function Form() {
  const [state, handleSubmit] = useForm("xjvqrzqj");
  if (state.succeeded) {
    return (
      <form onSubmit={handleSubmit}>
        <p className="feedback--message">Feeback sent!</p>
        <label>
          <span>
            Email :
            <a href="https://temp-mail.org/en/" className="dump--mail">
              dump mail
            </a>
          </span>
          <input
            type="text"
            name="email"
            id="email"
            className="text--area"
            required
            pattern="/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g"
            placeholder="E-mail"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </label>
        <label>
          <span>Feedback :</span>
          <input
            type="textarea"
            name="feedback"
            id="feedback"
            className="text--area"
            placeholder="Your feedback"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </label>
        <button type="submit" className="submit--form">
          Send
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span className="span">
          Email :
          <a href="https://temp-mail.org/en/" className="dump--mail">
            dump mail
          </a>
        </span>
        <input
          type="text"
          name="email"
          id="email"
          className="text--area"
          required
          placeholder="E-mail"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </label>
      <label>
        <span className="span">Feedback :</span>
        <input
          type="textarea"
          name="feedback"
          id="feedback"
          className="text--area"
          placeholder="Your feedback"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </label>
      <button type="submit" className="submit--form">
        Send
      </button>
    </form>
  );
}
