import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import electrodesImg from "@/assets/product-electrodes.jpg";
import migWireImg from "@/assets/product-mig-wire.jpg";
import tigWireImg from "@/assets/product-tig-wire.jpg";
import fluxWireImg from "@/assets/product-flux-wire.jpg";

const productCategories = [
  {
    id: 1,
    title: "Welding Electrodes",
    subtitle: "Stick Electrodes & Consumables",
    description: "Our comprehensive range of covered electrodes delivers excellent arc stability, minimal spatter, and superior mechanical properties for all welding applications.",
    image: electrodesImg,
    features: ["Mild Steel Electrodes", "Low Hydrogen Electrodes", "Stainless Steel Electrodes", "Cast Iron Electrodes"],
  },
  {
    id: 2,
    title: "MIG Welding Wires",
    subtitle: "Solid & Metal-Cored Wires",
    description: "High-purity MIG wires engineered for consistent feed, clean welds, and excellent productivity across various base metals and applications.",
    image: migWireImg,
    features: ["Carbon Steel Wires", "Stainless Steel Wires", "Aluminum Wires", "Metal-Cored Wires"],
  },
  {
    id: 3,
    title: "TIG Rods & Tungsten",
    subtitle: "Precision TIG Consumables",
    description: "Premium quality TIG welding consumables including tungsten electrodes and filler rods for precision welding applications requiring superior finish.",
    image: tigWireImg,
    features: ["Tungsten Electrodes", "TIG Filler Rods", "Stainless TIG Rods", "Aluminum TIG Rods"],
  },
  {
    id: 4,
    title: "Flux-Cored Wires",
    subtitle: "Self-Shielded & Gas-Shielded",
    description: "High-deposition flux-cored wires designed for demanding applications in construction, shipbuilding, and heavy fabrication industries.",
    image: fluxWireImg,
    features: ["Self-Shielded FCAW", "Gas-Shielded FCAW", "Hardfacing Wires", "Specialty Alloys"],
  },
];

const Products = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-dark section-padding">
        <div className="container-wide">
          <div className="max-w-4xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Products
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Premium{" "}
              <span className="text-accent">Welding Consumables</span>{" "}
              for Every Application
            </h1>
            <p className="text-white/70 text-lg sm:text-xl leading-relaxed">
              Discover our comprehensive range of welding products, engineered for performance, 
              reliability, and consistency across diverse industrial applications.
            </p>
          </div>
        </div>
      </section>

      {/* Products List */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="space-y-16">
            {productCategories.map((product, index) => (
              <div
                key={product.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden card-industrial">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-2 block">
                    {product.subtitle}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
                    {product.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-3 mb-8">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-foreground">
                        <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="btn-accent">
                    <Link to="/contact">
                      Request Quote
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
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
            Need Custom Specifications?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Our technical team can help you find the right welding consumables for your specific 
            application requirements. Contact us for expert assistance.
          </p>
          <Button asChild size="lg" className="btn-accent">
            <Link to="/contact">
              Contact Our Team
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
