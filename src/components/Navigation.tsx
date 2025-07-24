import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/gf-training-logo.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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
            {isHomePage ? (
              <>
                <a href="#thjalfun" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Þjálfun
                </a>
                <a href="#verd" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Verð
                </a>
                <a href="#um-mig" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Um mig
                </a>
                <a href="#umsagnir" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Umsagnir
                </a>
              </>
            ) : (
              <>
                <Link to="/#thjalfun" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Þjálfun
                </Link>
                <Link to="/#verd" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Verð
                </Link>
                <Link to="/#um-mig" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Um mig
                </Link>
                <Link to="/#umsagnir" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Umsagnir
                </Link>
              </>
            )}
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
              {isHomePage ? (
                <>
                  <a href="#thjalfun" className="text-muted-foreground hover:text-foreground transition-smooth py-2">
                    Þjálfun
                  </a>
                  <a href="#verd" className="text-muted-foreground hover:text-foreground transition-smooth py-2">
                    Verð
                  </a>
                  <a href="#um-mig" className="text-muted-foreground hover:text-foreground transition-smooth py-2">
                    Um mig
                  </a>
                  <a href="#umsagnir" className="text-muted-foreground hover:text-foreground transition-smooth py-2">
                    Umsagnir
                  </a>
                </>
              ) : (
                <>
                  <Link to="/#thjalfun" className="text-muted-foreground hover:text-foreground transition-smooth py-2">
                    Þjálfun
                  </Link>
                  <Link to="/#verd" className="text-muted-foreground hover:text-foreground transition-smooth py-2">
                    Verð
                  </Link>
                  <Link to="/#um-mig" className="text-muted-foreground hover:text-foreground transition-smooth py-2">
                    Um mig
                  </Link>
                  <Link to="/#umsagnir" className="text-muted-foreground hover:text-foreground transition-smooth py-2">
                    Umsagnir
                  </Link>
                </>
              )}
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