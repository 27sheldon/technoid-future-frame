import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechFlow Solutions",
    company: "TechFlow",
    content: "Technoid transformed our legacy system into a modern, scalable SaaS platform. Their expertise in both technical implementation and business strategy was invaluable.",
    rating: 5,
    initials: "SJ"
  },
  {
    name: "Michael Chen",
    role: "CEO, DataSync Corp",
    company: "DataSync",
    content: "The ERP integration project was completed on time and exceeded our expectations. Our operational efficiency improved by 40% within the first quarter.",
    rating: 5,
    initials: "MC"
  },
  {
    name: "Emily Rodriguez",
    role: "VP of Operations, CloudTech",
    company: "CloudTech",
    content: "Working with Technoid was a game-changer. Their custom internal tools streamlined our entire workflow and saved us countless hours each week.",
    rating: 5,
    initials: "ER"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear from the companies we've helped transform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="group hover:shadow-card transition-all duration-300 hover:scale-105 border-0 shadow-sm hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8 space-y-6">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <blockquote className="text-foreground leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};