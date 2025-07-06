// src/components/Testimonials.tsx

const clientLogos = [
  {
    name: "Microsoft",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoft.svg",
  },
  {
    name: "Google",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/google.svg",
  },
  {
    name: "Apple",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/apple.svg",
  },
  {
    name: "Amazon",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazon.svg",
  },
  {
    name: "Netflix",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/netflix.svg",
  },
  {
    name: "Tesla",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tesla.svg",
  },
  {
    name: "Meta",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/meta.svg",
  },
  {
    name: "Adobe",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/adobe.svg",
  },
  {
    name: "Spotify",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/spotify.svg",
  },
  {
    name: "Airbnb",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/airbnb.svg",
  },
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
