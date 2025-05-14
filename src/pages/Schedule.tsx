
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CalendarDays, Clock, ChevronRight, Sparkles } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/Navbar";

const Schedule = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
  });

  const services = [
    { value: "all", label: "Todos os Serviços" },
    { value: "ia", label: "Soluções de IA" },
    { value: "automation", label: "Automação de Processos" },
    { value: "website", label: "Desenvolvimento Web" },
    { value: "integration", label: "Integrações de Sistema" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ ...formData, date });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-convrt-dark-blue dark:to-convrt-dark-blue/95">
      <Navbar />
      <div className="container mx-auto px-4 py-24 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 mb-6">
            <Clock className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Agendar Reunião</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:to-gray-200">
            Vamos Conversar Sobre Seu Projeto
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Escolha um horário conveniente para discutirmos como podemos impulsionar seu negócio com nossas soluções personalizadas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Selecione uma Data</h3>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-xl border-2 border-gray-100 dark:border-gray-700 p-4 bg-white dark:bg-gray-800"
                />
              </div>

              <div className="grid grid-cols-3 gap-4 mt-6">
                {["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"].map((time) => (
                  <motion.button
                    key={time}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="py-2 px-4 rounded-lg border-2 border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-200"
                  >
                    {time}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Serviço de Interesse
                </label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione um serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        {service.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Nome Completo
                </label>
                <Input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Email Corporativo
                </label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Empresa
                </label>
                <Input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="border-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Telefone
                </label>
                <Input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="border-2"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 px-6 rounded-xl font-medium flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
                type="submit"
              >
                <span>Agendar Reunião</span>
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
