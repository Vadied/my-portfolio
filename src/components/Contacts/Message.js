import React, { useState } from "react";
import axios from "axios";

const Message = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const sendEmail = () => {
    axios.post("https://api.emailjs.com/api/v1.0/email/send", {
      service_id: "",
      template_id: "",
      user_id: "",
      template_params: {
        message,
        email,
        phone,
      },
    });
  };

  return (
    <div className="message-container">
      <div className="text">
        <input onChange={(e) => setMessage(e.target.value)} />
      </div>
      <div
        className="form-email"
        onChange={(e) => setEmail(e.target.value)}
      ></div>
      <div
        className="form-phone"
        onChange={(e) => setPhone(e.target.value)}
      ></div>
      <div className="btn btn-primary" onClick={sendEmail}>
        SEND
      </div>
    </div>
  );
};

export default Message;
