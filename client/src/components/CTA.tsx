import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Shield, Sparkles } from "lucide-react";

export default function CTA() {
  const handlePreOrder = () => {
    console.log("Pre-order CTA button clicked");
    alert("Thank you for your interest! Pre-order functionality will be available soon.");
  };

  return (
    <section id="cta-section" className="py-20 sm:py-32 bg-gradient-to-br from-primary via-primary to-chart-2 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center space-y-8">
          <div className="inline-block">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold">
              <Sparkles className="h-4 w-4 mr-2" />
              Limited Time Offer
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Ready to Breathe Smarter?
          </h2>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Join thousands of early adopters who are already experiencing cleaner air. Pre-order AiriGo today and get exclusive launch pricing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              variant="outline"
              className="rounded-full bg-white text-primary hover:bg-white/90 border-white/20"
              onClick={handlePreOrder}
              data-testid="button-preorder-cta"
            >
              Pre-Order Now - $199
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-white/90">
            <div className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              <span className="text-sm font-medium">Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span className="text-sm font-medium">30-Day Money Back</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-medium">2-Year Warranty</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
