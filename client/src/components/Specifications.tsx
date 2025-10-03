import { Battery, Cpu, Ruler, Zap } from "lucide-react";

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
    value: "6-8 hours",
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
    value: "10M ions/sec",
    detail: "Adjustable intensity"
  }
];

export default function Specifications() {
  return (
    <section className="py-20 sm:py-32 bg-background">
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
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((spec, index) => (
            <div 
              key={index}
              className="text-center space-y-4 p-6 rounded-2xl hover-elevate transition-all duration-300"
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
      </div>
    </section>
  );
}
