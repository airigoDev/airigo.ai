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
    <section className="relative min-h-screen flex items-center justify-end overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Person relaxing peacefully on grass wearing AiriGo device for clean air"
          className="w-full h-full object-cover"
          data-testid="img-hero-product"
        />
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-xl ml-auto text-right">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
              BREATHE SMART
              <span className="block italic font-bold">
                LIVE FREE
              </span>
            </h1>
            
            <div className="pt-4">
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-full bg-white text-foreground hover:bg-white/90 border-white"
                onClick={handlePreOrder}
                data-testid="button-preorder-hero"
              >
                PRE-ORDER NOW
              </Button>
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
