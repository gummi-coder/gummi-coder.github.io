import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Star, 
  Quote,
  ArrowLeft,
  ArrowRight,
  Trophy,
  TrendingUp,
  Heart
} from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Sigríður",
    role: "Framkvæmdastjóri",
    rating: 5,
    text: "Ég missti 14 kíló í fjarþjálfun hjá Guðmundi! Sjúklega ánægður með peppið og stuðninginn sem ég fékk á meðan.",
    achievement: "Missti 14 kiló á 3 mánuði",
    before: "Var 86kg áður",
    after: "Nú er ég 72kg"
  },
  {
    name: "Róbert",
    role: "Ökukennari",
    rating: 5,
    text: "Appið alger snilld! Góðar upplýsingar og leiðbeiningar af æfingum og frá Gumma sem hjálpaði mjög mikið sem byrjandi. Mæli mjög mikið með!",
    achievement: "Náði 85kg í bekk",
    before: "Vissi ekkert hvað ég var að gera.",
    after: "Veit núna hvað ég er að gera og konst yfri ræktarhviðan"
  },
  {
    name: "Eva",
    role: "Móðir",
    rating: 5,
    text: "Guðmundur gerði frábært plan sem hentaði mínum líffsstíl ekkert smá vel. Sem 4 barna móðir var einstaklega erfitt að finna tíma fyrir hreyfingu en ég fékk plan sem hentaði mér ótrúlega vel! ekki of langar æfingar og góður stuðningur",
    achievement: "Geggjað að fá smá me time",
    before: "hélt að ég hafði engan tíma fyrir hreyfingu",
    after: "heyrfi mig núna 2-3 í viku"
  },
  {
    name: "Sigurgeir",
    role: "Sjómaður",
    rating: 5,
    text: "Ég var búin að prófa mjög mikið til þess að koma mér af stað því mér fannst ræktin svo leiðinleg EN það breyttist algerlega þegar ég byrjaði í þjálfun hjá GFtraining. Kom mér af stað og er loksins að ná að halda mig við ræktina",
    achievement: "hreyfi mig 5 sinnum í viku!",
    before: "Hataði að hreyfa mig",
    after: "Get ekki ýmindað mér lifi án hreyfingu"
  },
  {
    name: "Sólveig",
    role: "Leikskólakennari",
    rating: 5,
    text: "Appið er geggjað – ég nota það daglega. Allt skipulagt, þú heldur utan um allan árangur og maður fær hvatningu beint frá Gumma.!",
    achievement: "hef aldrei liðið jafn vel með sjálfan mig",
    before: "Hef aldrei fundið þjálfara sem skilur mig",
    after: "Ég hef núna fengið þjálfara sem skilur mig"
  },
  {
    name: "Dagur",
    role: "forritari",
    rating: 5,
    text: "Fór í fjarþjálfun til að losna við bakverki að sökum skrifstofuvinnu og GF training gerði svo mikið fyrir mig. Ég finna ð ég er sterkari og núna er ég dugleg að liðka upp á líkamann!",
    achievement: "Missti 10 kíló á 8 vikur",
    before: "Bakverki og orkuleysi",
    after: "Sofa betur, borða betur og hreyfa mig með tilgangi"
  }
];

const stats = [
  { icon: Star, value: "4.9/5", label: "Meðaleinkunn" },
  { icon: Trophy, value: "100+", label: "Ég hef hjálpað 100+ íslendingum" },
  { icon: TrendingUp, value: "95%", label: "Ná markmiðum" },
  { icon: Heart, value: "98%", label: "Myndu mæla með" }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = testimonials[currentIndex];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Raunverulegur árangur frá 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> viðskiptavinum</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vertu hluti af þeim íslendingum sem hafa gjörbreytt lífi sínu með GF Training. 
            Hér er það sem þeir hafa að segja um ferð sína.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="p-6 text-center bg-gradient-card border-border/50 hover:shadow-card transition-smooth">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">
                  {stat.label === "Meðaleinkunn" ? "Meðaleinkunn" :
                   stat.label === "Ég hef hjálpað 100+ íslendingum" ? "Ég hef hjálpað 100+ íslendingum" :
                   stat.label === "Ná markmiðum" ? "Ná markmiðum" :
                   stat.label === "Myndu mæla með" ? "Myndu mæla með" : stat.label}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Featured Testimonial */}
        <Card className="p-8 md:p-12 bg-gradient-card border-border/50 shadow-elevated mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div>
              <Quote className="w-12 h-12 text-primary mb-6" />
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6 min-h-[120px] flex items-start">
                "{currentTestimonial.text}"
              </blockquote>
              
              {/* Transformation */}
              <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-primary/5 rounded-lg border border-primary/20 min-h-[80px]">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Áður</div>
                  <div className="text-sm text-foreground">{currentTestimonial.before}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Eftir</div>
                  <div className="text-sm text-primary font-medium">{currentTestimonial.after}</div>
                </div>
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-semibold text-foreground">{currentTestimonial.name}</div>
                </div>
              </div>
            </div>

            {/* Achievement Badge */}
            <div className="lg:justify-self-end">
              <Card className="p-6 bg-gradient-primary text-primary-foreground text-center max-w-sm min-h-[160px] flex flex-col justify-center">
                <Trophy className="w-8 h-8 mx-auto mb-4" />
                <h4 className="font-bold mb-2">Frábær árangur</h4>
                <p className="text-sm opacity-90">{currentTestimonial.achievement}</p>
              </Card>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-8 border-t border-border/50">
            <Button variant="outline" size="sm" onClick={prevTestimonial}>
              <ArrowLeft className="w-4 h-4" />
              Fyrri
            </Button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-smooth ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
            
            <Button variant="outline" size="sm" onClick={nextTestimonial}>
              Næst
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </Card>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-border/50 hover:shadow-card transition-smooth">
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <blockquote className="text-foreground mb-4 line-clamp-4">
                "{testimonial.text}"
              </blockquote>
              
              <div className="flex items-center gap-3">
                <div>
                  <div className="font-medium text-foreground text-sm">{testimonial.name}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="inline-block p-8 bg-gradient-card border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Tilbúin/n til að skrifa sigursögu þína?
            </h3>
            <p className="text-muted-foreground mb-6">
              Vertu hluti af þeim íslendingum sem hafa gjörbreytt lífi sínu
            </p>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.location.href = '/contact'}
            >
              Byrjaðu í dag
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}