import { useEffect, useState } from "react";
import NitinLogo from "./NitinLogo";

const sections = ["home", "about", "projects", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observers = [];

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
            window.history.replaceState(null, "", `#${id}`);
          }
        },
        {
          threshold: 0.6, // 60% section visible
        }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const handleLogoClick = () => {
    if (active === "home") {
      window.location.reload();
    } else {
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const linkClass = (id) =>
    `relative pb-1 transition ${
      active === id
        ? "text-teal-400 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-teal-400"
        : "hover:text-teal-400 text-gray-300"
    }`;

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/70 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* LOGO */}
        <div
          onClick={handleLogoClick}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-10 h-10">
            <NitinLogo />
          </div>
        </div>

        {/* MENU */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={linkClass(id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}
