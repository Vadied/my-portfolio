import React, { useState } from "react";
import axios from "axios";
import { Formik } from "formik";

const Message = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.message) errors.message = "Required";

    if (!values.phone) errors.phone = "Required";

    return errors;
  };
  const sendEmail = (isSubmitting) => () => {
    if (isSubmitting || !message.length || !(message.length || phone.length))
      return;

    axios.post("https://api.emailjs.com/api/v1.0/email/send", {
      service_id: process.env.REACT_APP_EMAIL_SERVICE_ID,
      template_id: process.env.REACT_APP_EMAIL_TEMPLATE,
      user_id: process.env.REACT_APP_EMAIL_ID,
      template_params: {
        message,
        email,
        phone,
      },
    });
  };

  return (
    <div className="message-container">
      <Formik
        initialValues={{ message: "", email: "", phone: "" }}
        validate={validate}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={sendEmail(isSubmitting)}>
            <div className="form text">
              <textarea
                placeholder="Inserisci messaggio"
                rows="6"
                cols="50"
                onChange={(e) => setMessage(e.target.value)}
                value={values.message}
              />
            </div>
            {errors.message && touched.message && errors.message}
            <div className="form form-email">
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={values.email}
              />
            </div>
            {errors.email && touched.email && errors.email}
            <div className="form form-phone">
              <input
                type="phone"
                placeholder="Telefono"
                onChange={(e) => setPhone(e.target.value)}
                value={values.phone}
              />
            </div>
            {errors.phone && touched.phone && errors.phone}
            <button
              type="submit "
              className="btn btn-secondary "
              disabled={isSubmitting}
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Message;
