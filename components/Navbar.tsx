import React, { useState, useEffect } from "react";

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
  onOpenBooking: () => void;
  onOpenSearch: () => void;
}

import logo from "../src/images/logo.png";

const Navbar: React.FC<NavbarProps> = ({
  onNavigate,
  currentPage,
  onOpenBooking,
  onOpenSearch,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Quinta da Bica", id: "home" },
    { name: "História", id: "historia" },
    { name: "Vinhos", id: "vinhos" },
    { name: "Eventos & Provas", id: "tastings" },
    { name: "Galeria", id: "galeria" },
    { name: "O Que Fazer", id: "oque-fazer" },
    { name: "Contactos", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${isScrolled ? "bg-winery-dark/95 border-b border-winery-gold/10 py-3 backdrop-blur-md" : "bg-transparent py-4 md:py-6"}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-4">
          {/* Logo Brand Area */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onNavigate("home")}
              className="flex items-center group"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 relative mr-3 md:mr-4 flex items-center justify-center rounded-full overflow-hidden">
                <img
                  src={logo}
                  alt="Quinta da Bica Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-base md:text-xl font-serif italic tracking-widest text-winery-gold leading-none">
                  QUINTA DA BICA
                </span>
                <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-winery-cream/50 mt-1">
                  Região do Dão
                </span>
              </div>
            </button>
          </div>

          {/* Right Top Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <button
              onClick={() => onNavigate("login")}
              className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-winery-cream/60 hover:text-winery-gold transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span className="hidden sm:inline">Login</span>
            </button>
            <button className="relative text-winery-cream/60 hover:text-winery-gold transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-winery-gold text-winery-dark text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <div className="flex items-center space-x-1 border-l border-winery-gold/20 pl-4">
              <span className="w-5 h-5 rounded-full overflow-hidden border border-winery-gold/30">
                <img
                  src="https://flagcdn.com/w20/pt.png"
                  alt="PT"
                  className="w-full h-full object-cover"
                />
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Navigation Bar Labels */}
        <div className="flex justify-start lg:justify-center items-center space-x-6 md:space-x-10 overflow-x-auto no-scrollbar py-2 border-t border-winery-gold/5">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`text-[10px] md:text-[11px] uppercase tracking-[0.2em] whitespace-nowrap hover:text-winery-gold transition-colors ${currentPage === link.id ? "text-winery-gold font-medium" : "text-winery-cream/70"}`}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
