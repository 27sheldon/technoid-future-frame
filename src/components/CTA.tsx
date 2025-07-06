import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 bg-gradient-primary">
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
            <Button 
              variant="outline-white" 
              size="lg" 
              className="group text-lg px-8 py-4 h-auto"
            >
              <MessageCircle className="group-hover:scale-110 transition-transform" />
              Get Free Consultation
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline-white" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto hover:scale-105 transition-all"
            >
              View Case Studies
            </Button>
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