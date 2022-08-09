import React from 'react'
import "../../assets/style.css"

const Form = () => {
  return (
    <>
      <form className="form">
        <div className="heading">
          <span>
            Before you go, please leave your contact details so we can get back
            to you...
          </span>
        </div>
        <input
          aria-label="Your name"
          autocomplete="name"
          maxlength="56"
          name="name"
          placeholder="*Your name"
          required=""
          type="text"
          className="form-input"
          value=""
        />
        <input
          aria-label="Your email"
          autocomplete="email"
          maxlength="56"
          name="email"
          placeholder="*Your email"
          required=""
          type="email"
          className="form-input"
          value=""
        />
        <div className="undertaking">
          <div className="checkbox">
            <input
              data-testid="checkbox-input"
              type="checkbox"
              className="checkbox-input"
            />
            <span className="checkmark check"></span>
          </div>
          <span className="declaration">
            <span>* </span>
            <span>
              [Sample legal text] The personal data you have provided will be
              processed by XXXXX for purposes of providing you the service. The
              legal basis of the processing is XXXXX. Your data will not be
              transferred nor assigned to third parties. You can exercise your
              right to access, rectify and delete your data, as well as the
              other rights granted by law by sending an email to XXXXX. For
              further information, please check our privacy policy XXXXX.
            </span>
          </span>
        </div>
        <button className="btn2">Send your answer ⟶</button>
      </form>
    </>
  );
}

export default Form