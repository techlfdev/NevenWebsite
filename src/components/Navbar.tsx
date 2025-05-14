import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Home, Settings, Book, ArrowRight, LayoutDashboard, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const menuItemVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    })
  };

  const scrollToSection = (href) => {
    const isIndex = window.location.pathname === '/';
    const targetId = href.startsWith("#") ? href.slice(1) : href;
    
    if (!isIndex) {
      window.location.href = `/${targetId ? '#' + targetId : ''}`;
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { href: "#problem-statement", text: "Soluções", icon: <Settings className="w-5 h-5" /> },
    { href: "#how-it-works", text: "Como Funciona", icon: <Book className="w-5 h-5" /> },
    { href: "#testimonials", text: "Cases", icon: <MessageSquare className="w-5 h-5" /> },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6",
        isScrolled 
          ? "bg-white/80 backdrop-blur-lg shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-3xl font-bold animate-gradient-text bg-gradient-to-r from-[#0B1F51] via-[#142B69] to-[#1A367D] bg-[length:200%_auto] bg-clip-text text-transparent">
          Neven
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
          {menuItems.map(item => (
            <a 
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="text-convrt-dark-blue/80 hover:text-convrt-dark-blue font-medium transition-colors"
            >
              {item.text}
            </a>
          ))}
        </div>

        <a 
          href="#cta" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('cta');
          }}
          className="hidden md:block button-primary"
        >
          Começar Agora
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-convrt-dark-blue z-50" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-white shadow-2xl md:hidden flex flex-col p-8"
            >
              <div className="flex flex-col space-y-6 mt-16">
                {menuItems.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    custom={i}
                    variants={menuItemVariants}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="flex items-center space-x-4 text-lg text-convrt-dark-blue/80 hover:text-convrt-dark-blue group"
                  >
                    <span className="p-2 rounded-lg bg-gray-100 group-hover:bg-convrt-dark-blue/10 transition-colors">
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.text}</span>
                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
                <motion.a
                  href="#cta"
                  custom={3}
                  variants={menuItemVariants}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="button-primary w-full text-center mt-4"
                >
                  Começar Agora
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;