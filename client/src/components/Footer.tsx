import { Brain } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Footer() {
  const [location] = useLocation();
  
  const quickLinks = [
    { name: "AI Introduction", href: "#intro", type: "section" },
    { name: "AI Subdomains", href: "#subdomains", type: "section" },
    { name: "Learning Resources", href: "#resources", type: "section" },
    { name: "Certifications", href: "#certifications", type: "section" },
    { name: "Take Quiz", href: "#quiz", type: "section" },
  ];

  const pageLinks = [
    { name: "Home", href: "/", type: "page" },
    { name: "About Us", href: "/about", type: "page" },
    { name: "Contact Support", href: "#contact", type: "section" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Brain className="text-primary text-2xl mr-3" />
              <h3 className="text-xl font-bold">AI Learning Hub</h3>
            </div>
            <p className="text-slate-300 mb-4">
              Empowering the next generation with comprehensive AI education, from elementary concepts to advanced machine learning.
            </p>
            <div className="flex space-x-4">
          
            
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-300">
              {/* Show section links only on home page */}
              {location === "/" && quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
              
              {/* Page navigation links */}
              {pageLinks.map((link, index) => (
                <li key={`page-${index}`}>
                  {link.type === "page" ? (
                    <Link href={link.href}>
                      <span className="hover:text-white transition-colors cursor-pointer">
                        {link.name}
                      </span>
                    </Link>
                  ) : (
                    <button 
                      onClick={() => scrollToSection(link.href)}
                      className="hover:text-white transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Learning Resources</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="https://scratch.mit.edu/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Scratch Programming
                </a>
              </li>
              <li>
                <a href="https://teachablemachine.withgoogle.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Teachable Machine
                </a>
              </li>
              <li>
                <a href="https://www.elementsofai.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Elements of AI
                </a>
              </li>
              <li>
                <a href="https://www.coursera.org/learn/machine-learning" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  ML Course (Coursera)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2025 AI Learning Hub. All rights reserved. | Designed for educational purposes.</p>
        </div>
      </div>
    </footer>
  );
}
