import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "John Smith",
    title: "CEO & Founder",
    photo: "/placeholder.svg"
  },
  {
    name: "Sarah Johnson",
    title: "CTO",
    photo: "/placeholder.svg"
  },
  {
    name: "Michael Chen",
    title: "Lead Developer",
    photo: "/placeholder.svg"
  },
  {
    name: "Emily Rodriguez",
    title: "UI/UX Designer",
    photo: "/placeholder.svg"
  },
  {
    name: "David Wilson",
    title: "DevOps Engineer",
    photo: "/placeholder.svg"
  },
  {
    name: "Lisa Thompson",
    title: "Project Manager",
    photo: "/placeholder.svg"
  },
  {
    name: "Alex Kumar",
    title: "Backend Developer",
    photo: "/placeholder.svg"
  },
  {
    name: "Rachel Green",
    title: "Quality Assurance",
    photo: "/placeholder.svg"
  }
];

export const AboutUs = () => {
  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            About Us
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed">
              At Technoid, we are passionate about transforming businesses through innovative software solutions. 
              Founded with a vision to bridge the gap between cutting-edge technology and practical business needs, 
              we have grown into a trusted partner for enterprises seeking digital transformation. Our team combines 
              technical excellence with deep industry knowledge to deliver solutions that not only meet current 
              requirements but also scale for future growth. We believe in building long-term relationships with 
              our clients, understanding their unique challenges, and crafting bespoke solutions that drive 
              measurable business impact.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Team</h3>
            <p className="text-lg text-muted-foreground">
              Meet the talented individuals who make our success possible
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={member.name}
                className="group hover:shadow-card transition-all duration-300 hover:scale-105 border-0 shadow-sm hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto w-24 h-24 rounded-full overflow-hidden bg-muted">
                    <img 
                      src={member.photo} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">
                      {member.name}
                    </h4>
                    <p className="text-sm text-primary font-medium">
                      {member.title}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};