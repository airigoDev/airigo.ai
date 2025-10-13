import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Shield, Sparkles } from "lucide-react";
import ctaBackground from "@assets/22633c0c9a9263eac15dc7b3f4b754349fe182c0_1759488090224.jpg";

export default function CTA() {
  const handleJoinWaitlist = () => {
    console.log("Join waitlist CTA button clicked");
    alert("Thank you for your interest! Waitlist functionality will be available soon.");
  };

  return (
    <section id="cta-section" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={ctaBackground} 
          alt="Lush green forest with natural sunlight"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
      </div>
      
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
            Join thousands of early adopters who are waiting to experience cleaner air. Sign up for the waitlist today and be the first to know when AiriGo launches.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              variant="outline"
              className="rounded-full bg-white text-primary hover:bg-white/90 border-white/20"
              onClick={handleJoinWaitlist}
              data-testid="button-waitlist-cta"
            >
              Join Waitlist
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
