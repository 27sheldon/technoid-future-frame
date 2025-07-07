import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export const Hero = () => {
  return <section className="bg-gradient-hero min-h-screen flex items-center py-20 pt-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-foreground">
                <span className="text-primary">Building</span>
                <br />
                <span className="text-4xl lg:text-5xl">Tomorrow's Software,</span>
                <br />
                <span className="text-primary">Today.</span>
              </h1>

              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                We're a software-first IT consultancy specializing in SaaS development, 
                enterprise tools, and digital transformation that drives real business impact.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="hero" size="lg" className="group">
                    Start Your Project
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Let's Get Started</DialogTitle>
                  </DialogHeader>
                  <form className="space-y-4">
                    <Input type="text" placeholder="Full Name" required />
                    <Input type="email" placeholder="Email Address" required />
                    <Input type="tel" placeholder="Phone Number" required />
                    <Input type="text" placeholder="Company Name" />
                    <Button type="submit" className="w-full">Submit</Button>
                  </form>
                </DialogContent>
              </Dialog>

              
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