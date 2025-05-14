
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Stepper } from "@/components/ui/stepper";
import { Card } from "@/components/ui/card";
import {
  CalendarDays,
  Clock,
  Users,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Bot,
  Cpu,
  Globe,
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const services = [
  {
    id: "automation",
    title: "Automação de Processos",
    icon: Bot,
    description: "Otimize seus processos com automação inteligente",
  },
  {
    id: "ai",
    title: "Soluções de IA",
    icon: Cpu,
    description: "Integre inteligência artificial ao seu negócio",
  },
  {
    id: "web",
    title: "Desenvolvimento Web",
    icon: Globe,
    description: "Crie uma presença digital impactante",
  },
];

const Schedule = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedService, setSelectedService] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
  });

  const steps = ["Serviço", "Agendamento", "Dados"];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ selectedService, date, selectedTime, ...formData });
    // Future N8N integration point
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return selectedService !== "";
      case 1:
        return date !== undefined && selectedTime !== "";
      case 2:
        return Object.values(formData).every((value) => value !== "");
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-convrt-dark-blue">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-500 mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Agende uma Demonstração</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Transforme Seu Negócio com Automação Inteligente
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra como podemos criar soluções personalizadas de IA, websites de alto impacto e sistemas sob medida para sua empresa.
          </p>
        </motion.div>

        <Stepper steps={steps} currentStep={currentStep} className="mb-12" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {currentStep === 0 && (
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service) => (
                <Card
                  key={service.id}
                  className={cn(
                    "p-6 cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02]",
                    selectedService === service.id ? "border-blue-500 ring-2 ring-blue-500/20" : "border-gray-200"
                  )}
                  onClick={() => setSelectedService(service.id)}
                >
                  <service.icon className="w-8 h-8 text-blue-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </Card>
              ))}
            </div>
          )}

          {currentStep === 1 && (
            <div className="space-y-12">
              <TooltipProvider>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden w-full flex justify-center"
                >
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="w-full max-w-[800px] animate-in zoom-in-95 duration-300"
                    disabled={(date) => {
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);
                      return (
                        date < today ||
                        date.getDay() === 0 ||
                        date.getDay() === 6
                      );
                    }}
                    fromDate={new Date()}
                    toDate={new Date(new Date().setMonth(new Date().getMonth() + 2))}
                  />
                </motion.div>
              </TooltipProvider>

              {date && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="grid grid-cols-2 md:grid-cols-3 gap-6"
                >
                  {["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"].map((time) => (
                    <Button
                      key={time}
                      variant="outline"
                      className={cn(
                        "h-20 justify-center items-center text-lg transition-all duration-200 hover:bg-blue-50 hover:border-[#0F2D52]",
                        selectedTime === time 
                          ? "bg-[#10B981]/10 border-[#10B981] text-[#10B981] hover:bg-[#10B981]/10" 
                          : "border-slate-200"
                      )}
                      onClick={() => setSelectedTime(time)}
                    >
                      <Clock className={cn(
                        "mr-3 h-5 w-5 transition-colors",
                        selectedTime === time ? "text-[#10B981]" : "text-slate-500"
                      )} />
                      {time}
                    </Button>
                  ))}
                </motion.div>
              )}
            </div>
          )}

          {currentStep === 2 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <Input
                    type="text"
                    id="name"
                    className="peer"
                    placeholder=" "
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  >
                    Nome Completo
                  </label>
                </div>

                <div className="relative">
                  <Input
                    type="email"
                    id="email"
                    className="peer"
                    placeholder=" "
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  >
                    Email Corporativo
                  </label>
                </div>

                <div className="relative">
                  <Input
                    type="text"
                    id="company"
                    className="peer"
                    placeholder=" "
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required
                  />
                  <label
                    htmlFor="company"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  >
                    Empresa
                  </label>
                </div>

                <div className="relative">
                  <Input
                    type="tel"
                    id="phone"
                    className="peer"
                    placeholder=" "
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                  <label
                    htmlFor="phone"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  >
                    Telefone
                  </label>
                </div>
              </div>
            </form>
          )}

          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 0}
            >
              <ChevronLeft className="mr-2 h-4 w-4" /> Voltar
            </Button>

            <Button
              onClick={currentStep === steps.length - 1 ? handleSubmit : handleNext}
              disabled={!isStepValid()}
            >
              {currentStep === steps.length - 1 ? (
                "Finalizar Agendamento"
              ) : (
                <>
                  Próximo <ChevronRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Schedule;
