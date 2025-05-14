
import React, { useState, useCallback } from 'react';
import ReactFlow, { 
  Background, 
  Controls, 
  MiniMap, 
  useNodesState, 
  useEdgesState, 
  addEdge,
  Handle,
  Position,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { Bot, MessageSquare, Database, Store, Globe } from 'lucide-react';

const CustomNode = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-3 border border-gray-200">
      <Handle type="target" position={Position.Left} />
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#0B1F51]/10 rounded-lg flex items-center justify-center text-[#0B1F51]">
          {data.icon}
        </div>
        <span className="text-sm font-medium text-gray-700">{data.label}</span>
      </div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

const nodeTypes = {
  custom: CustomNode,
};

const initialNodes = [
  {
    id: '1',
    type: 'custom',
    position: { x: 0, y: 100 },
    data: { label: 'Website', icon: <Globe className="w-5 h-5 text-[#0B1F51]" /> },
  },
  {
    id: '2',
    type: 'custom',
    position: { x: 250, y: 0 },
    data: { label: 'WhatsApp', icon: <MessageSquare className="w-5 h-5 text-[#0B1F51]" /> },
  },
  {
    id: '3',
    type: 'custom',
    position: { x: 250, y: 200 },
    data: { label: 'Agente de IA', icon: <Bot className="w-5 h-5 text-[#0B1F51]" /> },
  },
  {
    id: '4',
    type: 'custom',
    position: { x: 500, y: 0 },
    data: { label: 'CRM', icon: <Database className="w-5 h-5 text-[#0B1F51]" /> },
  },
  {
    id: '5',
    type: 'custom',
    position: { x: 500, y: 200 },
    data: { label: 'ERP', icon: <Store className="w-5 h-5 text-[#0B1F51]" /> },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },
  { id: 'e2-4', source: '2', target: '4', animated: true },
  { id: 'e3-5', source: '3', target: '5', animated: true },
];

const AutomationDemo = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)),
    [setEdges]
  );

  return (
    <div className="w-full bg-white rounded-xl shadow-lg border border-gray-100">
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-[#0B1F51]/10 rounded-lg flex items-center justify-center">
            <Bot className="w-6 h-6 text-[#0B1F51]" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Automação Inteligente</h3>
            <p className="text-sm text-gray-500">Fluxo de Trabalho Interativo</p>
          </div>
        </div>
      </div>

      <div className="h-[500px] md:h-[600px]">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          className="bg-gray-50"
        >
          <Background />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
    </div>
  );
};

export default AutomationDemo;
