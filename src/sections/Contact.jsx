import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  // service_6sfxsul

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      await emailjs.send(
        "service_6sfxsul",
        "template_cvicsb6",
        {
          from_name: form.name,
          to_name: "Harsh",
          from_email: form.email,
          to_email: "harshtanishq2002@gmail.com",
          message: form.message,
        },
        "fQhgG_ZdQvyVFwTpZ"
      );

      setLoading(false);
      alert("Your Message has been Sent. Thank you!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="my-20 c-space" id='contact'>
      <div className="relative flex flex-col items-center justify-center min-h-screen">
        <div className="contact-container">
          <h3 className="head-text">Let's talk!</h3>
          <p className="mt-3 text-lg text-white-600">
            Whether you're looking to build a new website,improve your existing
            platform, or bring a unique idea to life. I am here to Help.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col mt-12 space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">E-mail</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="johndoe@me.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="field-input"
                placeholder="Hi,I wanna give you a job...."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "sending..." : "Send Message"}

              <img
                src="/assets/arrow-up.png"
                alt="up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
