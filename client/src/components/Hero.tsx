import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/hero_1759488484268.png";
import WaitlistDialog from "./WaitlistDialog";

export default function Hero() {
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const handleJoinWaitlist = () => {
    setDialogOpen(true);
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
            <div className="inline-block">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-6">
                Join the Waitlist Today
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
              Every Breath,
              <span className="block italic font-bold">
                Smarter
              </span>
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-end pt-4">
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-full bg-white text-foreground hover:bg-white/90 border-white"
                onClick={handleJoinWaitlist}
                data-testid="button-waitlist-hero"
              >
                Join Waitlist
                <ArrowRight className="ml-2 h-5 w-5" />
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
      <WaitlistDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  );
}
