import { MapPin, Plane, Briefcase } from "lucide-react";
import cityWalkingImage from "@assets/d4c7a7418ec6c61c4bc4299295e45e9e38cf2b9e_1759487470297.png";
import workingIndoorsImage from "@assets/3fb6b1b40823ab883d878e87d37b86df701feecb_1759487528701.png";

const benefits = [
  {
    icon: MapPin,
    title: "City Walking",
    description: "Navigate urban environments with confidence. AiriGo monitors pollution levels and creates a protective bubble of clean air as you explore the city.",
    stats: ["99.9% particle filtration", "Real-time air quality alerts", "6-hour battery life"],
    image: cityWalkingImage,
    imageAlt: "Woman wearing AiriGo device while walking in a busy city environment"
  },
  {
    icon: Plane,
    title: "Traveling",
    description: "Your perfect travel companion. Compact enough for any bag, powerful enough to keep you breathing clean air in airports, planes, and hotel rooms.",
    stats: ["TSA-approved design", "Global air quality database", "USB-C fast charging"],
    image: null,
    imageAlt: ""
  },
  {
    icon: Briefcase,
    title: "Working Indoors",
    description: "Create your own clean air workspace. Silent operation won't disturb colleagues while improving focus and reducing fatigue in any indoor environment.",
    stats: ["Whisper-quiet <25dB", "Desk-friendly design", "Smart auto-adjust mode"],
    image: workingIndoorsImage,
    imageAlt: "Professional woman wearing AiriGo while working at her office desk"
  }
];

export default function Benefits() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            Designed for Your Life
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're exploring the city, traveling the world, or working from your desk, AiriGo adapts to your lifestyle.
          </p>
        </div>
        
        <div className="space-y-24">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              data-testid={`section-benefit-${index}`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10">
                  <benefit.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-semibold text-primary">Use Case</span>
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-bold text-foreground">
                  {benefit.title}
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
                
                <ul className="space-y-3 pt-4">
                  {benefit.stats.map((stat, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-foreground font-medium">{stat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                {benefit.image ? (
                  <div className="aspect-square rounded-3xl overflow-hidden">
                    <img 
                      src={benefit.image} 
                      alt={benefit.imageAlt}
                      className="w-full h-full object-cover"
                      data-testid={`img-benefit-${index}`}
                    />
                  </div>
                ) : (
                  <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-muted to-chart-2/20 flex items-center justify-center">
                    <benefit.icon className="h-32 w-32 text-primary/30" strokeWidth={1} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
