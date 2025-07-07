import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Logo from "@/assets/logo.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo Image Section - Restored to original size */}
          <div className="flex items-center space-x-2">
            <img
              src={Logo}
              alt="Technoid Logo"
              className="h-20 max-w-[220px] object-contain drop-shadow-md"
            />
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#why-technoid" className="text-muted-foreground hover:text-primary transition-colors">
              Why Us
            </a>
            <a href="#clients" className="text-muted-foreground hover:text-primary transition-colors">
              Clients
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <a
              href="https://technoidai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary transition-colors"
            >
              Technoid India
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};
