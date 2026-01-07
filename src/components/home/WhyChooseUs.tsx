import { CheckCircle, Truck, HeadphonesIcon, FlaskConical } from "lucide-react";

const features = [
  {
    icon: FlaskConical,
    title: "Premium Raw Materials",
    description: "We source only the highest-grade raw materials to ensure consistent weld quality and mechanical properties in every product.",
  },
  {
    icon: CheckCircle,
    title: "Consistent Performance",
    description: "Rigorous quality control at every production stage guarantees reliable performance across all operating conditions.",
  },
  {
    icon: HeadphonesIcon,
    title: "Technical Support",
    description: "Our team of welding engineers provides expert guidance on product selection, welding procedures, and troubleshooting.",
  },
  {
    icon: Truck,
    title: "On-Time Delivery",
    description: "Strategic distribution network ensures your orders arrive when and where you need them, minimizing project downtime.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-steel section-padding">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Your Success Is Our Priority
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              With over 25 years of industry experience, we understand what it takes to deliver 
              welding products that meet the demands of modern industrial applications.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="card-industrial p-8 text-center">
              <div className="text-5xl lg:text-6xl font-display font-bold text-accent mb-2">25+</div>
              <p className="text-muted-foreground font-medium">Years Experience</p>
            </div>
            <div className="card-industrial p-8 text-center">
              <div className="text-5xl lg:text-6xl font-display font-bold text-accent mb-2">500+</div>
              <p className="text-muted-foreground font-medium">Industrial Partners</p>
            </div>
            <div className="card-industrial p-8 text-center">
              <div className="text-5xl lg:text-6xl font-display font-bold text-accent mb-2">50+</div>
              <p className="text-muted-foreground font-medium">Countries Served</p>
            </div>
            <div className="card-industrial p-8 text-center">
              <div className="text-5xl lg:text-6xl font-display font-bold text-accent mb-2">99%</div>
              <p className="text-muted-foreground font-medium">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
