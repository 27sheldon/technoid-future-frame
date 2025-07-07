import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";


export const CTA = () => {
  return (
      <section
        className="py-24 backdrop-blur-sm bg-[linear-gradient(135deg,hsl(4,81%,45%,0.9),hsl(4,81%,35%,0.9))]"
      >
      <div className="container mx-auto px-6">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how we can help you build the software solutions that will drive your business forward.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="outline-white" 
                  size="lg" 
                  className="group text-lg px-8 py-4 h-auto"
                >
                  <MessageCircle className="group-hover:scale-110 transition-transform" />
                  Get Free Consultation
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-white text-black">
                <DialogHeader>
                  <DialogTitle>Get Free Consultation</DialogTitle>
                </DialogHeader>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  alert("Form submitted (you can integrate backend later)");
                }} className="space-y-4">
                  <Input placeholder="Name" required />
                  <Input type="email" placeholder="Email" required />
                  <Input type="tel" placeholder="Phone Number" required />
                  <Input placeholder="Company (optional)" />
                  <Button type="submit" className="w-full">Submit</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row justify-center items-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Free 30-minute consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>No obligation proposal</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Quick project assessment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};