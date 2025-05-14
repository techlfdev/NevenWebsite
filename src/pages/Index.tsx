import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-reveal");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" },
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll("section").forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-convrt-dark-blue overflow-hidden">
      <div className="fixed w-full z-50">
        <Navbar />
      </div>

      <main className="pt-16">
        <Hero />
        <ProblemStatement />
        <HowItWorks />
        <Testimonials />

        <section className="py-16 px-6" id="cta">
          <div className="container mx-auto max-w-5xl">
            <div className="rounded-2xl overflow-hidden relative bg-convrt-dark-blue">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src="/neven_uploads/background_cta.png"
                  alt="Team Collaboration"
                  className="w-full h-full object-cover object-center opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-convrt-dark-blue via-convrt-dark-blue/90 to-convrt-dark-blue/80"></div>
              </div>

              <div className="relative z-10 p-12 md:p-16 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">
                    Comece Sua Transformação Digital
                  </span>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="max-w-2xl"
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Pronto para Transformar sua Empresa com Software{" "}
                    <span className="text-emerald-400">Inteligente</span> e{" "}
                    <span className="text-emerald-400">Personalizado</span>?
                  </h2>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-emerald-400" />
                      <p className="text-lg text-white/90">
                        Automação inteligente que se adapta ao seu negócio.
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-emerald-400" />
                      <p className="text-lg text-white/90">
                        Software sob medida com tecnologias modernas.
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-emerald-400" />
                      <p className="text-lg text-white/90">
                        Websites de alto impacto totalmente integrados.
                      </p>
                    </div>
                  </div>

                  <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-medium text-lg transition-all flex items-center gap-2">
                    Agendar Reunião Gratuitamente
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-convrt-purple/20 text-convrt-purple mb-6">
                    <Sparkles className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium font-inter tracking-wide">
                      Automatize Seus Processos Hoje Mesmo!
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white py-8 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-6 md:mb-0"
            >
              <h3 className="text-2xl font-bold text-convrt-dark-blue">
                Neven
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                © {new Date().getFullYear()} Neven. All rights reserved.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-8"
            >
              <a
                href="/politica-de-privacidade"
                className="text-gray-600 hover:text-convrt-purple transition-colors"
              >
                Políticas de Privacidade
              </a>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
