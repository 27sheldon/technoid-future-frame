      import { Mail, Phone, MapPin } from "lucide-react";
      import Logo from "@/assets/logo.png";

      const services = [
        "SaaS Development",
        "Internal Tools",
        "ERP Integration",
        "Cloud & DevOps",
        "Digital Transformation",
        "API Development",
      ];

      const company = [
        "About Us",
        "Our Team",
        "Case Studies",
        "Careers",
        "Blog",
        "Contact",
      ];

      export const Footer = () => {
        return (
          <footer className="bg-foreground text-white py-16">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
                {/* Company Info */}
                <div className="space-y-6 text-center md:text-left">
                  <div className="mb-2">
                    <img
                      src={Logo}
                      alt="Technoid Logo"
                      className="h-24 mx-auto md:mx-0 brightness-[1.4] contrast-[1.3]"
                    />
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    <strong>Building Tomorrow's Software, Today.</strong> Technoid is a
                    software-first IT consultancy delivering scalable SaaS solutions, ERP
                    integrations, internal tools, and digital transformation services for modern businesses.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center md:justify-start space-x-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <span className="text-white/80">hr@technoidusa.com</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start space-x-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <span className="text-white/80">+1 (929) 496-9494</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start space-x-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="text-white/80">
                        Head Office- 611 South DuPont Highway, Suite 102, Dover, DE 19901</span>
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Services</h3>
                  <ul className="space-y-3">
                    {services.map((service) => (
                      <li key={service}>
                        <a
                          href="#"
                          className="text-white/80 hover:text-primary transition-colors duration-200"
                        >
                          {service}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Company</h3>
                  <ul className="space-y-3">
                    {company.map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-white/80 hover:text-primary transition-colors duration-200"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Stay Updated</h3>
                  <p className="text-white/80">
                    Subscribe to our newsletter for the latest insights and updates.
                  </p>
                  <div className="space-y-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button className="w-full py-3 bg-primary rounded-lg font-semibold hover:bg-primary/90 transition">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-center text-sm text-white/50">
                © {new Date().getFullYear()} Technoid. All rights reserved.
              </div>
            </div>
          </footer>
        );
      };
