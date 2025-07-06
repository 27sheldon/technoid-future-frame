import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "SaaS Development",
    description: "Custom SaaS platforms built for scale, performance, and user experience. From MVP to enterprise-grade solutions.",
    features: ["React & Node.js", "Cloud Architecture", "API Development", "Database Design"],
    imageUrl: "data:image/svg+xml;base64," + btoa(`
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#3B82F6"/>
        <rect x="8" y="8" width="48" height="36" rx="4" fill="white"/>
        <rect x="12" y="12" width="12" height="8" rx="2" fill="#EF4444"/>
        <rect x="28" y="12" width="12" height="8" rx="2" fill="#10B981"/>
        <rect x="44" y="12" width="12" height="8" rx="2" fill="#F59E0B"/>
        <rect x="12" y="24" width="20" height="2" rx="1" fill="#6B7280"/>
        <rect x="12" y="28" width="16" height="2" rx="1" fill="#6B7280"/>
        <rect x="12" y="32" width="24" height="2" rx="1" fill="#6B7280"/>
        <rect x="40" y="24" width="16" height="12" rx="2" fill="#8B5CF6"/>
        <circle cx="44" cy="28" r="2" fill="white"/>
        <circle cx="52" cy="28" r="2" fill="white"/>
        <rect x="42" y="32" width="12" height="2" rx="1" fill="white"/>
        <rect x="8" y="48" width="48" height="8" rx="4" fill="#1F2937"/>
        <circle cx="16" cy="52" r="2" fill="#3B82F6"/>
        <circle cx="24" cy="52" r="2" fill="#10B981"/>
        <circle cx="32" cy="52" r="2" fill="#F59E0B"/>
      </svg>
    `)
  },
  {
    title: "Internal Tools",
    description: "Streamline your operations with custom internal tools that integrate seamlessly with your existing workflows.",
    features: ["Process Automation", "Dashboard Creation", "Workflow Tools", "Team Collaboration"],
    imageUrl: "data:image/svg+xml;base64," + btoa(`
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#10B981"/>
        <rect x="8" y="8" width="48" height="40" rx="4" fill="white"/>
        <rect x="12" y="12" width="40" height="6" rx="3" fill="#10B981"/>
        <text x="32" y="17" text-anchor="middle" fill="white" font-size="8" font-weight="bold">ACA TOOL</text>
        <rect x="12" y="22" width="18" height="3" rx="1.5" fill="#6B7280"/>
        <rect x="12" y="28" width="14" height="3" rx="1.5" fill="#6B7280"/>
        <rect x="12" y="34" width="16" height="3" rx="1.5" fill="#6B7280"/>
        <rect x="34" y="22" width="18" height="20" rx="2" fill="#F3F4F6"/>
        <rect x="36" y="24" width="14" height="2" rx="1" fill="#10B981"/>
        <rect x="36" y="28" width="10" height="2" rx="1" fill="#6B7280"/>
        <rect x="36" y="32" width="12" height="2" rx="1" fill="#6B7280"/>
        <rect x="36" y="36" width="8" height="2" rx="1" fill="#6B7280"/>
        <rect x="36" y="40" width="14" height="2" rx="1" fill="#EF4444"/>
        <rect x="12" y="40" width="12" height="6" rx="2" fill="#3B82F6"/>
        <circle cx="16" cy="43" r="1" fill="white"/>
        <circle cx="20" cy="43" r="1" fill="white"/>
        <rect x="8" y="52" width="48" height="4" rx="2" fill="#1F2937"/>
      </svg>
    `)
  },
  {
    title: "ERP Integration",
    description: "Connect and optimize your business systems with seamless ERP integrations and data synchronization.",
    features: ["System Integration", "Data Migration", "API Connections", "Process Optimization"],
    imageUrl: "data:image/svg+xml;base64," + btoa(`
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#8B5CF6"/>
        <rect x="8" y="12" width="20" height="16" rx="3" fill="white"/>
        <rect x="10" y="14" width="16" height="3" rx="1.5" fill="#F59E0B"/>
        <text x="18" y="17" text-anchor="middle" fill="white" font-size="6" font-weight="bold">SAP</text>
        <rect x="10" y="20" width="12" height="2" rx="1" fill="#6B7280"/>
        <rect x="10" y="24" width="8" height="2" rx="1" fill="#6B7280"/>
        <rect x="36" y="12" width="20" height="16" rx="3" fill="white"/>
        <rect x="38" y="14" width="16" height="3" rx="1.5" fill="#0EA5E9"/>
        <text x="46" y="17" text-anchor="middle" fill="white" font-size="5" font-weight="bold">WORKDAY</text>
        <rect x="38" y="20" width="14" height="2" rx="1" fill="#6B7280"/>
        <rect x="38" y="24" width="10" height="2" rx="1" fill="#6B7280"/>
        <rect x="20" y="36" width="24" height="20" rx="4" fill="white"/>
        <rect x="24" y="40" width="16" height="3" rx="1.5" fill="#8B5CF6"/>
        <text x="32" y="43" text-anchor="middle" fill="white" font-size="6" font-weight="bold">INTEGRATION</text>
        <rect x="24" y="46" width="12" height="2" rx="1" fill="#6B7280"/>
        <rect x="24" y="50" width="8" height="2" rx="1" fill="#6B7280"/>
        <path d="M18 32L32 40L46 32" stroke="#10B981" stroke-width="2" fill="none"/>
        <path d="M32 28L18 32M32 28L46 32" stroke="#10B981" stroke-width="2" fill="none"/>
        <circle cx="18" cy="32" r="3" fill="#10B981"/>
        <circle cx="46" cy="32" r="3" fill="#10B981"/>
        <circle cx="32" cy="28" r="3" fill="#10B981"/>
        <circle cx="32" cy="40" r="3" fill="#10B981"/>
      </svg>
    `)
  },
  {
    title: "IT Staffing",
    description: "Strategic human resources and staffing solutions to build high-performing technology teams for your organization.",
    features: ["Tech Talent Acquisition", "Team Scaling", "Skills Assessment", "Contract & Permanent Placement"],
    imageUrl: "data:image/svg+xml;base64," + btoa(`
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#EF4444"/>
        <circle cx="20" cy="20" r="6" fill="white"/>
        <circle cx="20" cy="20" r="3" fill="#EF4444"/>
        <path d="M20 28C16 28 12 30 12 34V36H28V34C28 30 24 28 20 28Z" fill="white"/>
        <circle cx="44" cy="20" r="6" fill="white"/>
        <circle cx="44" cy="20" r="3" fill="#EF4444"/>
        <path d="M44 28C40 28 36 30 36 34V36H52V34C52 30 48 28 44 28Z" fill="white"/>
        <circle cx="32" cy="42" r="6" fill="white"/>
        <circle cx="32" cy="42" r="3" fill="#EF4444"/>
        <path d="M32 50C28 50 24 52 24 56V58H40V56C40 52 36 50 32 50Z" fill="white"/>
        <rect x="8" y="8" width="48" height="4" rx="2" fill="white"/>
        <rect x="10" y="9" width="8" height="2" rx="1" fill="#EF4444"/>
        <text x="14" y="10.5" text-anchor="middle" fill="white" font-size="4" font-weight="bold">HR</text>
        <rect x="46" y="9" width="8" height="2" rx="1" fill="#10B981"/>
        <circle cx="16" cy="16" r="1" fill="#10B981"/>
        <circle cx="40" cy="16" r="1" fill="#10B981"/>
        <circle cx="28" cy="38" r="1" fill="#10B981"/>
        <path d="M16 16L20 20M40 16L44 20M28 38L32 42" stroke="#10B981" stroke-width="1" fill="none"/>
      </svg>
    `)
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive software solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-card transition-all duration-300 hover:scale-105 border-0 shadow-sm hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-24 h-24 bg-muted rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title}
                    className="w-16 h-16 object-contain rounded-lg"
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};