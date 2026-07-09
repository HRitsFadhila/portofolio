import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    school: "Politeknik Elektronika Negeri Surabaya (PENS)",
    degree: "Bachelor of Applied Informatics Engineering (D4)",
    period: "2026 - Present",
    location: "Surabaya, Indonesia",
    description:
      "Currently pursuing a Bachelor's degree in Applied Informatics Engineering with a focus on Software Engineering, Artificial Intelligence, and Mobile Development.",
  },
  {
    school: "Politeknik Negeri Banjarmasin",
    degree: "Diploma III Informatics Engineering",
    period: "2023 - 2026",
    location: "Banjarmasin, Indonesia",
    description:
      "Graduated with strong foundations in software development, databases, web technologies, and mobile application development.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one project at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm an Informatics Engineering student passionate about software
                development, backend engineering, and artificial intelligence.
              </p>

              <p>
                I enjoy building web applications, REST APIs, and machine
                learning projects while continuously learning modern
                technologies.
              </p>

              <p>
                Currently, I'm focusing on Laravel, React, Golang, Flutter, and
                AI-based application development.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border">
              <p className="text-lg italic">
                "Always learning, always building, and always striving to create
                technology that makes a real impact."
              </p>
            </div>
          </div>

          {/* Right Column - Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <GraduationCap className="text-primary" />
              Education
            </h3>

            {education.map((edu, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 border border-white/10"
              >
                <h4 className="text-lg font-semibold">{edu.school}</h4>

                <p className="text-primary font-medium mt-1">
                  {edu.degree}
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    {edu.period}
                  </span>

                  <span className="flex items-center gap-1">
                    <MapPin size={16} />
                    {edu.location}
                  </span>
                </div>

                <p className="mt-4 text-sm text-muted-foreground">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};