import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Award, Users, Target, Zap } from "lucide-react";

const achievements = [
  {
    icon: Users,
    number: "500+",
    label: "Transformations",
    description: "Companies revolutionized across industries"
  },
  {
    icon: Target,
    number: "4.7x",
    label: "Average Growth",
    description: "Exponential returns delivered consistently"
  },
  {
    icon: Award,
    number: "15+",
    label: "Years Innovation",
    description: "Pioneering business transformation methodologies"
  },
  {
    icon: Zap,
    number: "99%",
    label: "Success Rate",
    description: "Unparalleled track record of achievement"
  }
];

const expertise = [
  "Advanced AI-driven market intelligence",
  "Revolutionary operational transformation",
  "Next-generation revenue optimization",
  "Cutting-edge technology integration", 
  "Breakthrough innovation catalysis",
  "High-performance team architecture"
];

const AboutSection = () => {
  return (
    <section className="py-32 bg-background relative">
      {/* Geometric accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <div className="mb-8">
              <span className="text-primary font-bold text-lg tracking-widest uppercase">
                REVOLUTIONARY APPROACH
              </span>
            </div>
            
            <h2 className="text-h1 lg:text-6xl xl:text-7xl font-black text-foreground mb-8 leading-tight">
              Your
              <br />
              <span className="text-highlighted">Transformation</span>
              <br />
              Partners.
            </h2>
            
            <p className="text-lead lg:text-xl text-muted-foreground mb-8 leading-relaxed">
              With over <span className="text-highlighted">15 years</span> of pioneering 
              business transformation, we've revolutionized companies across industries 
              through <span className="text-highlighted">advanced methodologies</span> and 
              <span className="text-highlighted">cutting-edge technology</span>.
            </p>
            
            <p className="text-lead lg:text-xl text-muted-foreground mb-12 leading-relaxed">
              We don't just consult—we <span className="text-highlighted">architect futures</span>. 
              Our data-centric approach combines <span className="text-highlighted">strategic intelligence</span> with 
              breakthrough innovation to deliver <span className="text-highlighted">exponential growth</span>.
            </p>
            
            <div className="space-y-4 mb-12">
              {expertise.map((item, index) => (
                <div key={index} className="flex items-center group">
                  <div className="w-3 h-3 bg-primary rounded-none mr-6 flex-shrink-0 group-hover:bg-secondary transition-colors duration-300"></div>
                  <span className="text-foreground group-hover:text-primary transition-colors duration-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <Button variant="modern" size="lg" className="text-lg px-12 py-6 h-auto rounded-none">
              Discover Our Methodology
            </Button>
          </div>
          
          <div className="relative">
            {/* Abstract geometric design instead of photos */}
            <div className="grid grid-cols-2 gap-6 h-96">
              <div className="bg-gradient-primary rounded-none shadow-glow flex items-center justify-center">
                <div className="text-6xl font-black text-primary-foreground opacity-20">01</div>
              </div>
              <div className="bg-gradient-accent rounded-none shadow-card-custom mt-12 flex items-center justify-center">
                <div className="text-6xl font-black text-secondary-foreground opacity-20">02</div>
              </div>
              <div className="bg-card rounded-none shadow-elevated -mt-12 flex items-center justify-center">
                <div className="text-6xl font-black text-foreground opacity-20">03</div>
              </div>
              <div className="bg-gradient-vibrant rounded-none shadow-glow flex items-center justify-center">
                <div className="text-6xl font-black text-foreground opacity-20">04</div>
              </div>
            </div>
            
            {/* Floating geometric elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-primary rounded-none opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-secondary rounded-full opacity-40 animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="p-8 text-center border-0 bg-card shadow-card-custom hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-primary rounded-none flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                  <achievement.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-4xl font-black text-primary mb-3 group-hover:text-highlighted">
                  {achievement.number}
                </div>
                <div className="text-lg font-bold text-foreground mb-3">
                  {achievement.label}
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  {achievement.description}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;