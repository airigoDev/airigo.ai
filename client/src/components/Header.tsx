import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImage from "@assets/airigo-logo_1759758427602.png";
import WaitlistDialog from "./WaitlistDialog";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleJoinWaitlist = () => {
    setDialogOpen(true);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Features", id: "features-section" },
    { label: "Benefits", id: "benefits-section" },
    { label: "Specifications", id: "specifications-section" },
  ];

  return (
    <header className="absolute top-0 z-50 w-full bg-white/10 dark:bg-black/10 backdrop-blur supports-[backdrop-filter]:bg-white/5 dark:supports-[backdrop-filter]:bg-black/5">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover-elevate active-elevate-2 rounded-md transition-all"
            data-testid="button-logo"
          >
            <img 
              src={logoImage} 
              alt="AiriGo Logo" 
              className="h-8 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                data-testid={`link-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              size="default"
              variant="outline"
              className="rounded-full bg-white/20 backdrop-blur-sm text-white border-white hover:bg-white/30"
              onClick={handleJoinWaitlist}
              data-testid="button-waitlist-header"
            >
              Join Waitlist
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover-elevate active-elevate-2 rounded-md text-white bg-white/10 backdrop-blur-sm border border-white/20"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 mb-4 rounded-lg border border-white/20 bg-black/60 backdrop-blur-xl" data-testid="mobile-menu">
            <div className="p-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-base font-medium text-white/90 hover:text-white hover-elevate active-elevate-2 rounded-md transition-all"
                  data-testid={`link-mobile-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3">
                <Button
                  size="default"
                  variant="outline"
                  className="w-full rounded-full bg-white/20 backdrop-blur-sm text-white border-white hover:bg-white/30"
                  onClick={handleJoinWaitlist}
                  data-testid="button-waitlist-mobile"
                >
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      <WaitlistDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </header>
  );
}
