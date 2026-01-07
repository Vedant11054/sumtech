import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We never compromise on quality. Every product undergoes rigorous testing to ensure it meets the highest industry standards.",
  },
  {
    icon: Users,
    title: "Customer Partnership",
    description: "We view every client relationship as a partnership, working closely to understand and meet their specific needs.",
  },
  {
    icon: Target,
    title: "Continuous Innovation",
    description: "We invest in R&D to develop advanced welding solutions that address evolving industrial challenges.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Open communication and honest dealings form the foundation of our business relationships.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-dark section-padding">
        <div className="container-wide">
          <div className="max-w-4xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              About SumTech Engineering
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Pioneering Excellence in{" "}
              <span className="text-accent">Welding Solutions</span>
            </h1>
            <p className="text-white/70 text-lg sm:text-xl leading-relaxed">
              For over 25 years, SumTech Engineering has been at the forefront of the welding industry, 
              delivering innovative products and solutions that power critical industrial applications worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 1995, SumTech Engineering began as a small family-owned business with a simple mission: 
                  to provide industrial clients with welding products they could trust.
                </p>
                <p>
                  Over the decades, we've grown from a local supplier to an international leader in welding 
                  consumables, serving clients across 50+ countries. Our growth has been driven by an unwavering 
                  commitment to quality and a deep understanding of our customers' needs.
                </p>
                <p>
                  Today, we operate state-of-the-art manufacturing facilities equipped with the latest technology, 
                  staffed by a team of skilled professionals who share our passion for excellence.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="card-industrial p-8 text-center">
                <div className="text-4xl font-display font-bold text-accent mb-2">1995</div>
                <p className="text-muted-foreground text-sm">Year Founded</p>
              </div>
              <div className="card-industrial p-8 text-center">
                <div className="text-4xl font-display font-bold text-accent mb-2">500+</div>
                <p className="text-muted-foreground text-sm">Team Members</p>
              </div>
              <div className="card-industrial p-8 text-center">
                <div className="text-4xl font-display font-bold text-accent mb-2">3</div>
                <p className="text-muted-foreground text-sm">Manufacturing Plants</p>
              </div>
              <div className="card-industrial p-8 text-center">
                <div className="text-4xl font-display font-bold text-accent mb-2">50+</div>
                <p className="text-muted-foreground text-sm">Countries Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-steel section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card-industrial p-10">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower industries worldwide with high-performance welding solutions that enhance 
                productivity, ensure safety, and deliver exceptional value. We are committed to being 
                a trusted partner in our customers' success through quality products and expert support.
              </p>
            </div>
            <div className="card-industrial p-10">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the global leader in welding consumables, recognized for innovation, quality, 
                and customer-centricity. We envision a future where our products set the benchmark 
                for performance and reliability in every industrial sector we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
              What Drives Us
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark section-padding">
        <div className="container-wide text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Discover how SumTech Engineering can support your industrial welding needs with premium products and expert service.
          </p>
          <Button asChild size="lg" className="btn-accent">
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
