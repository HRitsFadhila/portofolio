import { ExternalLink, Award } from "lucide-react";

const certificates = [
  {
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    year: "2024",
    image: "/certificates/dicoding_dasar_ai.png",
    credential:
      "https://www.dicoding.com/certificates/98XW5520LPM3",
  },
  {
    title: "Software Development",
    issuer: "BNSP Indonesia",
    year: "2025",
    image: "/certificates/bnsp_programmer.png",
    credential:"#",
  },
  {
    title: "Pres-Security",
    issuer: "Try Hack Me",
    year: "2026",
    image: "/certificates/tryhackme_presecurity.png",
    credential: "https://tryhackme.com/certificate/THM-XL4UTC5JSJ",
  },
  {
    title: "AWS Cloud Foundations",
    issuer: "AWS Academy",
    year: "2026",
    image: "/certificates/aws_cloud_foundations.png",
    credential: "https://www.credly.com/badges/3a1bcadd-6fef-470c-9396-8aa5baabc58f/print",
  },
];

export const Certificates = () => {
  return (
    <section id="certificates" className="py-32">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-primary">
            Achievements
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Certificates
          </h2>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Professional certifications and courses that reflect my continuous
            learning journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="glass rounded-2xl overflow-hidden border border-white/10 hover:scale-[1.02] transition duration-300"
            >
              {/* Image */}
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-primary mb-3">
                  <Award size={18} />
                  <span className="text-sm">{cert.issuer}</span>
                </div>

                <h3 className="text-xl font-semibold">
                  {cert.title}
                </h3>

                <p className="text-sm text-muted-foreground mt-2">
                  Issued in {cert.year}
                </p>

                <a
                  href={cert.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 text-primary hover:underline"
                >
                  View Credential
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};