import { motion } from "framer-motion";

const section = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* DATA SCIENCE SKILLS LOGOS (LOCAL PUBLIC FOLDER) */
const skillLogos = {
  Python: "/Python.png",
  Pandas: "/Pandas.png",
  NumPy: "/NumPy.png",
  "Machine Learning": "/scikit-learn.png",   // ML → scikit-learn
  "Deep Learning": "/TensorFlow.png",        // DL → TensorFlow/PyTorch (add whichever logo you have)
  SQL: "/MySQL.png",
  "Power BI": "/powerbi.png",
  Tableau: "/tableau.png",
  Excel: "/excel.png",
  Matplotlib: "/matplot.png",
  Seaborn: "/seaborn.webp",
  React: "/React.png",
  JavaScript: "/JavaScript.png",
  HTML: "/HTML5.png",
  CSS: "/CSS3.png",
  Tailwind: "/Tailwind CSS.png",
  FastAPI: "/FastAPI.png",
  Git: "/Git.png",
  GitHub: "/GitHub.png",
  Java: "/Java.png",
  Kaggle: "/Kaggle.png",
  Notebook: "/Jupyter.png",
  "VS Code": "/Visual Studio Code (VS Code).png",
  Colab: "/colab.png",
};

const About = () => {
  const skills = [
    "Python",
    "Pandas",
    "NumPy",
    "Machine Learning",
    "Deep Learning",
    "SQL",
    "Power BI",
    "Tableau",
    "Excel",
    "Matplotlib",
    "Seaborn",
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind",
    "FastAPI",
    "Git",
    "GitHub",
    "Java",
    "Kaggle",
    "Notebook",
    "VS Code",
    "Colab",
  ];

  return (
    <section id="about" className="relative py-28 bg-slate-950 text-white px-6">
      {/* BLUE DATA GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black opacity-90" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          variants={section}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={item}
            className="text-3xl md:text-4xl font-bold mb-6 text-blue-400"
          >
            About Me
          </motion.h2>

          <motion.p
            variants={item}
            className="text-gray-300 max-w-4xl mb-12"
          >
            I’m a{" "}
            <span className="text-blue-400 font-medium">
              Data Scientist
            </span>{" "}
            who analyzes data, builds machine learning models, and extracts
            meaningful insights to solve real-world problems.
          </motion.p>

          <motion.p
            variants={item}
            className="text-gray-400 leading-relaxed max-w-4xl mb-12"
          >
            I work with Python, Pandas, NumPy for data analysis, and use
            visualization tools like Power BI and Tableau to present insights.
            I also build machine learning models to predict trends and improve
            decision-making.
          </motion.p>

          {/* SKILLS */}
          <motion.div
            variants={section}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-14"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill}
                variants={item}
                whileHover={{ y: -8, scale: 1.06 }}
                className="border border-gray-700/70 rounded-lg py-4 flex flex-col items-center gap-2
                           backdrop-blur-sm hover:border-blue-400 hover:text-blue-400
                           hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all"
              >
                {skillLogos[skill] && (
                  <img
                    src={skillLogos[skill]}
                    alt={skill}
                    className="w-7 h-7"
                  />
                )}
                <span className="text-sm">{skill}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={item} className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 shadow-lg shadow-blue-500/40"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-gray-600 rounded-lg hover:border-blue-400"
            >
              Let’s Work Together
            </a>

            <a
              href="/Nitin_Jangid_Resume.pdf"
              download="Nitin_Jangid_Resume.pdf"
              className="inline-flex items-center justify-center px-5 py-3 border border-gray-600 rounded-lg hover:border-blue-400 space-x-2 max-w-fit"
            >
              <img src="/download.png" alt="Download" className="w-6 h-6" />
              <span className="text-sm sm:text-base whitespace-nowrap">My Resume</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;