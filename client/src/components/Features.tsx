import { Brain, Sparkles, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "AI Powered Air Sensor",
    description: "Advanced neural networks analyze air composition in real-time, detecting pollutants, allergens, and harmful particles with laboratory-grade precision in a pocket-sized device.",
    color: "text-chart-2"
  },
  {
    icon: Sparkles,
    title: "Smart iON Generator",
    description: "Proprietary technology creates millions of negative ions per second, generating clean air bubbles around you. Smart algorithms adjust output based on environmental conditions.",
    color: "text-primary"
  },
  {
    icon: Heart,
    title: "Portable & Fun Design",
    description: "Sleek, lightweight companion that fits in your pocket. Friendly interface with an expressive display makes air quality monitoring delightful. Take cleaner air everywhere you go.",
    color: "text-destructive"
  }
];

export default function Features() {
  return (
    <section id="features-section" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            Smart Technology,
            <span className="block text-primary">Simple to Use</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three powerful features working together to give you the cleanest air, wherever life takes you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 hover-elevate transition-all duration-300 border-card-border bg-card"
              data-testid={`card-feature-${index}`}
            >
              <div className="space-y-6">
                <div className={`inline-flex p-4 rounded-2xl bg-muted ${feature.color}`}>
                  <feature.icon className="h-8 w-8" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
