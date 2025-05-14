import React from 'react';
import { motion } from 'framer-motion';
import { Check, Heart, MessageCircle, ThumbsUp, Send, Save, Clock, User, BarChart2, Sparkles, ArrowRight, ArrowLeft, X, Zap } from 'lucide-react';

const PlatformDemo = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto mb-20 px-4 md:px-6">
      <div className="absolute inset-0 -m-10 bg-gradient-to-br from-[#1a365d]/40 via-[#0047AB]/30 to-[#1a365d]/40 rounded-3xl blur-3xl" />

      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 flex items-center px-3 md:px-6 py-3 overflow-x-auto">
          <div className="flex space-x-1 mr-2 md:mr-4 shrink-0">
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
          </div>

          <div className="flex space-x-1 overflow-x-auto scrollbar-hide whitespace-nowrap">
            <div className="px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm text-convrt-purple bg-convrt-purple/10 rounded-t-lg font-medium border-b-2 border-convrt-purple">
              Dashboard
            </div>
            <div className="px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm text-gray-600 hover:bg-gray-100 rounded-t-lg font-medium">
              Vendas
            </div>
            <div className="px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm text-gray-600 hover:bg-gray-100 rounded-t-lg font-medium">
              Clientes
            </div>
            <div className="px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm text-gray-600 hover:bg-gray-100 rounded-t-lg font-medium">
              Automações
            </div>
          </div>

          <div className="ml-auto flex items-center space-x-2 md:space-x-4 shrink-0">
            <div className="hidden md:flex items-center bg-green-50 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-xs font-medium text-green-700">248 Leads</span>
            </div>
            <div className="hidden md:flex items-center bg-orange-50 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
              <span className="text-xs font-medium text-orange-700">12 Sequências</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                  alt="User profile" 
                  className="w-full h-full object-cover"
                />
              </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-gray-50 p-3 md:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-4 md:space-y-6">
              {/* AI Message */}
              <div className="bg-white p-3 md:p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-convrt-purple/20 flex items-center justify-center shrink-0">
                    <User className="w-4 h-4 md:w-5 md:h-5 text-convrt-purple" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-700">
                      Olá, encontrei uma oportunidade de automação relevante para seu negócio com 85% de compatibilidade. Como deseja prosseguir?
                    </p>
                    <div className="mt-2 md:mt-3 bg-convrt-purple/5 p-2 md:p-3 rounded-lg">
                      <p className="text-xs text-gray-600 font-medium">Analisar métricas de automação e performance do sistema</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dashboard Card */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-3 md:p-4">
                  {/* Header */}
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-200 overflow-hidden shrink-0">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Perfil" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="flex items-center flex-wrap gap-2">
                        <h3 className="font-medium text-sm md:text-base text-gray-900">Sistema de Automação</h3>
                        <div className="text-xs text-white bg-blue-600 px-1.5 py-0.5 rounded">ERP</div>
                      </div>
                      <p className="text-xs text-gray-500">Métricas de Performance • Atualizado há 2h</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">Processos Ativos</p>
                      <p className="text-lg font-semibold text-convrt-purple">248</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">Automações</p>
                      <p className="text-lg font-semibold text-convrt-purple">12</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">Eficiência</p>
                      <p className="text-lg font-semibold text-green-600">98%</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">Tempo Ganho</p>
                      <p className="text-lg font-semibold text-blue-600">127h</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between flex-wrap gap-2 py-2 border-t border-b border-gray-100">
                    <div className="flex items-center gap-4">
                      <button className="flex items-center space-x-1 text-gray-500 text-xs md:text-sm">
                        <BarChart2 className="w-4 h-4" />
                        <span>Métricas</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 text-xs md:text-sm">
                        <Clock className="w-4 h-4" />
                        <span>Histórico</span>
                      </button>
                    </div>
                    <button className="flex items-center space-x-1 bg-convrt-purple/10 text-convrt-purple px-2 py-1 rounded-md text-xs md:text-sm">
                      <Sparkles className="w-4 h-4" />
                      <span>Otimizar</span>
                    </button>
                  </div>
                </div>

                {/* Performance Section */}
                <div className="bg-convrt-purple/5 p-3 md:p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs md:text-sm font-medium text-gray-700">Performance Geral</span>
                    <span className="text-convrt-purple font-bold">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Próxima análise em 2h</div>
                </div>

                {/* Análise de Performance */}
                <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-medium text-gray-700">Análise de Performance</h4>
                    <BarChart2 className="w-4 h-4 text-gray-500" />
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>CPU</span>
                        <span>45%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-gradient-to-r from-blue-900 via-blue 700 to-blue-500 h-1.5 rounded-full" style={{width: '45%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Memória</span>
                        <span>72%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 h-1.5 rounded-full" style={{width: '72%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Rede</span>
                        <span>89%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 h-1.5 rounded-full" style={{width: '89%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between p-3 border-t border-gray-200">
                  <button className="text-gray-500 flex items-center text-xs md:text-sm">
                    <ArrowLeft className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    Anterior
                  </button>
                  <button className="text-red-500 flex items-center text-xs md:text-sm">
                    <X className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    Pausar
                  </button>
                  <button className="text-gray-500 flex items-center text-xs md:text-sm">
                    Próximo
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-sm font-medium text-gray-700 mb-3 text-center">Status do Sistema</h3>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-600 font-medium text-sm">Operando Normalmente</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Processos em Execução</h3>
                <div className="text-convrt-purple font-medium text-sm">12 Ativos</div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Eficiência do Sistema</h3>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                  <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 h-2 rounded-full" style={{width: '98%'}}></div>
                </div>
                <div className="text-right text-sm font-medium text-convrt-purple">98%</div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-sm font-medium text-gray-700 mb-3 text-center">Módulos Ativos</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-convrt-purple/10 text-convrt-purple text-xs px-2 py-1 rounded-md">CRM</span>
                  <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-md">ERP</span>
                  <span className="bg-green-50 text-green-600 text-xs px-2 py-1 rounded-md">Financeiro</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-sm font-medium text-gray-700 mb-3 text-center">Próxima Manutenção</h3>
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="w-4 h-4 text-convrt-purple" />
                  <span className="text-convrt-purple font-medium text-sm">Em 7 dias</span>
                </div>
              </div>

              {/* Element to fill empty space */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Espaço Preenchido</h3>
                <div className="text-gray-500 text-sm">Este espaço foi preenchido com um elemento para melhorar a estética.</div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                  <Sparkles className="w-4 h-4 text-convrt-purple mr-1" />
                  Ações Recomendadas
                </h3>
                <div className="space-y-2">
                  <button className="w-full bg-white border-2 border-convrt-purple text-convrt-purple py-2 rounded-lg text-sm font-medium flex items-center justify-center hover:bg-convrt-purple hover:text-white transition-colors">
                    <Send className="w-4 h-4 mr-2" />
                    Otimizar Sistema
                  </button>
                  <button className="w-full border border-convrt-purple text-convrt-purple py-2 rounded-lg text-sm font-medium flex items-center justify-center">
                    <User className="w-4 h-4 mr-2" />
                    Configurar Novo Módulo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notification */}
      <div className="absolute -left-8 top-40 z-10 hidden lg:block">
        <div className="animate-float bg-white/70 backdrop-blur-md p-3 rounded-xl shadow-xl border border-white/20 flex items-center">
          <div className="bg-[#808080]/20 rounded-lg p-2 mr-3">
            <Heart className="w-4 h-4 text-[#0B1F51]" />
          </div>
          <div>
            <div className="text-gray-800 text-xs font-medium">Novo Evento</div>
            <div className="text-gray-600 text-xs">Sistema otimizado</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformDemo;