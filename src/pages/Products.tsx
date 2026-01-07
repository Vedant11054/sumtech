import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { divisions } from "@/data/divisions";

const Products = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-dark section-padding">
        <div className="container-wide max-w-4xl">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Divisions
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            Industrial <span className="text-accent">Products & Solutions</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            SUMTECH ENGINEERING delivers a wide spectrum of industrial products
            and engineered solutions across core industries.
          </p>
        </div>
      </section>

      {/* Divisions */}
      <section className="section-padding">
        <div className="container-wide space-y-20">
          {divisions.map((division, index) => (
            <div
              key={division.id}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden card-industrial">
                  <img
                    src={division.image}
                    alt={division.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
                  {division.title}
                </h2>

                <p className="text-muted-foreground text-lg mb-6">
                  {division.description}
                </p>

                <ul className="grid grid-cols-2 gap-3 mb-8">
                  {division.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* 🔥 IMPORTANT CHANGE */}
                <Button asChild className="btn-accent">
                  <Link to={`/products/${division.id}`}>
                    View Products
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-steel section-padding">
        <div className="container-wide text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
            Looking for a Complete Industrial Solution?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Our experienced technical team will help you select the right
            products and solutions.
          </p>
          <Button asChild size="lg" className="btn-accent">
            <Link to="/contact">
              Talk to Our Experts
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
