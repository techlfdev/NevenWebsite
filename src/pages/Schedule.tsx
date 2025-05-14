
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, Clock, ChevronRight, Sparkles, Brain, Cog, Globe, Cable, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { Stepper, Step } from '@/components/ui/stepper';
import { Tooltip } from "@/components/ui/tooltip";

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
    { value: "automation", label: "Automação de Processos", icon: Cog, description: "Otimize suas operações com automação inteligente" },
    { value: "ia", label: "Soluções de IA", icon: Brain, description: "Transforme dados em insights acionáveis" },
    { value: "website", label: "Desenvolvimento Web", icon: Globe, description: "Crie uma presença digital impactante" },
    { value: "integration", label: "Integrações de Sistema", icon: Cable, description: "Conecte seus sistemas de forma eficiente" },
  ];

  const times = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

  const validateForm = () => {
    return formData.name && formData.email && formData.company && formData.phone;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log({ ...formData, date, selectedTime });
    }
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
          <Stepper onFinalStepCompleted={handleSubmit} style={{ minHeight: '600px' }}>
            <Step>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold mb-8">Escolha o Serviço</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.map((service) => (
                    <motion.button
                      key={service.value}
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setFormData({ ...formData, service: service.value })}
                      className={cn(
                        "p-6 rounded-xl border-2 text-left transition-all duration-200",
                        formData.service === service.value
                          ? "border-blue-500 bg-blue-50/50"
                          : "border-gray-200 hover:border-blue-200 dark:border-gray-700 dark:hover:border-blue-400"
                      )}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={cn(
                          "p-3 rounded-lg",
                          formData.service === service.value
                            ? "bg-blue-500 text-white"
                            : "bg-gray-100 text-gray-600"
                        )}>
                          <service.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{service.label}</h3>
                          <p className="text-sm text-gray-600">{service.description}</p>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </Step>

            <Step>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold mb-8">Selecione a Data e Horário</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-xl border-2 border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-6"
                      disabled={(date) => {
                        const day = date.getDay();
                        return day === 0 || day === 6;
                      }}
                      formatters={{
                        formatWeekdayName: (day) => ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"][day],
                      }}
                    />
                  </div>

                  <div className={cn(
                    "transition-all duration-300",
                    date ? "opacity-100" : "opacity-50 pointer-events-none"
                  )}>
                    <h3 className="text-lg font-medium mb-4">Horários Disponíveis</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {times.map((time) => (
                        <motion.button
                          key={time}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelectedTime(time)}
                          className={cn(
                            "py-3 px-4 rounded-lg border-2 transition-colors duration-200 flex items-center justify-center",
                            selectedTime === time
                              ? "border-blue-500 bg-blue-500/10 text-blue-500"
                              : "border-gray-100 dark:border-gray-700 hover:border-blue-200"
                          )}
                        >
                          <Clock className="w-4 h-4 mr-2" />
                          {time}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Step>

            <Step>
              <div className="space-y-6 max-w-lg mx-auto">
                <h2 className="text-2xl font-semibold mb-8">Seus Dados</h2>
                <div className="space-y-6">
                  <div className="relative">
                    <Input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="peer h-14 px-4 pt-4 border-2 border-gray-100 dark:border-gray-700 bg-transparent"
                      placeholder=" "
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-4 top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs"
                    >
                      Nome Completo *
                    </label>
                    {formData.name && <CheckCircle2 className="absolute right-4 top-4 text-green-500 w-5 h-5" />}
                  </div>

                  <div className="relative">
                    <Input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="peer h-14 px-4 pt-4 border-2 border-gray-100 dark:border-gray-700 bg-transparent"
                      placeholder=" "
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-4 top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs"
                    >
                      Email Corporativo *
                    </label>
                    {formData.email && <CheckCircle2 className="absolute right-4 top-4 text-green-500 w-5 h-5" />}
                  </div>

                  <div className="relative">
                    <Input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="peer h-14 px-4 pt-4 border-2 border-gray-100 dark:border-gray-700 bg-transparent"
                      placeholder=" "
                    />
                    <label
                      htmlFor="company"
                      className="absolute left-4 top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs"
                    >
                      Empresa *
                    </label>
                    {formData.company && <CheckCircle2 className="absolute right-4 top-4 text-green-500 w-5 h-5" />}
                  </div>

                  <div className="relative">
                    <Input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="peer h-14 px-4 pt-4 border-2 border-gray-100 dark:border-gray-700 bg-transparent"
                      placeholder=" "
                    />
                    <label
                      htmlFor="phone"
                      className="absolute left-4 top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs"
                    >
                      Telefone *
                    </label>
                    {formData.phone && <CheckCircle2 className="absolute right-4 top-4 text-green-500 w-5 h-5" />}
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
