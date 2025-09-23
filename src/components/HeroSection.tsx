import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-primary rounded-full opacity-20 blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-accent rounded-lg opacity-30 blur-lg animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-secondary rounded-full opacity-25 blur-md animate-pulse delay-500"></div>
        <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 geometric-border">
        <div className="max-w-5xl">
          <div className="mb-8">
            <span className="text-primary font-bold text-lg tracking-widest uppercase">
              EXPERIENCE A NEW DIMENSION
            </span>
          </div>
          
          <h1 className="text-hero lg:text-8xl xl:text-9xl font-black text-foreground mb-8 leading-tight">
            Business.
            <br />
            <span className="text-highlighted">
              Growth.
            </span>
            <br />
            Consultancy.
          </h1>
          
          <div className="mb-12 max-w-4xl">
            <p className="text-lead lg:text-xl xl:text-2xl text-foreground leading-relaxed mb-6">
              Experience a <span className="text-highlighted">new dimension</span> of 
              business strategy fuelled by <span className="text-highlighted">the art</span> and{" "}
              <span className="text-highlighted">science</span> of business{" "}
              <span className="text-highlighted">growth</span>.
            </p>
            <p className="text-lead lg:text-xl xl:text-2xl text-foreground leading-relaxed">
              We fuse brand building with <span className="text-highlighted">cutting-edge</span>{" "}
              technology to overhaul outdated operations, helping you{" "}
              <span className="text-highlighted">scale</span> and{" "}
              <span className="text-highlighted">boost</span> profitability. With over a decade
              of experience in the SaaS, DaaS, and Retail/E-commerce sectors, we translate{" "}
              <span className="text-highlighted">complex</span> business goals into{" "}
              <span className="text-highlighted">clear, actionable</span> insights.
            </p>
          </div>
          
          <div className="mb-16">
            <p className="text-lead lg:text-xl xl:text-2xl text-foreground leading-relaxed">
              Our <span className="text-highlighted">data-centric</span> approach doesn't
              just find <span className="text-primary">new</span>{" "}
              <span className="text-highlighted">opportunities</span>—it challenges
              conventional business <span className="text-primary">boundaries</span>. 
              We believe in <span className="text-highlighted">active collaboration</span>,
              empowering you and your team with the tools and understanding needed
              for lasting <span className="text-highlighted">success</span>.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-20">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-12 py-6 h-auto group rounded-none"
            >
              Transform Your Business
              <ArrowRight className="ml-3 transition-transform group-hover:translate-x-2" />
            </Button>
            
            <Button 
              variant="outline-hero" 
              size="lg" 
              className="text-lg px-12 py-6 h-auto rounded-none"
            >
              Explore Our Approach
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;