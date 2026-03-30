import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          formRef.current.reset();
        },
        (error) => {
          alert("Something went wrong ❌");
          console.log(error.text);
        },
      );
  };

  return (
    <section id="contact" className="relative py-32 bg-black text-white px-6">
      {/* BLUE GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black opacity-90" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16"
      >
        {/* LEFT */}
        <div>
          <h2 className="text-4xl font-bold text-blue-400 mb-4">
            Let’s Connect
          </h2>
          <p className="text-gray-300 mb-10">
            Want to discuss data projects, analytics, or machine learning ideas?
            Drop a message and let’s build something impactful.
          </p>

          <div className="border border-gray-700/60 rounded-2xl p-10 backdrop-blur-sm hover:border-blue-400 transition">
            <div className="text-5xl mb-4 text-gray-400">💡Every spark leads to transformation</div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-slate-900/70 border border-gray-700/60 rounded-2xl p-8 backdrop-blur-sm"
        >
          <input
            name="user_name"
            placeholder="Your Name"
            className="w-full mb-4 px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-blue-400 outline-none"
            required
          />

          <input
            name="user_email"
            placeholder="Email Address"
            className="w-full mb-4 px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-blue-400 outline-none"
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Tell me about your data problem / project"
            className="w-full mb-6 px-4 py-3 bg-black border border-gray-700 rounded-lg resize-none focus:border-blue-400 outline-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-xl hover:bg-blue-600 transition shadow-lg shadow-blue-500/40"
          >
            Send Message ✈️
          </button>
        </form>
      </motion.div>
    </section>
  );
};


export default Contact;
