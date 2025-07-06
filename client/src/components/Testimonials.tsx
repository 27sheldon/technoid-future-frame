// Client logos for the moving gallery
const clientLogos = [
  { name: "TechFlow", logo: "/placeholder.svg" },
  { name: "DataSync", logo: "/placeholder.svg" },
  { name: "CloudTech", logo: "/placeholder.svg" },
  { name: "InnovateCorp", logo: "/placeholder.svg" },
  { name: "DigitalEdge", logo: "/placeholder.svg" },
  { name: "FutureSoft", logo: "/placeholder.svg" },
  { name: "NextGen", logo: "/placeholder.svg" },
  { name: "TechVision", logo: "/placeholder.svg" },
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
            {/* First set of logos */}
            {clientLogos.map((client, index) => (
              <div 
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center w-32 h-16 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className="max-w-24 max-h-12 object-contain filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clientLogos.map((client, index) => (
              <div 
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center w-32 h-16 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className="max-w-24 max-h-12 object-contain filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};