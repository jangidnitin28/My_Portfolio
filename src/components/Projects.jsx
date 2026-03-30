import { motion } from "framer-motion";

const projects = [
  {
    title: "RK Automobile",
    description:
      "RK Automobile is a clean and responsive web application built for automobile services",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    link: "https://github.com/jangidnitin28/RK-Automobile",
  },

  {
    title: "Heart Disease Prediction",
    description:
      "Machine learning model to predict heart disease risk based on patient data.",
  tech: ["Python", "Pandas", "NumPy","Matplotlib","Seaborn", "Scikit-learn"],
    link: "https://github.com/jangidnitin28/ML-for-Data-Science/tree/main/HeartDisease%204",
  },

  {
    title: "Titanic Survival Prediction",
    description:
      "Machine learning model to predict survival of passengers on the Titanic.",
    tech: ["Python", "Pandas", "NumPy","Matplotlib","Seaborn", "Scikit-learn"],
    link: "https://github.com/jangidnitin28/ML-for-Data-Science/blob/main/Titanic%20Practice%207.ipynb",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-28 bg-slate-950 text-white px-6"
    >
      {/* overlay for crystal readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950/95 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Heading */}
          <motion.h2
            variants={item}
            className="text-3xl md:text-4xl font-bold mb-12 text-teal-400"
          >
            Projects
          </motion.h2>

          {/* Project Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10 }}
                className="
                  border border-gray-700/70 rounded-xl p-6
                  backdrop-blur-sm bg-slate-900/40
                  hover:border-teal-400
                  hover:shadow-[0_0_30px_rgba(45,212,191,0.35)]
                  transition-all
                "
              >
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full
                                 border border-teal-400/40 text-teal-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className="text-teal-400 hover:underline"
>
  View Project →
</a>

              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
