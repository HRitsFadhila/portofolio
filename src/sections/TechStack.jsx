import { useState } from "react";
import {
  SiJavascript,
  SiPhp,
  SiGo,
  SiPython,
  SiLaravel,
  SiReact,
  SiFlutter,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiGithubcopilot,
} from "react-icons/si";

import { FaAws } from "react-icons/fa6";
import { TbBrandOpenai } from "react-icons/tb";

const techData = {
  Languages: [
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "#F7DF1E",
    },
    {
      name: "PHP",
      icon: SiPhp,
      color: "#777BB4",
    },
    {
      name: "Go",
      icon: SiGo,
      color: "#00ADD8",
    },
    {
      name: "Python",
      icon: SiPython,
      color: "#3776AB",
    },
  ],

  Backend: [
    {
      name: "Laravel",
      icon: SiLaravel,
      color: "#FF2D20",
    },
    {
      name: "Gin",
      icon: SiGo,
      color: "#00ADD8",
    },
  ],

  Frontend: [
    {
      name: "React",
      icon: SiReact,
      color: "#61DAFB",
    },
    {
      name: "Flutter",
      icon: SiFlutter,
      color: "#02569B",
    },
  ],

  Data: [
    {
      name: "MySQL",
      icon: SiMysql,
      color: "#4479A1",
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      color: "#4169E1",
    },
  ],

  "Cloud & DevOps": [
    {
      name: "Docker",
      icon: SiDocker,
      color: "#2496ED",
    },
    {
      name: "AWS",
      icon: FaAws,
      color: "#FF9900",
    },
  ],

  "AI Tools": [
    {
      name: "ChatGPT",
      icon: TbBrandOpenai,
      color: "#10A37F",
    },
    {
      name: "GitHub Copilot",
      icon: SiGithubcopilot,
      color: "#8957E5",
    },
  ],
};

export const TechStack = () => {
  const categories = Object.keys(techData);
  const [activeCategory, setActiveCategory] = useState("Languages");

  return (
    <section id="tech-stack" className="py-10">
      <div className="container mx-auto px-6">

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">
            Tech <span className="text-primary">Stack</span>
          </h2>

          <p className="text-muted-foreground mt-3">
            Technologies that I use to build modern applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">

          {/* Sidebar */}
          <div className="space-y-3">

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`w-full rounded-lg border px-5 py-3 text-left transition-all

                ${
                  activeCategory === category
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-white/10 hover:border-primary/50"
                }
                
                `}
              >
                {category}
              </button>
            ))}

          </div>

          {/* Card */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-5">

            {techData[activeCategory].map(({name, icon: Icon, color}) => (
              <div
  key={name}
  className="
    group
    rounded-xl
    border
    border-white/10
    bg-card
    h-36
    flex
    flex-col
    items-center
    justify-center
    gap-4
    transition-all
    duration-300
    hover:-translate-y-2
    hover:border-primary
    hover:shadow-lg
    hover:shadow-primary/10
  "
>
  <Icon
size={48}
      color={color}
      className="transition-transform duration-300 group-hover:scale-110"
  />

  <h3 className="text-base font-semibold text-center">
    {name}
  </h3>
</div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};