import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
  { name: "深圳 (总部)", coordinates: [114.0579, 22.5431] },
  { name: "加州", coordinates: [-119.4179, 36.7783] },
  { name: "德国", coordinates: [10.4515, 51.1657] },
  { name: "泰国", coordinates: [100.9925, 15.8700] },
  { name: "越南", coordinates: [108.2772, 14.0583] },
  { name: "澳大利亚", coordinates: [133.7751, -25.2744] }
];

const AnimatedCounter = ({ value, suffix = '' }: { value: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value]);
  return <span>{count}{suffix}</span>;
};

export default function About() {
  return (
    <section id="about" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight">价值创造</h2>
          <p className="text-white/60 tracking-widest font-light">用数据定义零碳新质生产力</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group cursor-default"
          >
            <div className="text-6xl md:text-8xl font-thin tracking-tighter text-white group-hover:text-blue-400 transition-colors mb-4">
              <AnimatedCounter value={1} suffix="GW+" />
            </div>
            <p className="text-white/50 font-light tracking-widest">累计运营可再生能源资产</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group cursor-default"
          >
            <div className="text-6xl md:text-8xl font-thin tracking-tighter text-white group-hover:text-emerald-400 transition-colors mb-4">
              <AnimatedCounter value={5} suffix="亿度" />
            </div>
            <p className="text-white/50 font-light tracking-widest">累计节约电能</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group cursor-default"
          >
            <div className="text-6xl md:text-8xl font-thin tracking-tighter text-white group-hover:text-teal-400 transition-colors mb-4">
              <AnimatedCounter value={30} suffix="万吨" />
            </div>
            <p className="text-white/50 font-light tracking-widest">累计减少碳排放</p>
          </motion.div>
        </div>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-xl text-white/80 font-light mb-32"
        >
          我们不仅提供能源解决方案，更构建可持续发展的底层能源能力。
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6">全球化布局</h3>
            <p className="text-white/60 font-light leading-relaxed mb-8">
              成立于2017年加州，2025年设立深圳总部。聚焦低碳绿色能源、能源精益运营、ESG价值创造。
            </p>
            <div className="grid grid-cols-2 gap-6">
              {['核心愿景', '核心定位', '聚焦领域', '客户价值'].map(item => (
                <div key={item} className="p-6 border border-white/10 rounded-2xl bg-white/[0.02]">
                  <h4 className="text-lg font-medium text-blue-400 mb-2">{item}</h4>
                  <div className="w-8 h-1 bg-blue-500/50 rounded-full"></div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] bg-white/[0.02] rounded-3xl border border-white/10 overflow-hidden"
          >
            <ComposableMap projection="geoMercator" projectionConfig={{ scale: 100 }} className="w-full h-full opacity-60">
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography key={geo.rsmKey} geography={geo} fill="#1a1a1a" stroke="#333" strokeWidth={0.5} />
                  ))
                }
              </Geographies>
              {markers.map(({ name, coordinates }, index) => (
                <Marker key={name} coordinates={coordinates as [number, number]}>
                  <motion.circle 
                    r={4} 
                    fill="#00E5FF" 
                    initial={{ scale: 1, opacity: 0.6 }} 
                    animate={{ scale: 3, opacity: 0 }} 
                    transition={{ repeat: Infinity, duration: 2, ease: "easeOut", delay: index * 0.2 }} 
                  />
                  <circle r={2} fill="#fff" />
                  <text
                    textAnchor="middle"
                    y={-10}
                    style={{ fontFamily: "Inter", fill: "#fff", fontSize: "8px", fontWeight: 300 }}
                  >
                    {name}
                  </text>
                </Marker>
              ))}
            </ComposableMap>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
