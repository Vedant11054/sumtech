import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/* Replace these with real images later */
import weldingImg from "@/assets/hero-welding.jpg";
import wearplateImg from "@/assets/product-electrodes.jpg";
import coatingImg from "@/assets/product-flux-wire.jpg";
import automationImg from "@/assets/product-mig-wire.jpg";
import rubberImg from "@/assets/product-tig-wire.jpg";
import lubricationImg from "@/assets/hero-welding.jpg";
import safetyImg from "@/assets/hero-welding.jpg";
import waterImg from "@/assets/hero-welding.jpg";
import pumpImg from "@/assets/hero-welding.jpg";
import solarImg from "@/assets/hero-welding.jpg";

const divisions = [
  {
    id: 1,
    title: "Welding & Cutting Products",
    description:
      "Comprehensive range of welding electrodes, wires, machines, and accessories for repair, maintenance, and fabrication across heavy industries.",
    image: weldingImg,
    highlights: [
      "Mild Steel & Low Hydrogen Electrodes",
      "SS / MIG / TIG / SAW Wires",
      "Hardfacing & Maintenance Alloys",
      "Welding Machines & Accessories",
    ],
  },
  {
    id: 2,
    title: "Wear Plate & Wear Solutions",
    description:
      "Advanced wear protection solutions including chromium carbide plates, ceramic liners, and composite wear systems for high-abrasion environments.",
    image: wearplateImg,
    highlights: [
      "Chromium Carbide Wear Plates",
      "Ceramic Liners & Tiles",
      "Mill Liners & Chutes",
      "High Temperature Wear Solutions",
    ],
  },
  {
    id: 3,
    title: "Coating Products",
    description:
      "Industrial coating and surface protection solutions including thermal spray, epoxy coatings, and repair systems for corrosion and wear resistance.",
    image: coatingImg,
    highlights: [
      "Thermal Spray Coatings",
      "Epoxy & Chemical Resistant Coatings",
      "Surface Repair Systems",
      "Industrial Maintenance Applications",
    ],
  },
  {
    id: 4,
    title: "Instrumentation & Automation",
    description:
      "Precision instrumentation and automation products for level, flow, pressure, and process control in bulk solids and liquid handling systems.",
    image: automationImg,
    highlights: [
      "Level Switches & Transmitters",
      "Flow Meters & Sensors",
      "Pressure Instruments",
      "Automation & Control Systems",
    ],
  },
  {
    id: 5,
    title: "Rubber & Polymer Products",
    description:
      "High-performance rubber products engineered for sealing, conveying, insulation, and vibration control across industrial applications.",
    image: rubberImg,
    highlights: [
      "Rubber Sheets & Expansion Joints",
      "O-Rings & Oil Seals",
      "Industrial Hoses & Bellows",
      "Conveyor & Elevator Belts",
    ],
  },
  {
    id: 6,
    title: "Lubrication Products",
    description:
      "Premium industrial lubricants and greases designed to extend equipment life, reduce downtime, and improve operational efficiency.",
    image: lubricationImg,
    highlights: [
      "Compressor & Turbine Oils",
      "Hydraulic Oils",
      "High-Temperature Greases",
      "Wire Rope & Specialty Lubricants",
    ],
  },
  {
    id: 7,
    title: "Fire & Safety Products",
    description:
      "Complete range of personal protective equipment and fire safety solutions ensuring compliance, safety, and reliability in hazardous environments.",
    image: safetyImg,
    highlights: [
      "Fire Fighting Suits & Gloves",
      "Fire Detection & Alarm Systems",
      "Safety Wear & PPE",
      "Industrial Fire Protection Equipment",
    ],
  },
  {
    id: 8,
    title: "Water Treatment Solutions",
    description:
      "Efficient water treatment and management solutions for industrial processes, utilities, and environmental compliance.",
    image: waterImg,
    highlights: [
      "Industrial Water Treatment",
      "Chemical Dosing Systems",
      "Pumps & Valves",
      "Utility Water Solutions",
    ],
  },
  {
    id: 9,
    title: "Valves, Pumps & Couplings",
    description:
      "Reliable flow control and mechanical power transmission solutions for industrial plants and process systems.",
    image: pumpImg,
    highlights: [
      "Industrial Pumps",
      "Valves & Flow Control",
      "Couplings & Mechanical Spares",
      "Process Equipment",
    ],
  },
  {
    id: 10,
    title: "Solar & EV Spares",
    description:
      "Sustainable energy solutions including solar components and electric vehicle spares supporting future-ready infrastructure.",
    image: solarImg,
    highlights: [
      "Solar Power Components",
      "EV Electrical Spares",
      "Energy Storage Accessories",
      "Green Energy Solutions",
    ],
  },
];

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
            Industrial{" "}
            <span className="text-accent">Products & Solutions</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            SUMTECH ENGINEERING delivers a wide spectrum of industrial products
            and engineered solutions across cement, steel, power, mining,
            railway, and manufacturing industries.
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
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm"
                    >
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild className="btn-accent">
                  <Link to="/contact">
                    Enquire Now
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
            products and solutions tailored to your industry and application.
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
