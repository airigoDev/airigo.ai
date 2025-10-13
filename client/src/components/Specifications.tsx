import { Battery, Cpu, Ruler, Zap } from "lucide-react";
import productImage from "@assets/gemini-2.5-flash-image-preview_A_high-resolution_product_render_of_the_I-ON_wearable_device_shown_in_a_clean_front-facing_view._Mi-0 1_1759489531363.png";

const specs = [
  {
    icon: Ruler,
    label: "Dimensions",
    value: "2.5\" × 1.8\" × 0.4\"",
    detail: "Fits in any pocket"
  },
  {
    icon: Battery,
    label: "Battery Life",
    value: "20-24 hours",
    detail: "USB-C fast charging"
  },
  {
    icon: Cpu,
    label: "AI Processing",
    value: "Neural engine",
    detail: "Real-time analysis"
  },
  {
    icon: Zap,
    label: "Ion Output",
    value: "750,000 ions/cm³",
    detail: "Japan Association of Ion certified"
  }
];

export default function Specifications() {
  return (
    <section id="specifications-section" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            Powerful Specs,
            <span className="block text-primary">Pocket-Sized Package</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advanced technology packed into a device small enough to take anywhere.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left Column - First 2 specs */}
            <div className="space-y-12">
              {specs.slice(0, 2).map((spec, index) => (
                <div 
                  key={index}
                  className="text-center lg:text-right space-y-4"
                  data-testid={`spec-${index}`}
                >
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-chart-2/10">
                    <spec.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">
                      {spec.label}
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      {spec.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {spec.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Center - Product Image */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-chart-2/20 rounded-full blur-3xl" />
                <img 
                  src={productImage} 
                  alt="AiriGo device - pocket-sized AI air quality companion"
                  className="relative w-full max-w-xs mx-auto drop-shadow-2xl"
                  data-testid="img-specs-product"
                />
              </div>
            </div>
            
            {/* Right Column - Last 2 specs */}
            <div className="space-y-12">
              {specs.slice(2, 4).map((spec, index) => (
                <div 
                  key={index + 2}
                  className="text-center lg:text-left space-y-4"
                  data-testid={`spec-${index + 2}`}
                >
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-chart-2/10">
                    <spec.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">
                      {spec.label}
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      {spec.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {spec.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
