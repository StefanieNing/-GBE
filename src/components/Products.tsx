import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, Cpu, Leaf } from 'lucide-react';
import ProductViewer from './ProductViewer';

const services = [
  { id: 'zhendian', title: 'Aethra·臻电™', desc: '主动式电能治理', icon: Activity, color: 'blue' },
  { id: 'yuneng', title: 'Aethra·驭能™', desc: 'AI驱动的能源自动驾驶', icon: Cpu, color: 'emerald' },
  { id: 'lvqing', title: 'Aethra·绿擎™', desc: '碳管理与ESG合规', icon: Leaf, color: 'teal' }
];

export default function Products() {
  const [activeTab, setActiveTab] = useState('全部');
  const [expandedMatrix, setExpandedMatrix] = useState(false);
  const [viewerOpen, setViewerOpen] = useState(false);

  return (
    <section id="products" className="py-32 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight">产品中心</h2>
          <p className="text-white/60 tracking-widest font-light">1+5多维产品矩阵 · 六维建设体系</p>
        </div>

        {/* Matrix Toggle */}
        <div className="mb-16 border border-white/10 rounded-2xl p-8 bg-white/[0.02] backdrop-blur-sm cursor-pointer hover:bg-white/[0.04] transition-colors" onClick={() => setExpandedMatrix(!expandedMatrix)}>
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-light tracking-wide">以 AethraCore AI 模型为核心的 1+5 多维产品矩阵</h3>
            <span className="text-blue-400">{expandedMatrix ? '收起' : '展开'}</span>
          </div>
          <AnimatePresence>
            {expandedMatrix && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden mt-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                  <div>
                    <h4 className="text-xl text-blue-400 mb-4">端-边-云 架构</h4>
                    <ul className="space-y-2 text-white/70 font-light">
                      <li>AethraEdge 边缘能量控制</li>
                      <li>AethraPilot AI智能控制</li>
                      <li>AethraGrid 能源管理云平台</li>
                      <li>擎苍 AethraCore 大模型</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl text-emerald-400 mb-4">六维建设体系</h4>
                    <ul className="space-y-2 text-white/70 font-light">
                      <li>科学算碳 | 源头减碳 | 过程脱碳</li>
                      <li>智能控碳 | 协同降碳 | 抵消披露</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {['全部', '智能设备', '软件系统', '解决方案'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-light tracking-widest transition-all ${activeTab === tab ? 'bg-white text-black' : 'border border-white/20 text-white/60 hover:text-white'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Brand Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div 
              key={service.id}
              whileHover={{ y: -10 }}
              onClick={() => setViewerOpen(true)}
              className={`p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-${service.color}-500/50 transition-colors relative overflow-hidden group cursor-pointer`}
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${service.color}-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              <service.icon className={`w-10 h-10 text-${service.color}-400 mb-6`} />
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/60 font-light">{service.desc}</p>
              <div className="mt-8 text-sm text-white/40 group-hover:text-white/80 transition-colors flex items-center gap-2">
                查看3D模型及参数 &rarr;
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProductViewer isOpen={viewerOpen} onClose={() => setViewerOpen(false)} />
    </section>
  );
}
