// src/components/Testimonials.tsx

const clientLogos = [
  {
    name: "Community Health",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5e/Community_Health_Center_Logo.png",
  },
  {
    name: "Morgan Stanley",
    logo: "https://1000logos.net/wp-content/uploads/2021/06/Morgan-Stanley-Logo.png",
  },
  {
    name: "FINRA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/FINRA_logo.svg/2560px-FINRA_logo.svg.png",
  },
  {
    name: "Catalina",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Catalina_Marketing_logo.png",
  },
  {
    name: "Bridgestone",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Bridgestone_logo.svg/2560px-Bridgestone_logo.svg.png",
  },
  {
    name: "AT&T",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f2/AT%26T_logo_2016.svg",
  },
  {
    name: "21st Century Fox",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/52/21st_Century_Fox_logo_2013.png",
  },
  {
    name: "Tory Burch",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/83/Tory_Burch_logo.svg",
  },
  {
    name: "Munich RE",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Munich_Re_Logo.svg",
  },
  {
    name: "Match",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/78/Match_logo.svg/2560px-Match_logo.svg.png",
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
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
