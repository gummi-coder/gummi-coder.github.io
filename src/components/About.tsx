import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Award, 
  Users, 
  Calendar, 
  Target,
  CheckCircle,
  TrendingUp,
  Heart,
  Zap
} from "lucide-react";
import coachImage from "@/assets/coach-photo.jpg";

const stats = [
  { icon: Users, value: "100+", label: "Ég hef hjálpað 100+ íslendingum" },
  { icon: Calendar, value: "5+", label: "Ára reynsla" },
  { icon: Award, value: "3", label: "Skírteini" },
  { icon: Target, value: "95%", label: "Árangurshlutfall" }
];

const certifications = [
  "ISSA Certified Personal Trainer",
  "Precision Nutrition Level 1", 
  "TRX Suspension Training Certified",
];

const achievements = [
  {
    icon: TrendingUp,
    title: "Heildræn nálgun",
    description: "Við leggjum áherslu á jafnvægi milli líkamsræktar, næringar og andlegrar vellíðanar, fyrir árangur sem endist."
  },
  {
    icon: Heart,
    title: "Víðvætt fræðslugrunnur",
    description: "Allar áætlanir eru byggðar á víðvænum rannsóknum og ákvarðanatökum sem gefa hámarks árangur."
  },
  {
    icon: Zap,
    title: "Sérsniðnar áætlanir",
    description: "Hver æfingaáætlun er sérsniðin að þínum markmiðum, getustigi og lífsstílum."
  }
];

export default function About() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Guðmundur 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Friðgeirsson</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Markmiðið mitt er að hjálpa þér að ná hámarksárangr.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elevated">
              <img 
                src={coachImage} 
                alt="Personal Trainer" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <Card className="absolute -bottom-8 -right-8 p-6 bg-gradient-card border-border/50 shadow-glow">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Ára reynsla</div>
              </div>
            </Card>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Um mig
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Með yfir fimm ára reynslu í einkaþjálfun hef ég einbeitt mér að því að hjálpa einstaklingum – bæði byrjendum og íþróttafólki – að ná raunverulegum árangri. Ég vinn út frá nýjustu aðferðum byggi  allt út frá þínum markmiðum.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
              Hvort sem þú vilt hjálp við að byrja eða taka næsta skref í þjálfun, þá býð ég þér upp á skýra, markvissa og árangursdrifna leið. 
              </p>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-4">Menntun og skírteini</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.location.href = '/contact'}
            >
              Byrjaðu núna
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="p-6 text-center bg-gradient-card border-border/50 hover:shadow-card transition-smooth">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </Card>
            );
          })}
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Afhverju að velja
            <span className="bg-gradient-secondary bg-clip-text text-transparent"> GF Training</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card key={index} className="p-8 bg-gradient-card border-border/50 hover:shadow-card transition-smooth text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">{achievement.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <Card className="p-12 bg-gradient-card border-border/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6">Markmið mitt</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
            Markmiðið mitt er að hjálpa 10.000 Íslendingum að komast í betra form og lifa heilbrigðum lífsstíl. Ég þekki það sjálfur hvernig þessi breyting getur gjörbreytt lífinu hjá manni og ég elska að sjá þessar breytingar hjá öllum þeim sem skrá sig í þjálfun hjá GF Training.
            </p>
            <div className="mt-6 text-primary font-semibold">- Guðmundur Friðgeirsson, Einkaþjálfari</div>
          </Card>
        </div>
      </div>
    </section>
  );
}