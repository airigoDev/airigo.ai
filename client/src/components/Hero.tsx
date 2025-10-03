import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/hero_1759488484268.png";

export default function Hero() {
  const handlePreOrder = () => {
    console.log("Pre-order button clicked");
    const ctaSection = document.getElementById("cta-section");
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Person relaxing peacefully on grass wearing AiriGo device for clean air"
          className="w-full h-full object-cover"
          data-testid="img-hero-product"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50" />
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-2xl">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                Now Available for Pre-Order
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
              Every Breath,
              <span className="block bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
                Smarter
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Meet AiriGo, your pocket-sized AI air companion. Combining friendly design with serious AI-powered technology to scan air quality and generate cleaner air bubbles wherever you go.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="rounded-full"
                onClick={handlePreOrder}
                data-testid="button-preorder-hero"
              >
                Pre-Order Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full bg-background/60 backdrop-blur-sm"
                onClick={() => {
                  const featuresSection = document.getElementById("features-section");
                  if (featuresSection) {
                    featuresSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                data-testid="button-learn-more"
              >
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center gap-8 text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Free Shipping</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
