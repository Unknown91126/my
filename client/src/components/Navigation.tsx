import { useState, useEffect } from "react";
import { Brain, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");
  const [location] = useLocation();

  useEffect(() => {
    // Only track scroll sections on home page
    if (location !== "/") return;
    
    const handleScroll = () => {
      const sections = ["intro", "subdomains", "resources", "certifications", "quiz", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const homeNavItems = [
    { id: "intro", label: "Introduction" },
    { id: "subdomains", label: "AI Topics" },
    { id: "resources", label: "Resources" },
    { id: "certifications", label: "Certifications" },
    { id: "quiz", label: "Quiz" },
    { id: "contact", label: "Contact" },
  ];

  const pageNavItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/">
              <Brain className="text-primary text-2xl mr-3" />
            </Link>
            <Link href="/">
              <h1 className="text-xl font-bold text-slate-800">AI Learning Hub</h1>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {/* Page Navigation */}
            {pageNavItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span className={`transition-colors cursor-pointer ${
                  location === item.path
                    ? "text-primary"
                    : "text-slate-600 hover:text-primary"
                }`}>
                  {item.label}
                </span>
              </Link>
            ))}
            
            {/* Section Navigation (only on home page) */}
            {location === "/" && homeNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-slate-600 hover:text-primary"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-2">
              {/* Page Navigation */}
              {pageNavItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <span className={`block w-full text-left py-2 px-4 rounded transition-colors cursor-pointer ${
                    location === item.path
                      ? "text-primary bg-primary/10"
                      : "text-slate-600 hover:text-primary hover:bg-slate-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}>
                    {item.label}
                  </span>
                </Link>
              ))}
              
              {/* Section Navigation (only on home page) */}
              {location === "/" && homeNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 px-4 rounded transition-colors ${
                    activeSection === item.id
                      ? "text-primary bg-primary/10"
                      : "text-slate-600 hover:text-primary hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
