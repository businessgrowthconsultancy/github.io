import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Zap, 
  Target, 
  Users, 
  BarChart3, 
  Lightbulb,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Strategic Intelligence",
    description: "Revolutionary market analysis and strategic frameworks that identify untapped potential and create sustainable competitive moats.",
    features: ["AI-Powered Market Intelligence", "Competitive Disruption Analysis", "Strategic Future-Proofing", "Growth Vector Modeling"]
  },
  {
    icon: Zap,
    title: "Revenue Acceleration",
    description: "Data-driven revenue optimization engines that maximize value streams and transform customer economics through advanced analytics.",
    features: ["Dynamic Pricing Intelligence", "Revenue Stream Engineering", "Customer Value Optimization", "Predictive Revenue Analytics"]
  },
  {
    icon: Target,
    title: "Operational Transformation",
    description: "Next-generation operational frameworks that eliminate inefficiencies and implement intelligent automation for exponential performance gains.",
    features: ["Process Automation Architecture", "Intelligent Workflow Design", "Performance Optimization Systems", "Cost Engineering Solutions"]
  },
  {
    icon: Users,
    title: "Human Performance Engineering",
    description: "Build high-velocity teams and develop leadership capabilities through scientific approaches to organizational psychology and performance.",
    features: ["Leadership Acceleration Programs", "High-Performance Team Architecture", "Culture Engineering", "Performance Amplification Systems"]
  },
  {
    icon: BarChart3,
    title: "Intelligence Systems",
    description: "Transform data chaos into strategic intelligence with advanced analytics, machine learning, and real-time business intelligence platforms.",
    features: ["AI-Powered Business Intelligence", "Predictive Analytics Engines", "Real-Time Performance Dashboards", "Strategic Data Architecture"]
  },
  {
    icon: Lightbulb,
    title: "Innovation Catalyst",
    description: "Foster breakthrough innovation mindset, develop cutting-edge solutions, and implement emerging technologies for market disruption.",
    features: ["Innovation Lab Development", "Disruptive Technology Integration", "Future-Ready Solutions", "Digital Transformation Acceleration"]
  }
];

const ServicesSection = () => {
  return (
    <section className="py-32 bg-gradient-subtle relative">
      {/* Geometric accent elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-24">
          <div className="mb-8">
            <span className="text-primary font-bold text-lg tracking-widest uppercase">
              COMPREHENSIVE SOLUTIONS
            </span>
          </div>
          <h2 className="text-h1 lg:text-6xl xl:text-7xl font-black text-foreground mb-8 leading-tight">
            Next-Generation
            <br />
            <span className="text-highlighted">Business Architecture</span>
          </h2>
          <p className="text-lead lg:text-xl text-muted-foreground leading-relaxed">
            Our integrated approach combines <span className="text-highlighted">cutting-edge technology</span> with 
            proven methodologies to deliver <span className="text-highlighted">transformational results</span> across 
            every dimension of your business ecosystem.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-elevated transition-all duration-500 border-0 bg-card shadow-card-custom group hover:-translate-y-3 relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-vibrant opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-none flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-h3 font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>
                
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-none mr-4 mt-2"></div>
                      <span className="group-hover:text-foreground transition-colors duration-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="modern" size="lg" className="text-lg px-12 py-6 h-auto group rounded-none">
            Accelerate Your Transformation
            <ArrowRight className="ml-3 transition-transform group-hover:translate-x-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;