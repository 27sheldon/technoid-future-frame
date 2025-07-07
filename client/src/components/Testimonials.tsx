const clientLogos = [
  { name: "AT&T", logo: "/src/assets/att.jpeg" },
  { name: "Bridgestone", logo: "/src/assets/bridgestone.png" },
  { name: "Fox", logo: "/src/assets/fox.png" },
  { name: "PVH", logo: "/src/assets/pvh.png" },
  { name: "Tory Burch", logo: "/src/assets/tory.png" },
  { name: "Washington", logo: "/src/assets/washington.png" },
];

export const Testimonials = () => {
  return (
    <section id="clients" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Clients across the globe
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by companies worldwide to deliver exceptional software solutions
          </p>
        </div>

        {/* Moving client logos gallery */}
        <div className="relative overflow-hidden bg-muted/30 rounded-2xl py-8">
          <div className="flex animate-scroll-left">
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 flex items-center justify-center w-32 h-16 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-w-24 max-h-12 object-contain filter grayscale hover:grayscale-0 transition-all"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="text-sm font-medium text-gray-600">${client.name}</div>`;
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

