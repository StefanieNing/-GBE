import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Zap, 
  Activity, 
  Leaf, 
  Cpu, 
  Cloud, 
  Server, 
  ChevronRight, 
  Menu, 
  X,
  Globe,
  BatteryCharging,
  BarChart3
} from 'lucide-react';

export default function App() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '核心服务', href: '#services' },
    { name: '技术架构', href: '#technology' },
    { name: '项目案例', href: '#cases' },
    { name: '关于我们', href: '#about' },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-emerald-500/30">
      {/* Navbar */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-blue-600 flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" fill="currentColor" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight">AethraVolt <span className="text-white/60 font-normal text-sm ml-1">合擎源动</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="px-5 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-white/90 transition-colors">
              联系我们
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 py-4 px-6 flex flex-col gap-4 md:hidden">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-base font-medium text-white/80 hover:text-white py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full py-3 mt-2 text-sm font-medium bg-white text-black rounded-full">
              联系我们
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            poster="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-40"
          >
            <source src="https://cdn.pixabay.com/video/2020/05/14/38863-419131608_large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-10 max-w-4xl mx-auto leading-tight">
              AI+能源驱动的“零碳新质生产力”运营商
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all flex items-center justify-center gap-2">
              探索解决方案 <ChevronRight className="w-4 h-4" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-medium hover:bg-white/20 transition-all">
              了解 AethraCore
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-black border-b border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { num: "100亿+", label: "全球零碳总投资额", icon: <Globe className="w-6 h-6 text-blue-400" /> },
              { num: "6GW+", label: "聚合管理绿色能源资产", icon: <BatteryCharging className="w-6 h-6 text-emerald-400" /> },
              { num: "400+", label: "运营零碳工厂与园区", icon: <Server className="w-6 h-6 text-purple-400" /> }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col items-center text-center pt-12 md:pt-0"
              >
                <div className="mb-4 p-3 rounded-2xl bg-white/5 border border-white/10">
                  {stat.icon}
                </div>
                <h3 className="text-4xl md:text-5xl font-display font-bold mb-2">{stat.num}</h3>
                <p className="text-white/50 text-sm uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section (Tesla Style Alternating) */}
      <section id="services" className="bg-zinc-950">
        {/* Service 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
          <div className="order-2 lg:order-1 relative overflow-hidden h-[50vh] lg:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
              alt="Aethra 臻电" 
              className="absolute inset-0 w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent lg:bg-gradient-to-r"></div>
          </div>
          <div className="order-1 lg:order-2 flex flex-col justify-center p-12 lg:p-24 bg-zinc-950">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
                <Activity className="w-3 h-3" /> 生产大动脉保障
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Aethra·臻电™</h2>
              <p className="text-lg text-white/60 mb-8 leading-relaxed">
                针对高端制造业痛点，提供基于AI的主动式电能治理方案，保障生产“大动脉”稳定运行。
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "三相不平衡治理：解决负荷分配不均难题",
                  "谐波抑制：保护精密制造设备寿命",
                  "无功补偿：提升功率因数至99%以上",
                  "AI主动防御：毫秒级响应电压波动"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Service 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
          <div className="flex flex-col justify-center p-12 lg:p-24 bg-zinc-900">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6">
                <Cpu className="w-3 h-3" /> 能源自动驾驶
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Aethra·驭能™</h2>
              <p className="text-lg text-white/60 mb-8 leading-relaxed">
                构建“源-网-荷-储”多维灵活性资源池，实现AI驱动的能源自动驾驶，将成本中心转化为收益资产。
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "AI削峰填谷：降低容量电费与尖峰电费",
                  "智能水蓄冷：错峰制冷，优化空调能耗",
                  "VPP收益：聚合柔性负荷参与市场交易",
                  "绿电最大化：提升光伏/储能自用率"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          <div className="relative overflow-hidden h-[50vh] lg:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
              alt="Aethra 驭能" 
              className="absolute inset-0 w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent lg:bg-gradient-to-l"></div>
          </div>
        </div>

        {/* Service 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
          <div className="order-2 lg:order-1 relative overflow-hidden h-[50vh] lg:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop" 
              alt="Aethra 绿擎" 
              className="absolute inset-0 w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:bg-gradient-to-r"></div>
          </div>
          <div className="order-1 lg:order-2 flex flex-col justify-center p-12 lg:p-24 bg-black">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-medium mb-6">
                <Leaf className="w-3 h-3" /> 全球绿色合规
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Aethra·绿擎™</h2>
              <p className="text-lg text-white/60 mb-8 leading-relaxed">
                以能源数字化和AI驱动，提供可量化、可核查的碳管理报告，助力企业实现全球供应链的绿色合规。
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "AethraGrid平台：能源管理AI中枢",
                  "EMS+MES联动：产线级能耗监控与预警",
                  "碳足迹追踪：实时生成国际标准碳报告",
                  "ESG合规服务：满足CBAM要求"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Architecture */}
      <section id="technology" className="py-32 bg-black relative overflow-hidden">
        {/* Abstract Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">工业绿色微电网</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              “端-边-云”三位一体能源数字化系统，重构能源用电效率
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Edge */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl relative overflow-hidden group hover:border-white/20 transition-colors"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <Server className="w-10 h-10 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold mb-3">AethraEdge</h3>
              <p className="text-sm text-blue-400 mb-4">边缘能量控制器</p>
              <p className="text-white/60 text-sm leading-relaxed">
                一体化智能硬件架构，减少40%以上外围设备。高频数字电源响应速度提升10倍，实现设备级毫秒级优化控制，非侵入式接入。
              </p>
            </motion.div>

            {/* AI */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl relative overflow-hidden group hover:border-white/20 transition-colors"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <Cpu className="w-10 h-10 text-emerald-400 mb-6" />
              <h3 className="text-2xl font-bold mb-3">AethraPilot</h3>
              <p className="text-sm text-emerald-400 mb-4">AI智能控制模块</p>
              <p className="text-white/60 text-sm leading-relaxed">
                内置AI控制模块，实现负荷预测与动态功率优化。AI学习产线节拍，自动调整设备运行参数，实现“人休机停、按需供能”。
              </p>
            </motion.div>

            {/* Cloud */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl relative overflow-hidden group hover:border-white/20 transition-colors"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <Cloud className="w-10 h-10 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold mb-3">AethraGrid</h3>
              <p className="text-sm text-purple-400 mb-4">能源管理系统云平台</p>
              <p className="text-white/60 text-sm leading-relaxed">
                以擎苍AethraCore能源中枢大模型为核心，构建“1+5”多维产品矩阵。实现多目标决策、资源调度与策略下发。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">项目案例</h2>
              <p className="text-xl text-white/60 max-w-2xl">
                激活绿色能源资产价值，协同实现“能耗双控”与产业升级双突破。
              </p>
            </div>
            <button className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors pb-2 border-b border-white/20 hover:border-white">
              查看全部案例 <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "光储一体化项目",
                category: "零碳工厂",
                image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop"
              },
              {
                title: "光伏+污水处理项目",
                category: "零碳园区",
                image: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?q=80&w=2076&auto=format&fit=crop"
              },
              {
                title: "德国光储充一体化项目",
                category: "海外零碳园区",
                image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2070&auto=format&fit=crop"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/10 text-white/80">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-emerald-400 transition-colors">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-emerald-400" />
              <span className="text-lg font-display font-bold">AethraVolt <span className="text-white/60 font-normal text-sm ml-1">合擎源动</span></span>
            </div>
            <div className="flex items-center gap-6 text-sm text-white/50">
              <a href="#" className="hover:text-white transition-colors">隐私政策</a>
              <a href="#" className="hover:text-white transition-colors">服务条款</a>
              <a href="#" className="hover:text-white transition-colors">联系我们</a>
            </div>
          </div>
          <div className="mt-8 text-center md:text-left text-sm text-white/30">
            &copy; {new Date().getFullYear()} AethraVolt. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
