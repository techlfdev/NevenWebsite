
import React, { useState } from 'react';
import { Database, Users, BarChart2, Settings, Shield, Server } from 'lucide-react';
import { motion } from 'framer-motion';

const SystemDemo = () => {
  const [activeModule, setActiveModule] = useState(null);

  const modules = [
    { name: 'Financeiro', icon: BarChart2, color: 'green' },
    { name: 'Estoque', icon: Database, color: 'blue' },
    { name: 'Vendas', icon: Server, color: 'purple' },
    { name: 'RH', icon: Users, color: 'orange' }
  ];

  return (
    <div className="relative w-full bg-white rounded-xl shadow-lg border border-gray-100">
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <Settings className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Sistema ERP</h3>
            <p className="text-sm text-gray-500">Módulos Integrados</p>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <motion.div 
            className="bg-blue-50 p-4 rounded-lg"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Usuários Ativos</span>
              <Users className="w-4 h-4 text-blue-600" />
            </div>
            <motion.div 
              className="text-2xl font-bold text-blue-600"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              2,847
            </motion.div>
          </motion.div>

          <motion.div 
            className="bg-purple-50 p-4 rounded-lg"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Segurança</span>
              <Shield className="w-4 h-4 text-purple-600" />
            </div>
            <motion.div 
              className="text-2xl font-bold text-purple-600"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              99.9%
            </motion.div>
          </motion.div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="text-sm font-medium mb-4">Módulos do Sistema</h4>
          <div className="grid grid-cols-2 gap-3">
            {modules.map((module, index) => (
              <motion.div
                key={module.name}
                className={`p-3 rounded-lg cursor-pointer transition-colors ${
                  activeModule === module.name
                    ? `bg-${module.color}-100`
                    : 'bg-white hover:bg-gray-100'
                }`}
                onClick={() => setActiveModule(module.name)}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3">
                  <module.icon className={`w-5 h-5 text-${module.color}-600`} />
                  <span className="text-sm font-medium">{module.name}</span>
                </div>
                <motion.div
                  className={`h-1 bg-${module.color}-500 rounded-full mt-2`}
                  initial={{ width: "0%" }}
                  animate={{ width: activeModule === module.name ? "100%" : "0%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="mt-4 bg-green-50 p-4 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Performance</span>
            <BarChart2 className="w-4 h-4 text-green-600" />
          </div>
          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>CPU Usage</span>
                <span>45%</span>
              </div>
              <motion.div
                className="w-full bg-green-200 rounded-full h-2 overflow-hidden"
              >
                <motion.div 
                  className="h-full bg-green-600 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "45%" }}
                  transition={{ duration: 1 }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SystemDemo;
