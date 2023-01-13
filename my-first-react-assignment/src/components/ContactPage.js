import { useState } from "react";
import Button from "./Button";

const ContactPage = () => {
  const [displayContactForm, setDisplayContctForm] = useState({
    fullName: "",
    message: "",
    email: "",
  });

  function onSubmit(e) {
    e.preventDefault();

    var formData = new FormData(e.target);

    setDisplayContctForm({
      message: formData.get("message"),
      email: formData.get("email"),
      fullName: formData.get("fullName"),
    });
  }

  return (
    <div className="container">
      <h2 className="rainbow-text">
        Contact me if you want to know more about me
      </h2>
      <form
        onSubmit={onSubmit}
        id="contactForm"
        name="contactForm"
        className="rainbow-text"
      >
        <input
          type="text"
          placeholder="Full Name"
          id="fullName"
          name="fullName"
          className="rainbow-text"
        />

        <input
          type="text"
          id="message"
          name="message"
          placeholder="Message"
          className="rainbow-text"
        />

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="rainbow-text"
        />

        <input
          type="submit"
          value={"Submit"}
          onSubmit={onSubmit}
          className="rainbow-text"
        />
      </form>

      <div className="display">
        <div className="rainbow-text">{displayContactForm.fullName}</div>
        <div className="rainbow-text">{displayContactForm.message}</div>
        <div className="rainbow-text">{displayContactForm.email}</div>
      </div>
      <br />
      <br />
      <Button />
    </div>
  );
};
export default ContactPage;
