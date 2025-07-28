import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Zap, Crown, Star } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Mánaðarlegt",
    description: "Fullkomið til að koma sér af stað",
    price: 19.995,
    originalPrice: null,
    billing: "á mánuði",
    icon: Zap,
    popular: false,
    features: [
      "Sérsniðið æfingaplan",
      "Næringarráðgjöf",
      "Árangurs Mælingar",
      "Næringarþjálfun",
      "Kennslumyndbönd",
      "Vikuleg check-ins"
    ]
  },
  {
    name: "3-Mánuðir",
    description: "Fullkomið fyrir þá sem vilja byrja rétt",
    price: 14.995,
    originalPrice: 19.995,
    billing: "á mánuði",
    totalPrice: 44.985,
    icon: Star,
    popular: true,
    features: [
      "Sérsniðið æfingaplan",
      "Næringarráðgjöf",
      "Árangurs Mælingar",
      "Næringarþjálfun",
      "Kennslumyndbönd",
      "Vikuleg check-ins"
    ]
  },
  {
    name: "6-Mánuðir",
    description: "Hámarks árangur og sparnaður",
    price: 9.995,
    originalPrice: 19.995,
    billing: "á mánuði",
    totalPrice: 59.975,
    icon: Crown,
    popular: false,
    features: [
      "Sérsniðið æfingaplan",
      "Næringarráðgjöf",
      "Árangurs Mælingar",
      "Næringarþjálfun",
      "Kennslumyndbönd",
      "Vikuleg check-ins"
    ]
  }
];

export default function PricingPlans() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Veldu þína 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> áætlun</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veldu þína áætlun sem passar þér best. Þú færð allt sem þú þarft til að ná þínum heilsu markmiðum.
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <Card 
                key={plan.name}
                className={`relative p-8 bg-gradient-to-br from-card to-secondary/20 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-elevated ${
                  plan.popular ? 'ring-2 ring-primary scale-105 shadow-glow' : ''
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      Vinsælast
                    </div>
                  </div>
                )}
                
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>
                
                {/* Pricing */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {plan.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        {plan.originalPrice}kr
                      </span>
                    )}
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price}kr
                    </span>
                  </div>
                  <div className="text-muted-foreground">{plan.billing}</div>
                  {plan.totalPrice && (
                    <div className="text-sm text-primary mt-1">
                      Samtals: {plan.totalPrice}kr (Sparaðu {plan.name === "3-Mánuðir" ? "15.000kr" : plan.name === "6-Mánuðir" ? "59.995kr" : "0kr"})
                    </div>
                  )}
                </div>
                
                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <Link to="/contact" className="w-full">
                  <Button 
                    variant={plan.popular ? "hero" : "outline"} 
                    size="lg" 
                    className="w-full"
                  >
                    {plan.popular ? "Byrjaðu í dag" : "Byrjaðu í dag"}
                  </Button>
                </Link>
              </Card>
            );
          })}
        </div>
        
        {/* Money Back Guarantee */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3">
            <Check className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Endurgreiðanlegt að fullu innan 14 daga</span>
          </div>
        </div>
      </div>
    </section>
  );
}