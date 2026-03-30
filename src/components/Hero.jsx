import { motion } from "framer-motion";
import NitinLogo from "./NitinLogo";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="
        min-h-screen flex flex-col items-center justify-center
        text-white px-6 relative z-10
      "
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center max-w-3xl"
      >
        {/* Logo */}
        <motion.div variants={item} className="mb-6">
          <div className="w-28 h-28 mx-auto">
            <NitinLogo />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Hi, I’m <span className="text-teal-400">Nitin Jangid</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          variants={item}
          className="text-lg md:text-xl text-gray-300 mb-8"
        >
          Data Scientist | Data Analyst
        </motion.h2>

        {/* About Button */}
        <motion.div variants={item} className="flex flex-col items-center">
          <a
            href="#about"
            className="
              inline-flex items-center justify-center
              px-8 py-3 rounded-xl
              bg-teal-500 text-gray-900 font-semibold
              hover:bg-teal-400
              hover:scale-105
              transition-all duration-300
              shadow-[0_0_25px_rgba(45,212,191,0.4)]
            "
          >
            About Me
          </a>

          {/* 🔽 Animated Down Arrow */}
          <a
  href="#about"
  className="mt-6 flex justify-center group"
>
  <motion.svg
    initial={{ y: 0, opacity: 0.7 }}
    animate={{ y: [0, 8, 0] }}
    transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    className="stroke-teal-400 group-hover:stroke-teal-300"
  >
    <path
      d="M6 9l6 6 6-6"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
</a>

        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
