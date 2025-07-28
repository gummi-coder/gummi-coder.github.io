import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-fitness.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Personal Training" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Ég hef hjálpað 100+ íslendingum</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            <span className="block sm:inline">Þar sem líkamlegur</span>
            <span className="bg-gradient-primary bg-clip-text text-transparent block sm:inline"> styrkur</span>
            <span className="block sm:inline">,</span>
            <br className="hidden sm:block" />
            <span className="block sm:inline">mætir andlegu</span>
            <span className="bg-gradient-secondary bg-clip-text text-transparent block sm:inline"> jafnvægi</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Vertu hluti af þeim íslendingum sem hafa gjörbreytt lífi sínu með <span className="whitespace-nowrap">GF Training</span>.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Ég hef hjálpað íslendingum</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">æfingarplön</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">Árangurshlutfall</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6"
              >
                Byrjaðu í dag
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
          
          {/* Trust Indicator */}
          <p className="text-sm text-muted-foreground mt-8">
            ✨ Endurgreiðanlegt að fullu innan 14 daga • Engin auka gjöld
          </p>
        </div>
      </div>
      
      {/* Animated Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60" />
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-accent rounded-full animate-pulse opacity-40" />
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-primary-glow rounded-full animate-pulse opacity-80" />
    </section>
  );
}