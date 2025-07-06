import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "SaaS Development",
    description: "Custom SaaS platforms built for scale, performance, and user experience. From MVP to enterprise-grade solutions.",
    features: ["React & Node.js", "Cloud Architecture", "API Development", "Database Design"],
    imageUrl: "/placeholder.svg" // Replace with your uploaded image
  },
  {
    title: "Internal Tools",
    description: "Streamline your operations with custom internal tools that integrate seamlessly with your existing workflows.",
    features: ["Process Automation", "Dashboard Creation", "Workflow Tools", "Team Collaboration"],
    imageUrl: "/placeholder.svg" // Replace with your uploaded image
  },
  {
    title: "ERP Integration",
    description: "Connect and optimize your business systems with seamless ERP integrations and data synchronization.",
    features: ["System Integration", "Data Migration", "API Connections", "Process Optimization"],
    imageUrl: "/placeholder.svg" // Replace with your uploaded image
  },
  {
    title: "Cloud & DevOps",
    description: "Modern cloud infrastructure and DevOps practices that ensure reliability, scalability, and security.",
    features: ["AWS/Azure Setup", "CI/CD Pipelines", "Container Deployment", "Monitoring & Security"],
    imageUrl: "/placeholder.svg" // Replace with your uploaded image
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
                    className="w-16 h-16 object-cover rounded-lg"
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