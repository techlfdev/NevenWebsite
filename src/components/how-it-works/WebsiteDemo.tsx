
import React, { useState } from 'react';
import { Layout, Palette, Eye, Zap, Code, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const WebsiteDemo = () => {
  const [activeTab, setActiveTab] = useState('desktop');

  return (
    <div className="relative w-full bg-white rounded-xl shadow-lg border border-gray-100">
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Layout className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Websites Artesanais</h3>
            <p className="text-sm text-gray-500">Design Responsivo & Performance</p>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveTab('desktop')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'desktop' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
            }`}
          >
            Desktop
          </button>
          <button
            onClick={() => setActiveTab('mobile')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'mobile' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
            }`}
          >
            Mobile
          </button>
        </div>

        <div className="relative bg-gray-50 rounded-lg p-4 h-[300px] overflow-hidden">
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: activeTab === 'desktop' ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Desktop Preview */}
            {activeTab === 'desktop' && (
              <motion.div 
                className="w-full max-w-md bg-white rounded-lg shadow-lg p-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-1/3 animate-pulse" />
                  <div className="h-8 bg-gray-200 rounded w-2/3 animate-pulse" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-blue-100 rounded animate-pulse" />
                    <div className="h-24 bg-purple-100 rounded animate-pulse" />
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: activeTab === 'mobile' ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Mobile Preview */}
            {activeTab === 'mobile' && (
              <motion.div 
                className="w-64 bg-white rounded-2xl shadow-lg p-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="space-y-3">
                  <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse" />
                  <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse" />
                  <div className="h-20 bg-blue-100 rounded animate-pulse" />
                  <div className="h-20 bg-purple-100 rounded animate-pulse" />
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Performance</span>
              <Zap className="w-4 h-4 text-blue-600" />
            </div>
            <motion.div 
              className="text-2xl font-bold text-blue-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              98/100
            </motion.div>
          </div>

          <div className="bg-purple-50 p-3 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Código</span>
              <Code className="w-4 h-4 text-purple-600" />
            </div>
            <motion.div 
              className="text-2xl font-bold text-purple-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              100%
            </motion.div>
          </div>

          <div className="bg-green-50 p-3 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Mobile</span>
              <Smartphone className="w-4 h-4 text-green-600" />
            </div>
            <motion.div 
              className="text-2xl font-bold text-green-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              100%
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDemo;
