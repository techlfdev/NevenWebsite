
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "A Neven revolucionou nossa operação com automação inteligente. O agente de IA desenvolvido para nosso WhatsApp reduziu o tempo de resposta em 80% e melhorou significativamente a satisfação dos clientes.",
    name: "Carlos Silva",
    title: "Diretor de Operações",
    company: "TechCorp Brasil",
    bgColor: "bg-gradient-to-br from-[#0B1F51] to-[#1A367D] text-white",
  },
  {
    id: 2,
    quote: "O sistema sob medida que a Neven desenvolveu integrou perfeitamente com nossos processos existentes. A interface é intuitiva e a automação nos permitiu escalar sem aumentar a equipe.",
    name: "Equipe de Tecnologia",
    title: "Grupo Inova",
    company: "Grupo Inova",
    bgColor: "bg-gradient-to-br from-gray-900 to-gray-800 text-white",
  },
  {
    id: 3,
    quote: "O website desenvolvido pela Neven não só é visualmente impressionante, mas também altamente funcional. A integração com IA trouxe resultados surpreendentes.",
    name: "Marketing Digital",
    title: "FastGrow Solutions",
    company: "FastGrow",
    bgColor: "bg-white shadow-lg",
  }
];

const stats = [
  {
    id: 1,
    value: "80%",
    description: "redução em tempo de resposta",
    company: "TechCorp",
    bgColor: "bg-gradient-to-br from-[#0B1F51] to-[#1A367D] text-white",
  },
  {
    id: 2,
    value: "3x",
    description: "aumento em eficiência operacional",
    company: "Grupo Inova",
    bgColor: "bg-gradient-to-br from-gray-900 to-gray-800 text-white",
  },
  {
    id: 3,
    value: "95%",
    description: "satisfação dos clientes",
    company: "FastGrow",
    bgColor: "bg-white shadow-lg",
  }
];

const Testimonials = () => {
  return (
    <section className="py-8 bg-white" id="testimonials">
      <div className="container-section max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Empresas que Transformamos com IA</h2>
        </motion.div>

        <div className="grid grid-cols-12 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-4 lg:col-span-3 rounded-xl overflow-hidden"
          >
            <div className={`h-full ${stats[0].bgColor} p-8 flex flex-col`}>
              <div className="mt-auto">
                <div className="text-5xl font-bold mb-2">{stats[0].value}</div>
                <div className={`${stats[0].bgColor.includes('white') ? 'text-white-600' : 'text-white/80'}`}>{stats[0].description}</div>
              </div>
              <div className="mt-auto pt-6">
                <div className="font-bold text-lg">TechCorp Brasil</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-4 lg:col-span-3 rounded-xl overflow-hidden border border-gray-100"
          >
            <div className={`h-full ${stats[1].bgColor} p-8 flex flex-col`}>
              <div className="mt-auto">
                <div className="text-5xl font-bold mb-2">{stats[1].value}</div>
                <div className="text-white-600">{stats[1].description}</div>
              </div>
              <div className="mt-auto pt-6">
                <div className="font-bold text-lg">Grupo Inova</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-8 lg:col-span-6 rounded-xl overflow-hidden"
          >
            <div className={`h-full ${testimonials[0].bgColor} p-8 flex flex-col`}>
              <div className="text-2xl font-medium mb-8">
                "{testimonials[0].quote}"
              </div>
              <div className="mt-auto">
                <div className="font-medium">{testimonials[0].name}</div>
                <div className="text-white-600 text-sm">{testimonials[0].title}</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-7 lg:col-span-6 rounded-xl overflow-hidden"
          >
            <div className={`h-full ${testimonials[1].bgColor} p-8 flex flex-col`}>
              <div className="text-2xl font-medium mb-8">
                "{testimonials[1].quote}"
              </div>
              <div className="mt-auto">
                <div className="font-medium">{testimonials[1].name}</div>
                <div className="text-white-600 text-sm">{testimonials[1].title}</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-5 lg:col-span-3 rounded-xl overflow-hidden"
          >
            <div className={`h-full ${stats[2].bgColor} p-8 flex flex-col`}>
              <div className="mt-auto">
                <div className="text-5xl font-bold mb-2">{stats[2].value}</div>
                <div className="text-gray-600">{stats[2].description}</div>
              </div>
              <div className="mt-auto pt-6">
                <div className="font-bold text-lg">FastGrow</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-12 lg:col-span-3 rounded-xl overflow-hidden"
          >
            <div className={`h-full ${testimonials[2].bgColor} p-8 flex flex-col`}>
              <div className="text-2xl font-medium mb-8">
                "{testimonials[2].quote}"
              </div>
              <div className="mt-auto">
                <div className="font-medium">{testimonials[2].name}</div>
                <div className="text-gray-600 text-sm">{testimonials[2].title}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
