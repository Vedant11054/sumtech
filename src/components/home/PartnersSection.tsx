import { partners } from "@/data/partners";

export function PartnersSection() {
  return (
    <section className="section-steel section-padding">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Trusted Partners
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Trusted by Industry <span className="text-accent">Leaders</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We partner with India's leading companies across multiple sectors to deliver 
            industrial excellence and innovation.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="card-industrial p-8 flex flex-col items-center justify-center text-center hover:shadow-lg transition duration-300"
            >
              <div className="w-full h-24 mb-6 flex items-center justify-center bg-white/5 rounded-xl overflow-hidden">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                {partner.name}
              </h3>
              <p className="text-sm text-accent font-medium">
                {partner.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
