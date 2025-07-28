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
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">Ég hef hjálpað 100+ íslendingum</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            <span className="block">Þar sem líkamlegur</span>
            <span className="bg-gradient-primary bg-clip-text text-transparent block"> styrkur</span>
            <span className="block">mætir andlegu</span>
            <span className="bg-gradient-secondary bg-clip-text text-transparent block"> jafnvægi</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            Vertu hluti af þeim íslendingum sem hafa gjörbreytt lífi sínu með <span className="whitespace-nowrap">GF Training</span>.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-10">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">100+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Ég hef hjálpað íslendingum</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">50+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">æfingarplön</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">95%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Árangurshlutfall</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
              >
                Byrjaðu í dag
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </Link>
          </div>
          
          {/* Trust Indicator */}
          <p className="text-xs sm:text-sm text-muted-foreground mt-6 sm:mt-8 px-4">
            ✨ Endurgreiðanlegt að fullu innan 14 daga • Engin auka gjöld
          </p>
        </div>
      </div>
      
      {/* Animated Elements - Hidden on mobile for cleaner look */}
      <div className="hidden sm:block absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60" />
      <div className="hidden sm:block absolute top-1/3 right-20 w-3 h-3 bg-accent rounded-full animate-pulse opacity-40" />
      <div className="hidden sm:block absolute bottom-1/4 left-1/4 w-1 h-1 bg-primary-glow rounded-full animate-pulse opacity-80" />
    </section>
  );
}