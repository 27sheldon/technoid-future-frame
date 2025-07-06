import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";
export const Hero = () => {
  return <section className="bg-gradient-hero min-h-screen flex items-center py-20 pt-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-foreground">
                Building Tomorrow's
                <span className="text-primary block">Software, Today.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                We're a software-first IT consultancy specializing in SaaS development, 
                enterprise tools, and digital transformation that drives real business impact.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Start Your Project
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="hover:scale-105 transition-all">
                View Our Work
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">25K+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in delay-200">
            <div className="relative z-10">
              <img src={heroDashboard} alt="Modern SaaS Dashboard" className="w-full h-auto rounded-2xl shadow-hero hover:shadow-xl transition-all duration-500 hover:scale-105" />
            </div>
            <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-primary rounded-2xl opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>;
};