import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Globe, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-xl">
            {scrolled ? 'AE' : 'AE'}
          </div>
          <motion.div 
            className="overflow-hidden flex flex-col"
            animate={{ width: scrolled ? 'auto' : 0, opacity: scrolled ? 1 : 0 }}
          >
            <span className="text-xl font-bold text-white whitespace-nowrap">Aethra<span className="text-blue-500">V</span>olt</span>
            <span className="text-[10px] text-white/60 tracking-widest whitespace-nowrap">合擎源动</span>
          </motion.div>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-light tracking-widest text-white/80">
          <a href="#home" className="hover:text-white transition-colors">首页</a>
          <a href="#products" className="hover:text-white transition-colors">产品中心</a>
          <a href="#cases" className="hover:text-white transition-colors">案例中心</a>
          <a href="#about" className="hover:text-white transition-colors">关于我们</a>
          <a href="#contact" className="hover:text-white transition-colors">联系我们</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="group relative cursor-pointer flex items-center gap-1 text-white/80 hover:text-white text-sm">
            <Globe className="w-4 h-4" />
            <span>简/EN</span>
            <ChevronDown className="w-3 h-3" />
            <div className="absolute top-full right-0 mt-2 w-32 bg-black/90 border border-white/10 rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity">
              {['中文', 'English', 'ภาษาไทย', 'Tiếng Việt', 'Deutsch'].map(lang => (
                <div key={lang} className="px-4 py-2 hover:bg-white/10 text-sm text-white/80 hover:text-white">{lang}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
