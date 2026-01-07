import { Factory, Building2, Truck, Droplets, HardHat } from "lucide-react";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Automotive, aerospace, and general manufacturing applications",
  },
  {
    icon: Building2,
    title: "Construction",
    description: "Structural steel and commercial building projects",
  },
  {
    icon: HardHat,
    title: "Heavy Engineering",
    description: "Mining equipment, shipbuilding, and heavy machinery",
  },
  {
    icon: Droplets,
    title: "Oil & Gas",
    description: "Pipeline, refinery, and offshore platform welding",
  },
  {
    icon: Truck,
    title: "Infrastructure",
    description: "Bridges, railways, and transportation systems",
  },
];

export function IndustriesSection() {
  return (
    <section className="section-dark section-padding">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
            Industries We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Trusted Across Sectors
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Our welding products power critical applications across diverse industries, 
            delivering consistent performance where it matters most.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/50 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/30 transition-colors">
                <industry.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">
                {industry.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
