import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import electrodesImg from "@/assets/product-electrodes.jpg";
import migWireImg from "@/assets/product-mig-wire.jpg";
import tigWireImg from "@/assets/product-tig-wire.jpg";
import fluxWireImg from "@/assets/product-flux-wire.jpg";

const products = [
  {
    id: 1,
    title: "Welding Electrodes",
    description: "Premium quality stick electrodes for all welding applications with excellent arc stability.",
    image: electrodesImg,
  },
  {
    id: 2,
    title: "MIG & TIG Wires",
    description: "High-purity solid wires delivering consistent, spatter-free welds for precision work.",
    image: migWireImg,
  },
  {
    id: 3,
    title: "TIG Rods & Tungsten",
    description: "Precision-ground tungsten electrodes and filler rods for superior TIG welding.",
    image: tigWireImg,
  },
  {
    id: 4,
    title: "Flux-Cored Wires",
    description: "Self-shielded and gas-shielded options for high-deposition rate applications.",
    image: fluxWireImg,
  },
];

export function ProductsPreview() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
              Our Products
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
              Premium Welding Solutions
            </h2>
          </div>
          <Button asChild variant="outline" className="self-start md:self-auto">
            <Link to="/products">
              View All Products
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Link
              key={product.id}
              to="/products"
              className="group card-industrial overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
