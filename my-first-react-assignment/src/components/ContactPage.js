import { useState } from "react";

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
      <form onSubmit={onSubmit} id="contactForm" name="contactForm">
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
        <div>{displayContactForm.fullName}</div>
        <div>{displayContactForm.message}</div>
        <div>{displayContactForm.email}</div>
      </div>
    
    </div>
  );
};
export default ContactPage;
