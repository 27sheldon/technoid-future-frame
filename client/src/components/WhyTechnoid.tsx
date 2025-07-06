import { CheckCircle, Rocket, Users, Shield } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Proven Track Record",
    description: "50+ successful projects across various industries with 98% client satisfaction rate."
  },
  {
    icon: Rocket,
    title: "Cutting-Edge Technology",
    description: "We use the latest technologies and best practices to ensure your software is future-ready."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our senior developers and consultants bring years of experience in enterprise software development."
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Enterprise-grade security measures built into every solution we deliver."
  }
];

export const WhyTechnoid = () => {
  return (
    <section id="why-technoid" className="py-24 relative">
      {/* Translucent background with primary colors */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
      <div className="absolute inset-0 bg-primary/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Why Choose Technoid?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine technical expertise with business acumen to deliver solutions that drive growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mx-auto w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 shadow-card group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                <feature.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};