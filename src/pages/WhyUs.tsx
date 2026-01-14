import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  FlaskConical, 
  CheckCircle, 
  HeadphonesIcon, 
  Truck, 
  Shield, 
  Users, 
  Globe,
  Award 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PartnersSection } from "@/components/home/PartnersSection";

const mainFeatures = [
  {
    icon: FlaskConical,
    title: "Premium Raw Materials",
    description: "We source only the highest-grade raw materials from certified suppliers worldwide. Every batch undergoes strict quality verification to ensure consistent composition and purity.",
  },
  {
    icon: CheckCircle,
    title: "Consistent Performance",
    description: "Our advanced manufacturing processes and rigorous quality control protocols guarantee reliable, repeatable performance across all operating conditions and applications.",
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Technical Support",
    description: "Our team of welding engineers and metallurgists provides comprehensive support—from product selection and welding procedure development to on-site troubleshooting.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description: "With strategically located distribution centers and strong logistics partnerships, we ensure your orders arrive on time, every time, minimizing project delays.",
  },
];

const additionalBenefits = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "ISO 9001:2015 certified manufacturing with comprehensive testing and traceability.",
  },
  {
    icon: Users,
    title: "Dedicated Account Teams",
    description: "Personal relationship managers who understand your business and requirements.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving customers in 50+ countries with localized support and distribution.",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Multiple industry awards for product innovation and customer service excellence.",
  },
];

const WhyUs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-dark section-padding">
        <div className="container-wide">
          <div className="max-w-4xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Why Choose SumTech Engineering
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Your Partner in{" "}
              <span className="text-accent">Welding Excellence</span>
            </h1>
            <p className="text-white/70 text-lg sm:text-xl leading-relaxed">
              Discover why leading industries worldwide trust SumTech Engineering for their critical 
              welding applications. Our commitment to quality and service sets us apart.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="card-industrial p-10 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-steel section-padding">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
              The Numbers Speak for Themselves
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our track record of excellence is backed by measurable results and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-industrial p-8 text-center">
              <div className="text-5xl font-display font-bold text-accent mb-2">25+</div>
              <p className="text-muted-foreground font-medium">Years in Industry</p>
            </div>
            <div className="card-industrial p-8 text-center">
              <div className="text-5xl font-display font-bold text-accent mb-2">10K+</div>
              <p className="text-muted-foreground font-medium">Products Shipped Daily</p>
            </div>
            <div className="card-industrial p-8 text-center">
              <div className="text-5xl font-display font-bold text-accent mb-2">99.5%</div>
              <p className="text-muted-foreground font-medium">On-Time Delivery</p>
            </div>
            <div className="card-industrial p-8 text-center">
              <div className="text-5xl font-display font-bold text-accent mb-2">4.9/5</div>
              <p className="text-muted-foreground font-medium">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
              More Reasons to Partner With Us
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalBenefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnersSection />

      {/* CTA */}
      <section className="section-dark section-padding">
        <div className="container-wide text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
            Ready to Experience the SumTech Engineering Difference?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust SumTech Engineering for their welding needs. 
            Let's discuss how we can support your success.
          </p>
          <Button asChild size="lg" className="btn-accent">
            <Link to="/contact">
              Start a Conversation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default WhyUs;
