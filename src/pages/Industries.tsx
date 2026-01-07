import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Factory, Building2, Ship, Droplets, HardHat, Train } from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    description: "From automotive to aerospace, our welding products support precision manufacturing operations worldwide. We provide solutions for high-volume production lines, automated welding cells, and specialized fabrication needs.",
    applications: ["Automotive Components", "Aerospace Parts", "Heavy Machinery", "Consumer Goods"],
  },
  {
    icon: Building2,
    title: "Construction",
    description: "Our structural welding consumables meet the demanding requirements of commercial and industrial construction. Trusted by contractors for reliability and consistent weld quality on critical structural connections.",
    applications: ["Steel Structures", "Commercial Buildings", "Industrial Facilities", "Prefab Construction"],
  },
  {
    icon: HardHat,
    title: "Heavy Engineering",
    description: "For the most demanding welding applications in mining, heavy equipment, and industrial machinery. Our hardfacing and specialty alloys extend equipment life and reduce maintenance costs.",
    applications: ["Mining Equipment", "Earth Moving Machinery", "Industrial Crushers", "Heavy Vehicles"],
  },
  {
    icon: Droplets,
    title: "Oil & Gas",
    description: "Meeting stringent API and industry specifications for pipeline, refinery, and offshore applications. Our low-hydrogen and specialty products ensure weld integrity in critical service environments.",
    applications: ["Pipeline Construction", "Refinery Maintenance", "Offshore Platforms", "Storage Tanks"],
  },
  {
    icon: Ship,
    title: "Shipbuilding & Marine",
    description: "Marine-grade welding consumables designed for the unique challenges of shipbuilding and offshore construction. Excellent corrosion resistance and mechanical properties for marine environments.",
    applications: ["Vessel Construction", "Ship Repair", "Offshore Structures", "Port Equipment"],
  },
  {
    icon: Train,
    title: "Infrastructure",
    description: "Supporting critical infrastructure projects with reliable welding solutions for bridges, railways, and transportation systems. Proven performance in demanding environmental conditions.",
    applications: ["Bridge Construction", "Railway Systems", "Power Plants", "Water Treatment"],
  },
];

const Industries = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-dark section-padding">
        <div className="container-wide">
          <div className="max-w-4xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Industries We Serve
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Powering Industries{" "}
              <span className="text-accent">Worldwide</span>
            </h1>
            <p className="text-white/70 text-lg sm:text-xl leading-relaxed">
              Our welding solutions are trusted across diverse sectors, delivering 
              consistent performance for critical applications in the most demanding environments.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={industry.title}
                className="card-industrial p-8 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <industry.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {industry.description}
                </p>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-3">Key Applications:</p>
                  <ul className="space-y-2">
                    {industry.applications.map((app) => (
                      <li key={app} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-steel section-padding">
        <div className="container-wide text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
            Have a Specific Industry Requirement?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Our technical team has experience across all major industrial sectors. 
            Let us help you find the right solution for your application.
          </p>
          <Button asChild size="lg" className="btn-accent">
            <Link to="/contact">
              Discuss Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
