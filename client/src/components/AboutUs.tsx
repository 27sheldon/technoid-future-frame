// src/components/Services.tsx

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import SaaSImg from "@/assets/SaaS.png";
import InternalImg from "@/assets/internal.png";
import ERPImg from "@/assets/ERP.png";
import StaffingImg from "@/assets/staffing.png"; // ✅ Use the image you just uploaded

const services = [
  {
    title: "SaaS Development",
    description:
      "Custom SaaS platforms built for scale, performance, and user experience. From MVP to enterprise-grade solutions.",
    features: [
      "React & Node.js",
      "Cloud Architecture",
      "API Development",
      "Database Design",
    ],
    imageUrl: SaaSImg,
  },
  {
    title: "Internal Tools",
    description:
      "Streamline your operations with custom internal tools that integrate seamlessly with your existing workflows.",
    features: [
      "Process Automation",
      "Dashboard Creation",
      "Workflow Tools",
      "Team Collaboration",
    ],
    imageUrl: InternalImg,
  },
  {
    title: "ERP Integration",
    description:
      "Connect and optimize your business systems with seamless ERP integrations and data synchronization.",
    features: [
      "System Integration",
      "Data Migration",
      "API Connections",
      "Process Optimization",
    ],
    imageUrl: ERPImg,
  },
  {
    title: "IT Staffing",
    description:
      "Strategic staffing solutions to help you build and scale high-performing tech teams quickly and cost-effectively.",
    features: [
      "Dedicated Developers",
      "Flexible Hiring Models",
      "Talent Screening",
      "Contract & Full-Time Staff",
    ],
    imageUrl: StaffingImg,
  },
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
                <div className="w-full h-60 rounded-2xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-2xl"
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
                    <li
                      key={feature}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
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
