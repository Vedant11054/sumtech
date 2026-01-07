import { Shield, Award, CheckCircle, FileCheck } from "lucide-react";

const certifications = [
  {
    icon: Shield,
    title: "ISO 9001:2015",
    description: "Quality Management System",
  },
  {
    icon: Award,
    title: "AWS Certified",
    description: "American Welding Society",
  },
  {
    icon: FileCheck,
    title: "CE Marked",
    description: "European Conformity",
  },
  {
    icon: CheckCircle,
    title: "API Approved",
    description: "American Petroleum Institute",
  },
];

export function CertificationsSection() {
  return (
    <section className="section-padding border-t border-border">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
            Quality Assurance
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Industry Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our products meet the highest international quality standards, 
            backed by rigorous testing and certification programs.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="card-industrial p-8 text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <cert.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-1">
                {cert.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
