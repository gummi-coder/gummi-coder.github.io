import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/gf-training-logo10.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      // If we're on the home page, just scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to home and then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsOpen(false); // Close mobile menu
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="GF Training logo"
              className="h-10 w-auto object-contain drop-shadow"
              style={{ maxWidth: 120 }}
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('thjalfun')}
              className="text-muted-foreground hover:text-foreground transition-smooth"
            >
              Þjálfun
            </button>
            <button 
              onClick={() => scrollToSection('verd')}
              className="text-muted-foreground hover:text-foreground transition-smooth"
            >
              Verð
            </button>
            <button 
              onClick={() => scrollToSection('um-mig')}
              className="text-muted-foreground hover:text-foreground transition-smooth"
            >
              Um mig
            </button>
            <button 
              onClick={() => scrollToSection('umsagnir')}
              className="text-muted-foreground hover:text-foreground transition-smooth"
            >
              Umsagnir
            </button>
          </div>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/contact">
              <Button variant="hero">
                Byrjaðu í dag!
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('thjalfun')}
                className="text-muted-foreground hover:text-foreground transition-smooth py-2 text-left"
              >
                Þjálfun
              </button>
              <button 
                onClick={() => scrollToSection('verd')}
                className="text-muted-foreground hover:text-foreground transition-smooth py-2 text-left"
              >
                Verð
              </button>
              <button 
                onClick={() => scrollToSection('um-mig')}
                className="text-muted-foreground hover:text-foreground transition-smooth py-2 text-left"
              >
                Um mig
              </button>
              <button 
                onClick={() => scrollToSection('umsagnir')}
                className="text-muted-foreground hover:text-foreground transition-smooth py-2 text-left"
              >
                Umsagnir
              </button>
              <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                <Link to="/contact">
                  <Button variant="hero" size="sm">
                    Byrjaðu í dag!
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}