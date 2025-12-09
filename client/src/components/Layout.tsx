import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Research & Trials", path: "/research" },
    { name: "Team", path: "/team" },
    { name: "Publications", path: "/publications" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-primary/20">
      {/* Navigation */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled
            ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md py-3 shadow-sm border-border/40"
            : "bg-transparent py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M12 8v4" />
                  <path d="M12 16h.01" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className={cn("font-heading font-bold text-lg leading-tight tracking-tight", isScrolled ? "text-foreground" : "text-white mix-blend-difference")}>
                  Oslo Transplant Oncology
                </span>
                <span className={cn("text-xs font-medium tracking-wider uppercase opacity-80", isScrolled ? "text-muted-foreground" : "text-white/80 mix-blend-difference")}>
                  Pioneering Research Group
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <span
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-primary/10 cursor-pointer",
                    location === link.path
                      ? "text-primary bg-primary/5 font-semibold"
                      : isScrolled
                      ? "text-foreground/80 hover:text-primary"
                      : "text-white/90 hover:text-white hover:bg-white/10 mix-blend-difference"
                  )}
                >
                  {link.name}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <Button 
                variant={isScrolled ? "default" : "secondary"} 
                size="sm" 
                className="ml-2 rounded-full px-6 font-semibold shadow-md hover:shadow-lg transition-all"
              >
                Get in Touch
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-white mix-blend-difference")} />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-white mix-blend-difference")} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6 lg:hidden animate-in fade-in slide-in-from-top-5 duration-200">
          <nav className="flex flex-col gap-4 text-lg">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <span
                  className={cn(
                    "block py-3 border-b border-border/50 font-heading font-medium transition-colors cursor-pointer",
                    location === link.path ? "text-primary" : "text-foreground/80"
                  )}
                >
                  {link.name}
                </span>
              </Link>
            ))}
            <Button className="mt-4 w-full rounded-full py-6 text-lg">
              Contact Us
            </Button>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-200 py-16 border-t border-slate-800">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M12 8v4" />
                  <path d="M12 16h.01" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-tight text-white">
                  Oslo Transplant Oncology
                </span>
                <span className="text-xs font-medium tracking-wider uppercase text-slate-400">
                  Oslo University Hospital
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Pioneering liver transplantation for colorectal liver metastases and advancing the field of transplant oncology through rigorous clinical trials and international collaboration.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <span className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 cursor-pointer group">
                      <ChevronRight className="w-3 h-3 text-primary/50 group-hover:text-primary transition-colors" />
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-6">Key Trials</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/research#seca">
                  <span className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 cursor-pointer group">
                    <ChevronRight className="w-3 h-3 text-primary/50 group-hover:text-primary transition-colors" />
                    SECA-II Extension
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/research#rapid">
                  <span className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 cursor-pointer group">
                    <ChevronRight className="w-3 h-3 text-primary/50 group-hover:text-primary transition-colors" />
                    LD-RAPID Protocol
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/research#tesla">
                  <span className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 cursor-pointer group">
                    <ChevronRight className="w-3 h-3 text-primary/50 group-hover:text-primary transition-colors" />
                    TESLA Trial
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/research#excalibur">
                  <span className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 cursor-pointer group">
                    <ChevronRight className="w-3 h-3 text-primary/50 group-hover:text-primary transition-colors" />
                    EXCALIBUR
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-6">Contact</h4>
            <address className="not-italic text-slate-400 text-sm space-y-3">
              <p>Oslo University Hospital</p>
              <p>Rikshospitalet</p>
              <p>Sognsvannsveien 20</p>
              <p>0372 Oslo, Norway</p>
              <div className="pt-4">
                <Link href="/contact">
                  <span className="text-primary hover:text-primary/80 font-medium flex items-center gap-2 cursor-pointer">
                    Contact the Group <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </address>
          </div>
        </div>
        <div className="container mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Oslo Transplant Oncology Group. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Terms of Use</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
