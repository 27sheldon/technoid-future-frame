import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "SaaS Development",
    description: "Custom SaaS platforms built for scale, performance, and user experience. From MVP to enterprise-grade solutions.",
    features: ["React & Node.js", "Cloud Architecture", "API Development", "Database Design"],
    imageUrl: "data:image/svg+xml;base64," + btoa(`
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#3B82F6"/>
        <rect x="6" y="6" width="52" height="44" rx="4" fill="white"/>
        <rect x="6" y="6" width="52" height="12" rx="4" fill="#1F2937"/>
        <rect x="6" y="18" width="52" height="32" rx="0" fill="white"/>
        <circle cx="12" cy="12" r="2" fill="#EF4444"/>
        <circle cx="18" cy="12" r="2" fill="#F59E0B"/>
        <circle cx="24" cy="12" r="2" fill="#10B981"/>
        <rect x="10" y="24" width="44" height="3" rx="1.5" fill="#E5E7EB"/>
        <rect x="10" y="30" width="20" height="12" rx="2" fill="#3B82F6"/>
        <rect x="12" y="32" width="16" height="2" rx="1" fill="white"/>
        <rect x="12" y="36" width="12" height="2" rx="1" fill="white"/>
        <rect x="12" y="40" width="8" height="1" rx="0.5" fill="white"/>
        <rect x="34" y="30" width="20" height="12" rx="2" fill="#10B981"/>
        <rect x="36" y="32" width="16" height="2" rx="1" fill="white"/>
        <rect x="36" y="36" width="12" height="2" rx="1" fill="white"/>
        <rect x="36" y="40" width="8" height="1" rx="0.5" fill="white"/>
        <rect x="10" y="46" width="44" height="2" rx="1" fill="#F3F4F6"/>
        <rect x="6" y="54" width="52" height="4" rx="2" fill="#F3F4F6"/>
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
        <rect x="6" y="6" width="52" height="44" rx="4" fill="white"/>
        <rect x="6" y="6" width="52" height="12" rx="4" fill="#059669"/>
        <rect x="6" y="18" width="52" height="32" rx="0" fill="white"/>
        <text x="32" y="15" text-anchor="middle" fill="white" font-size="7" font-weight="bold">HR ACA COMPLIANCE TOOL</text>
        <rect x="10" y="24" width="44" height="3" rx="1.5" fill="#E5E7EB"/>
        <rect x="10" y="30" width="20" height="8" rx="2" fill="#F3F4F6"/>
        <rect x="12" y="32" width="16" height="1.5" rx="0.75" fill="#059669"/>
        <rect x="12" y="35" width="12" height="1.5" rx="0.75" fill="#6B7280"/>
        <rect x="34" y="30" width="20" height="8" rx="2" fill="#F3F4F6"/>
        <rect x="36" y="32" width="16" height="1.5" rx="0.75" fill="#EF4444"/>
        <rect x="36" y="35" width="10" height="1.5" rx="0.75" fill="#6B7280"/>
        <rect x="10" y="42" width="44" height="6" rx="2" fill="#F9FAFB"/>
        <rect x="12" y="44" width="8" height="2" rx="1" fill="#059669"/>
        <rect x="22" y="44" width="8" height="2" rx="1" fill="#F59E0B"/>
        <rect x="32" y="44" width="8" height="2" rx="1" fill="#EF4444"/>
        <rect x="42" y="44" width="10" height="2" rx="1" fill="#3B82F6"/>
        <circle cx="16" cy="45" r="0.5" fill="white"/>
        <circle cx="26" cy="45" r="0.5" fill="white"/>
        <circle cx="36" cy="45" r="0.5" fill="white"/>
        <circle cx="47" cy="45" r="0.5" fill="white"/>
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
        <rect x="8" y="8" width="20" height="18" rx="3" fill="white"/>
        <rect x="10" y="10" width="16" height="4" rx="2" fill="#0066CC"/>
        <text x="18" y="13" text-anchor="middle" fill="white" font-size="6" font-weight="bold">SAP</text>
        <rect x="10" y="16" width="12" height="2" rx="1" fill="#6B7280"/>
        <rect x="10" y="20" width="8" height="2" rx="1" fill="#6B7280"/>
        <rect x="10" y="24" width="6" height="1" rx="0.5" fill="#6B7280"/>
        <rect x="36" y="8" width="20" height="18" rx="3" fill="white"/>
        <rect x="38" y="10" width="16" height="4" rx="2" fill="#FF6B35"/>
        <text x="46" y="13" text-anchor="middle" fill="white" font-size="5" font-weight="bold">WORKDAY</text>
        <rect x="38" y="16" width="14" height="2" rx="1" fill="#6B7280"/>
        <rect x="38" y="20" width="10" height="2" rx="1" fill="#6B7280"/>
        <rect x="38" y="24" width="8" height="1" rx="0.5" fill="#6B7280"/>
        <rect x="16" y="34" width="32" height="24" rx="4" fill="white"/>
        <rect x="20" y="38" width="24" height="4" rx="2" fill="#8B5CF6"/>
        <text x="32" y="41" text-anchor="middle" fill="white" font-size="6" font-weight="bold">INTEGRATION HUB</text>
        <rect x="20" y="46" width="10" height="2" rx="1" fill="#10B981"/>
        <rect x="34" y="46" width="10" height="2" rx="1" fill="#10B981"/>
        <rect x="20" y="50" width="8" height="2" rx="1" fill="#6B7280"/>
        <rect x="36" y="50" width="8" height="2" rx="1" fill="#6B7280"/>
        <path d="M18 30L32 34L46 30" stroke="#10B981" stroke-width="2" fill="none"/>
        <path d="M32 34L18 30M32 34L46 30" stroke="#10B981" stroke-width="2" fill="none"/>
        <circle cx="18" cy="30" r="2" fill="#10B981"/>
        <circle cx="46" cy="30" r="2" fill="#10B981"/>
        <circle cx="32" cy="34" r="2" fill="#10B981"/>
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
        <rect x="6" y="6" width="52" height="44" rx="4" fill="white"/>
        <rect x="6" y="6" width="52" height="12" rx="4" fill="#DC2626"/>
        <rect x="6" y="18" width="52" height="32" rx="0" fill="white"/>
        <text x="32" y="15" text-anchor="middle" fill="white" font-size="7" font-weight="bold">HR TALENT MANAGEMENT</text>
        <rect x="10" y="24" width="44" height="3" rx="1.5" fill="#E5E7EB"/>
        <circle cx="18" cy="32" r="4" fill="#F3F4F6"/>
        <circle cx="18" cy="32" r="2" fill="#DC2626"/>
        <rect x="10" y="40" width="16" height="2" rx="1" fill="#6B7280"/>
        <rect x="10" y="44" width="12" height="1" rx="0.5" fill="#6B7280"/>
        <circle cx="32" cy="32" r="4" fill="#F3F4F6"/>
        <circle cx="32" cy="32" r="2" fill="#DC2626"/>
        <rect x="24" y="40" width="16" height="2" rx="1" fill="#6B7280"/>
        <rect x="24" y="44" width="12" height="1" rx="0.5" fill="#6B7280"/>
        <circle cx="46" cy="32" r="4" fill="#F3F4F6"/>
        <circle cx="46" cy="32" r="2" fill="#DC2626"/>
        <rect x="38" y="40" width="16" height="2" rx="1" fill="#6B7280"/>
        <rect x="38" y="44" width="12" height="1" rx="0.5" fill="#6B7280"/>
        <rect x="10" y="50" width="10" height="2" rx="1" fill="#10B981"/>
        <rect x="24" y="50" width="10" height="2" rx="1" fill="#F59E0B"/>
        <rect x="38" y="50" width="10" height="2" rx="1" fill="#3B82F6"/>
        <circle cx="15" cy="51" r="0.5" fill="white"/>
        <circle cx="29" cy="51" r="0.5" fill="white"/>
        <circle cx="43" cy="51" r="0.5" fill="white"/>
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