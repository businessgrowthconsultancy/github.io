import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  ArrowRight,
  Send,
  Zap
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Direct Contact",
    details: "transform@businessgrowth.consultancy",
    description: "Immediate response within 24 hours"
  },
  {
    icon: Phone,
    title: "Strategic Consultation",
    details: "+1 (555) 987-6543",
    description: "Connect with our growth architects"
  },
  {
    icon: MapPin,
    title: "Innovation Hub",
    details: "Silicon Valley Technology Center",
    description: "San Francisco, CA 94105"
  },
  {
    icon: Clock,
    title: "Availability",
    details: "24/7 Global Operations",
    description: "Worldwide transformation support"
  }
];

const ContactSection = () => {
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
              CONTACT
            </span>
          </div>
          <h2 className="text-h1 lg:text-6xl xl:text-7xl font-black text-foreground mb-8 leading-tight">
            Business.
            <br />
            <span className="text-highlighted">Growth.</span>
            <br />
            Consultancy.
          </h2>
          <p className="text-lead lg:text-xl text-muted-foreground leading-relaxed">
            Ready to <span className="text-highlighted">transform your business</span> into 
            a growth engine? Let's architect your <span className="text-highlighted">success story</span> together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <Card className="p-12 border-0 shadow-card-custom relative overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-vibrant opacity-2"></div>
            
            <div className="relative z-10">
              <h3 className="text-h3 lg:text-4xl font-bold text-foreground mb-8">
                Initiate Transformation
              </h3>
              
              <form className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="firstName" className="text-foreground font-semibold">First Name</Label>
                    <Input id="firstName" placeholder="John" className="bg-background border-border rounded-none p-4" />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="lastName" className="text-foreground font-semibold">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="bg-background border-border rounded-none p-4" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-foreground font-semibold">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@company.com" className="bg-background border-border rounded-none p-4" />
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="company" className="text-foreground font-semibold">Company Name</Label>
                  <Input id="company" placeholder="Your Company" className="bg-background border-border rounded-none p-4" />
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="message" className="text-foreground font-semibold">Transformation Goals</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Describe your growth challenges and transformation objectives..."
                    className="min-h-40 bg-background border-border rounded-none p-4"
                  />
                </div>
                
                <Button variant="hero" size="lg" className="w-full text-lg py-6 h-auto group rounded-none">
                  <Send className="mr-3 h-6 w-6" />
                  Launch Your Transformation
                  <ArrowRight className="ml-3 transition-transform group-hover:translate-x-2" />
                </Button>
              </form>
            </div>
          </Card>

          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h3 className="text-h3 lg:text-4xl font-bold text-foreground mb-8">
                Connect With Our Experts
              </h3>
              <p className="text-lead text-muted-foreground leading-relaxed mb-8">
                Our <span className="text-highlighted">transformation architects</span> are 
                ready to discuss how our proven methodologies can 
                <span className="text-highlighted">accelerate your growth</span>.
              </p>
            </div>

            <div className="grid gap-8">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="p-8 border-0 bg-card shadow-card-custom hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden"
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-none flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                      <info.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2 text-lg">
                        {info.title}
                      </h4>
                      <p className="text-primary font-semibold mb-2">
                        {info.details}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-8 border-0 bg-gradient-accent shadow-glow relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-vibrant opacity-10"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <Zap className="h-8 w-8 text-secondary-foreground mr-4" />
                  <h4 className="font-bold text-secondary-foreground text-xl">
                    Free Growth Intelligence Assessment
                  </h4>
                </div>
                <p className="text-secondary-foreground/90 mb-6 leading-relaxed">
                  Receive a comprehensive analysis of your business growth potential 
                  with strategic insights from our transformation experts.
                </p>
                <Button variant="outline-modern" size="lg" className="rounded-none bg-transparent border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
                  Schedule Assessment
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;