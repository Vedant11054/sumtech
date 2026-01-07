import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { productsByDivision } from "@/data/productsByDivision";
import { divisions } from "@/data/divisions";
import { ArrowRight } from "lucide-react";

const DivisionProducts = () => {
  const { divisionId } = useParams<{ divisionId: string }>();

  const division = divisions.find((d) => d.id === divisionId);
  const products = divisionId ? productsByDivision[divisionId] : [];

  if (!division || !products) {
    return (
      <Layout>
        <div className="container-wide py-20 text-center">
          <h2 className="text-2xl font-bold">Division not found</h2>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="bg-muted py-6">
        <div className="container-wide text-sm">
          <Link to="/" className="text-muted-foreground hover:text-accent">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="text-muted-foreground hover:text-accent">
            Products
          </Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">{division.title}</span>
        </div>
      </section>

      {/* Header */}
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <h1 className="text-4xl font-display font-bold mb-4">
            {division.title}
          </h1>
          <p className="text-muted-foreground text-lg">
            {division.description}
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="pb-20">
        <div className="container-wide grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product}
              className="border rounded-xl p-5 hover:shadow-md transition"
            >
              <h3 className="font-semibold mb-2">{product}</h3>
              <p className="text-sm text-muted-foreground">
                Industrial grade product for heavy-duty applications.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center text-accent text-sm mt-4"
              >
                Enquire
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default DivisionProducts;
