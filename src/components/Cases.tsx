import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowRight, Zap, Leaf, TrendingDown } from 'lucide-react';

const projects = [
  { 
    id: 'p1',
    title: '光储一体化项目', 
    tag: '零碳工厂', 
    img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop',
    stats: { energy: '120万度', carbon: '850吨', cost: '15%' },
    chartData: [
      { month: '1月', 传统能耗: 4000, 优化后能耗: 3200 },
      { month: '2月', 传统能耗: 3800, 优化后能耗: 2900 },
      { month: '3月', 传统能耗: 4200, 优化后能耗: 3100 },
      { month: '4月', 传统能耗: 4500, 优化后能耗: 3400 },
      { month: '5月', 传统能耗: 4800, 优化后能耗: 3600 },
      { month: '6月', 传统能耗: 5200, 优化后能耗: 3800 },
    ]
  },
  { 
    id: 'p2',
    title: '绿电+水蓄冷项目', 
    tag: '零碳工厂', 
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop',
    stats: { energy: '80万度', carbon: '520吨', cost: '22%' },
    chartData: [
      { month: '1月', 传统能耗: 3000, 优化后能耗: 2200 },
      { month: '2月', 传统能耗: 3200, 优化后能耗: 2100 },
      { month: '3月', 传统能耗: 3500, 优化后能耗: 2400 },
      { month: '4月', 传统能耗: 3800, 优化后能耗: 2600 },
      { month: '5月', 传统能耗: 4000, 优化后能耗: 2800 },
      { month: '6月', 传统能耗: 4500, 优化后能耗: 3000 },
    ]
  },
  { 
    id: 'p3',
    title: '光伏+污水处理项目', 
    tag: '零碳园区', 
    img: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=800&auto=format&fit=crop',
    stats: { energy: '250万度', carbon: '1800吨', cost: '18%' },
    chartData: [
      { month: '1月', 传统能耗: 8000, 优化后能耗: 6200 },
      { month: '2月', 传统能耗: 7800, 优化后能耗: 5900 },
      { month: '3月', 传统能耗: 8200, 优化后能耗: 6100 },
      { month: '4月', 传统能耗: 8500, 优化后能耗: 6400 },
      { month: '5月', 传统能耗: 8800, 优化后能耗: 6600 },
      { month: '6月', 传统能耗: 9200, 优化后能耗: 6800 },
    ]
  },
  { 
    id: 'p4',
    title: '德国光储充一体化项目', 
    tag: '零碳园区', 
    img: 'https://images.unsplash.com/photo-1563985337583-12d76b107e32?q=80&w=800&auto=format&fit=crop',
    stats: { energy: '320万度', carbon: '2100吨', cost: '25%' },
    chartData: [
      { month: '1月', 传统能耗: 10000, 优化后能耗: 7200 },
      { month: '2月', 传统能耗: 9800, 优化后能耗: 6900 },
      { month: '3月', 传统能耗: 10200, 优化后能耗: 7100 },
      { month: '4月', 传统能耗: 10500, 优化后能耗: 7400 },
      { month: '5月', 传统能耗: 10800, 优化后能耗: 7600 },
      { month: '6月', 传统能耗: 11200, 优化后能耗: 7800 },
    ]
  }
];

export default function Cases() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section id="cases" className="py-32 bg-zinc-950 text-white relative overflow-hidden">
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight">案例中心</h2>
          <p className="text-white/60 tracking-widest font-light">标杆项目展示与成效分析</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Timeline / Project List */}
          <div className="lg:col-span-4 space-y-4 relative">
            <div className="absolute left-[23px] top-8 bottom-8 w-px bg-white/10 hidden lg:block"></div>
            
            {projects.map((p, i) => (
              <div 
                key={p.id}
                onClick={() => setActiveProject(p)}
                className={`relative flex items-center gap-6 p-4 rounded-2xl cursor-pointer transition-all ${activeProject.id === p.id ? 'bg-white/10 border border-white/20' : 'hover:bg-white/5 border border-transparent'}`}
              >
                <div className={`w-4 h-4 rounded-full border-2 z-10 hidden lg:block ${activeProject.id === p.id ? 'bg-emerald-500 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 'bg-zinc-950 border-white/30'}`}></div>
                <div className="flex-1">
                  <span className="text-xs font-medium text-emerald-400 mb-1 block">{p.tag}</span>
                  <h3 className={`text-lg font-medium transition-colors ${activeProject.id === p.id ? 'text-white' : 'text-white/70'}`}>{p.title}</h3>
                </div>
                <ArrowRight className={`w-5 h-5 transition-all ${activeProject.id === p.id ? 'text-white opacity-100 translate-x-0' : 'text-white/30 opacity-0 -translate-x-4'}`} />
              </div>
            ))}
          </div>

          {/* Project Details & Chart */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-black border border-white/10 rounded-3xl overflow-hidden"
              >
                <div className="h-64 md:h-80 relative">
                  <img src={activeProject.img} alt={activeProject.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-8">
                    <h3 className="text-3xl font-bold text-white">{activeProject.title}</h3>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid grid-cols-3 gap-6 mb-12">
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                      <Zap className="w-6 h-6 text-blue-400 mb-4" />
                      <div className="text-sm text-white/50 mb-1">年节约电量</div>
                      <div className="text-2xl font-bold">{activeProject.stats.energy}</div>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                      <Leaf className="w-6 h-6 text-emerald-400 mb-4" />
                      <div className="text-sm text-white/50 mb-1">年减碳量</div>
                      <div className="text-2xl font-bold">{activeProject.stats.carbon}</div>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                      <TrendingDown className="w-6 h-6 text-teal-400 mb-4" />
                      <div className="text-sm text-white/50 mb-1">综合成本降低</div>
                      <div className="text-2xl font-bold">{activeProject.stats.cost}</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-6 flex items-center gap-2">
                      <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                      能耗优化对比分析
                    </h4>
                    <div className="h-72 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={activeProject.chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                          <defs>
                            <linearGradient id="colorTraditional" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                              <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorOptimized" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                              <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                          <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" tick={{fill: 'rgba(255,255,255,0.5)', fontSize: 12}} axisLine={false} tickLine={false} />
                          <YAxis stroke="rgba(255,255,255,0.5)" tick={{fill: 'rgba(255,255,255,0.5)', fontSize: 12}} axisLine={false} tickLine={false} />
                          <Tooltip 
                            contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
                            itemStyle={{ color: '#fff' }}
                          />
                          <Area type="monotone" dataKey="传统能耗" stroke="#ef4444" strokeWidth={2} fillOpacity={1} fill="url(#colorTraditional)" />
                          <Area type="monotone" dataKey="优化后能耗" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorOptimized)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
