import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/Hero_1759487758102.png";

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
          alt="Woman relaxing peacefully while wearing AiriGo device - Breathe Smart, Live Free"
          className="w-full h-full object-cover"
          data-testid="img-hero-background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
      </div>
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-primary text-sm font-semibold shadow-lg">
                Now Available for Pre-Order
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight drop-shadow-lg">
              Every Breath,
              <span className="block">
                Smarter
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/95 leading-relaxed drop-shadow-md">
              Meet AiriGo, your pocket-sized AI air companion. Combining friendly design with serious AI-powered technology to scan air quality and generate cleaner air bubbles wherever you go.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="rounded-full shadow-xl"
                onClick={handlePreOrder}
                data-testid="button-preorder-hero"
              >
                Pre-Order Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full bg-white/90 backdrop-blur-sm text-foreground border-white/50 hover:bg-white shadow-lg"
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
            
            <div className="flex items-center gap-8 text-sm text-white/95 pt-4">
              <div className="flex items-center gap-2 drop-shadow-md">
                <div className="w-2 h-2 rounded-full bg-primary shadow-lg shadow-primary/50" />
                <span className="font-medium">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2 drop-shadow-md">
                <div className="w-2 h-2 rounded-full bg-primary shadow-lg shadow-primary/50" />
                <span className="font-medium">30-Day Trial</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
