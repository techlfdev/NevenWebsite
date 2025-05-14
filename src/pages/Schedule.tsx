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
import Stepper, { Step } from './Stepper';
import { cn } from "@/lib/utils";

const Schedule = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("");
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

  const handleSubmit = () => {
    // Future N8N integration point
    console.log({ ...formData, date, selectedTime });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-convrt-dark-blue dark:to-convrt-dark-blue/95">
      <Navbar />
      <div className="container mx-auto px-4 py-24 max-w-4xl">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700/50"
        >
          <Stepper onFinalStepCompleted={handleSubmit}>
            <Step>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4">Escolha o Serviço</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <motion.button
                      key={service.value}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setFormData({ ...formData, service: service.value })}
                      className={cn(
                        "p-4 rounded-xl border-2 text-left transition-colors",
                        formData.service === service.value
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-blue-200 dark:border-gray-700 dark:hover:border-blue-400"
                      )}
                    >
                      <h3 className="font-medium">{service.label}</h3>
                    </motion.button>
                  ))}
                </div>
              </div>
            </Step>

            <Step>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4">Selecione a Data</h2>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-xl border-2 border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800"
                />

                <div className="grid grid-cols-3 gap-4 mt-6">
                  {["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"].map((time) => (
                    <motion.button
                      key={time}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedTime(time)}
                      className={cn(
                        "py-2 px-4 rounded-lg border-2 transition-colors duration-200",
                        selectedTime === time
                          ? "border-blue-500 bg-blue-500/10 text-blue-500"
                          : "border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400"
                      )}
                    >
                      {time}
                    </motion.button>
                  ))}
                </div>
              </div>
            </Step>

            <Step>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4">Seus Dados</h2>
                <div className="grid gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                      Nome Completo
                    </label>
                    <Input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-2 border-gray-100 dark:border-gray-700 bg-transparent"
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
                      className="border-2 border-gray-100 dark:border-gray-700 bg-transparent"
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
                      className="border-2 border-gray-100 dark:border-gray-700 bg-transparent"
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
                      className="border-2 border-gray-100 dark:border-gray-700 bg-transparent"
                    />
                  </div>
                </div>
              </div>
            </Step>
          </Stepper>
        </motion.div>
      </div>
    </div>
  );
};

export default Schedule;