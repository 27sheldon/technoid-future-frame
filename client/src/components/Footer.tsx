import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/assets/logo.png"; // Ensure logo.png is placed in src/assets

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
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6 text-center md:text-left">
            <div className="mb-4">
              <img
                src={Logo}
                alt="Technoid Logo"
                className="h-20 object-contain mx-auto md:mx-0"
              />
            </div>
            <p className="text-white/80 leading-relaxed">
              Building Tomorrow's Software, Today. Technoid is a software-first IT
              consultancy delivering scalable SaaS solutions, ERP integrations,
              internal tools, and digital transformation services for modern businesses.
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
                <span className="text-white/80">USA & India</span>
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
