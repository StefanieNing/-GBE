import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import DigitalTwinEarth from './DigitalTwinEarth';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay loop muted playsInline
          poster="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop"
          className="w-full h-full object-cover opacity-30"
        >
          <source src="https://cdn.pixabay.com/video/2020/05/14/38863-419131608_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black"></div>
      </div>

      <DigitalTwinEarth />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto rounded-full bg-blue-500/20 blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-blue-500">
            AI+能源驱动的<br/>“零碳新质生产力”运营商
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 pointer-events-auto"
        >
          <motion.button 
            whileHover={{ scale: 1.05, borderRadius: ["30px", "20px", "30px"] }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-white text-black rounded-full font-medium tracking-wide overflow-hidden transition-all"
          >
            <span className="relative z-10 flex items-center gap-2">
              探索解决方案 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
          <button className="px-8 py-4 rounded-full font-medium tracking-wide text-white border border-white/20 hover:bg-white/10 transition-colors backdrop-blur-sm">
            了解我们
          </button>
        </motion.div>
      </div>
    </section>
  );
}
