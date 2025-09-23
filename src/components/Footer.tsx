import { Zap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        {/* Main Footer Content */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-gradient-primary rounded-none flex items-center justify-center shadow-glow">
              <Zap className="h-8 w-8 text-primary-foreground" />
            </div>
            <span className="text-4xl font-black text-foreground">
              Business.<span className="text-highlighted">Growth</span>.
              <br />
              <span className="text-2xl">Consultancy</span>
            </span>
          </div>
          
          <p className="text-lead text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            <span className="text-highlighted">Transforming businesses</span> through 
            cutting-edge strategies and <span className="text-highlighted">data-driven intelligence</span>.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2 text-primary" />
              transform@businessgrowth.consultancy
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-primary" />
              +1 (555) 987-6543
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-primary" />
              San Francisco, CA 94105
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Business Growth Consultancy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;