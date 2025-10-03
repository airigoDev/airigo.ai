import { SiX, SiInstagram, SiFacebook } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">AiriGo</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your pocket-sized AI air companion, making every breath smarter.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features-section" className="text-sm text-muted-foreground hover-elevate inline-block" data-testid="link-features">
                  Features
                </a>
              </li>
              <li>
                <a href="#cta-section" className="text-sm text-muted-foreground hover-elevate inline-block" data-testid="link-pricing">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover-elevate inline-block" data-testid="link-specs">
                  Specifications
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover-elevate inline-block" data-testid="link-about">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover-elevate inline-block" data-testid="link-contact">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover-elevate inline-block" data-testid="link-support">
                  Support
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Follow Us</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="p-2 rounded-lg hover-elevate text-muted-foreground"
                data-testid="link-twitter"
                aria-label="X (Twitter)"
              >
                <SiX className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg hover-elevate text-muted-foreground"
                data-testid="link-instagram"
                aria-label="Instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg hover-elevate text-muted-foreground"
                data-testid="link-facebook"
                aria-label="Facebook"
              >
                <SiFacebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} AiriGo. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover-elevate" data-testid="link-privacy">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover-elevate" data-testid="link-terms">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
