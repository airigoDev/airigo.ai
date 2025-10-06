import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handlePreOrder = () => {
    scrollToSection("cta-section");
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
            className="text-2xl font-bold text-white hover-elevate active-elevate-2 px-3 py-1 rounded-md transition-all"
            data-testid="button-logo"
          >
            AiriGo
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
              onClick={handlePreOrder}
              data-testid="button-preorder-header"
            >
              Pre Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover-elevate active-elevate-2 rounded-md text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/20 py-4 space-y-4 bg-black/40 backdrop-blur-md" data-testid="mobile-menu">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-white/80 hover:text-white hover-elevate active-elevate-2 rounded-md transition-all"
                data-testid={`link-mobile-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2">
              <Button
                size="default"
                variant="outline"
                className="w-full rounded-full bg-white/20 backdrop-blur-sm text-white border-white hover:bg-white/30"
                onClick={handlePreOrder}
                data-testid="button-preorder-mobile"
              >
                Pre Order Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
