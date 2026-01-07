import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-welding.jpg";

const features = [
  { icon: Shield, label: "Industry Certified" },
  { icon: Zap, label: "High Performance" },
  { icon: Award, label: "Premium Quality" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Industrial welding"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-white/90">Trusted by 500+ Industrial Partners</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-tight mb-6 animate-fade-up delay-100">
            High-Performance{" "}
            <span className="text-accent">Welding Products</span>{" "}
            for Industrial Applications
          </h1>

          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl animate-fade-up delay-200">
            Delivering precision-engineered welding solutions with unmatched durability, 
            quality, and industry compliance. Your trusted partner for mission-critical applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up delay-300">
            <Button asChild size="lg" className="btn-accent text-base">
              <Link to="/products">
                View Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" className="btn-outline-light text-base">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 animate-fade-up delay-400">
            {features.map((feature) => (
              <div key={feature.label} className="flex items-center gap-3 text-white/80">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm font-medium">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
