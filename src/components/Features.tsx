import { Card } from "@/components/ui/card";
import { 
  Dumbbell, 
  Target, 
  TrendingUp, 
  Users, 
  Utensils, 
  Clock,
  Smartphone,
  Award,
  Video
} from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Sérhannað æfingarprógram",
    description: "Þú færð sérhannað æfingaprógram sem er hannað fyrir þig og þín markmið."
  },
  {
    icon: Target,
    title: "Markmiðasetning",
    description: "Þú lærir að setja þér raunhæf markmið sem þú nærð að halda þér við."
  },
  {
    icon: TrendingUp,
    title: "Fylgstu með árangri",
    description: "Í appinu getur þú fylgst með frammistöðu þinni, hvort það sem það er þyngdin, árangursmyndir eða hversu þungu þú lyftir."
  },
  {
    icon: Video,
    title: "Kennslu myndbönd",
    description: "Færð aðgang af kennslu myndböndum svo þú getur verið viss um að þú sért að gera æfingar rétt."
  },
  {
    icon: Utensils,
    title: "Leiðbeiningar um næringu",
    description: "Þú færð Næringarráðgjöf eða næringarplön sem henta þér og þínum lífsstíll."
  },
  {
    icon: Clock,
    title: "Sveigjanlegur æfingatímai",
    description: "Æfðu þegar þér hentar, æfingarnar geta verið frá 15-60 mínútum og henta öllum lífsstílum."
  },
  {
    icon: Smartphone,
    title: "Aðgangur að Appi",
    description: "Öll þjálfun fer fram í appinu “GF Training” þar sem þú hefur aðgang að æfingar plani, næringar plani, árangri þínum og margt fleira."
  },
  {
    icon: Award,
    title: "Aðgangur að þjálfara",
    description: "Færð aðgang að þjálfara í spjallþræði í appinu þegar þér hentar."
  }
];

export default function Features() {
  return (
    <section className="py-20 px-6 bg-secondary/10">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Innifalið í þjálfun hjá 
            <span className="bg-gradient-secondary bg-clip-text text-transparent"> GF Training</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Hvort sem markmiðin þín eru að komast í form, bæta orkuna eða byggja styrk,
           þá færðu allt sem þú þarft með markvissri fjarþjálfun frá GF Training.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-gradient-card border-border/50 hover:border-primary/30 transition-smooth hover:shadow-card group"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-smooth">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-primary/5 border border-primary/20 rounded-2xl px-8 py-6">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-full border-2 border-background" />
              <div className="w-10 h-10 bg-gradient-secondary rounded-full border-2 border-background" />
              <div className="w-10 h-10 bg-primary/20 rounded-full border-2 border-background flex items-center justify-center">
                <span className="text-xs font-semibold text-primary">+100+</span>
              </div>
            </div>
            <div className="text-left">
              <div className="font-semibold text-foreground">Ég hef hjálpað 100+ íslendingum</div>
              <div className="text-sm text-muted-foreground">langar þig að vera einn af þeim?</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}