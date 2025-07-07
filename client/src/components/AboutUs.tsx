import { Briefcase, Code, Globe, Users } from "lucide-react";

export const AboutUs = () => {
  return (
    <section id="about" className="py-24 relative">
      {/* Translucent background with primary colors */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
      <div className="absolute inset-0 bg-primary/5"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4 max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            About Us
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            At Technoid, we build intelligent digital products and platforms for fast-growing companies and global enterprises.
            With a team rooted in engineering, design, and innovation, we deliver tailored software that transforms how businesses operate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="text-center space-y-4 p-6 bg-white shadow-md rounded-2xl">
            <Briefcase className="mx-auto w-10 h-10 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">Business-Centric</h3>
            <p className="text-muted-foreground text-sm">
              We solve real business problems with scalable, reliable technology that adapts as you grow.
            </p>
          </div>

          <div className="text-center space-y-4 p-6 bg-white shadow-md rounded-2xl">
            <Code className="mx-auto w-10 h-10 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">Engineering Excellence</h3>
            <p className="text-muted-foreground text-sm">
              Our software is built with precision, using modern tools and best practices across full-stack development.
            </p>
          </div>

          <div className="text-center space-y-4 p-6 bg-white shadow-md rounded-2xl">
            <Users className="mx-auto w-10 h-10 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">Human-First</h3>
            <p className="text-muted-foreground text-sm">
              We listen closely, iterate quickly, and partner deeply with our clients to create meaningful results.
            </p>
          </div>

          <div className="text-center space-y-4 p-6 bg-white shadow-md rounded-2xl">
            <Globe className="mx-auto w-10 h-10 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">Global Impact</h3>
            <p className="text-muted-foreground text-sm">
              We serve organizations across continents—delivering global reach with local understanding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
