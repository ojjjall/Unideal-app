import React from 'react';
import { ArrowDown, Database, Layers, Monitor, Cpu, Server } from 'lucide-react';

const presentationNodes = [
  'Student & Admin Interfaces',
  'Login / Registration Screens',
  'Product Listing & Management UI',
  'Search & Recommendation UI',
  'Chat & Messaging UI',
  'Service & Asset Sharing UI',
];

const businessNodes = [
  'User Management Logic',
  'Product & Market Logic',
  'Analytics Engine',
  'Communication Logic',
  'Service & Asset Logic',
  'AI Recommendation Engine',
];

const dataTables = [
  'Users Table',
  'Products Table',
  'Orders Table',
  'Messages Table',
  'Services Table',
  'Analytics Tables',
];

export default function Figure21() {
  return (
    <div className="min-h-screen bg-[#F7F7FF] p-4 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-5xl space-y-8">
        <h1 className="text-xl font-bold text-center">Figure 2.1: System Architecture</h1>

        {/* Presentation Layer */}
        <div className="border-2 border-black rounded-lg p-4 md:p-6 bg-white/50">
          <div className="flex items-center gap-2 mb-4">
            <Monitor className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-wide">Presentation Layer</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {presentationNodes.map((node, i) => (
              <div key={i} className="border border-black rounded bg-white p-3 text-center">
                <p className="text-xs font-medium">{node}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow + Label */}
        <div className="flex justify-center">
          <div className="flex flex-col items-center gap-1">
            <ArrowDown className="w-6 h-6" />
            <span className="bg-[#D3D3D3] text-xs px-3 py-0.5 rounded font-medium">HTTPS API Calls</span>
            <ArrowDown className="w-6 h-6" />
          </div>
        </div>

        {/* Business Logic Layer */}
        <div className="border-2 border-black rounded-lg p-4 md:p-6 bg-white/50">
          <div className="flex items-center gap-2 mb-4">
            <Cpu className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-wide">Application / Business Logic Layer</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {businessNodes.map((node, i) => (
              <div key={i} className="border border-black rounded bg-white p-3 text-center">
                <p className="text-xs font-medium">{node}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow + Label */}
        <div className="flex justify-center">
          <div className="flex flex-col items-center gap-1">
            <ArrowDown className="w-6 h-6" />
            <span className="bg-[#D3D3D3] text-xs px-3 py-0.5 rounded font-medium">SQL Queries</span>
            <ArrowDown className="w-6 h-6" />
          </div>
        </div>

        {/* Data Layer */}
        <div className="border-2 border-black rounded-lg p-4 md:p-6 bg-white/50">
          <div className="flex items-center gap-2 mb-4">
            <Server className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-wide">Data Layer</span>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="flex flex-col items-center gap-2">
              <Database className="w-12 h-12" />
              <span className="text-xs font-bold">MariaDB Database</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 flex-1">
              {dataTables.map((table, i) => (
                <div key={i} className="border border-black rounded bg-white p-3 text-center">
                  <p className="text-xs font-medium">{table}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}