import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, Float } from '@react-three/drei';
import { motion, AnimatePresence } from 'motion/react';
import { X, Info } from 'lucide-react';

// A simple placeholder 3D model for the battery/energy storage unit
function EnergyStorageModel() {
  return (
    <group>
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[2, 4, 2]} />
        <meshStandardMaterial color="#1f2937" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, 2.1, 0]}>
        <boxGeometry args={[1.8, 0.2, 1.8]} />
        <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0, 0, 1.01]}>
        <planeGeometry args={[1.5, 3]} />
        <meshStandardMaterial color="#111827" />
      </mesh>
      {/* Screen */}
      <mesh position={[0, 1, 1.02]}>
        <planeGeometry args={[1, 0.5]} />
        <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={0.8} />
      </mesh>
    </group>
  );
}

export default function ProductViewer({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [activeParam, setActiveParam] = useState<string | null>(null);

  const parameters = [
    { id: 'capacity', label: '储能容量', value: '100kWh - 2MWh', desc: '采用高能量密度磷酸铁锂电芯，支持模块化扩展，满足不同规模工商业储能需求。' },
    { id: 'efficiency', label: '系统效率', value: '> 90%', desc: '采用AethraCore智能温控与BMS系统，全生命周期内保持极高充放电效率。' },
    { id: 'lifespan', label: '循环寿命', value: '8000次+', desc: '基于AI电池健康度预测算法，延长电池使用寿命，降低全生命周期成本(LCOE)。' },
    { id: 'response', label: '响应时间', value: '< 20ms', desc: '毫秒级并离网切换，无缝保障关键负载不断电，支持电网削峰填谷与需求侧响应。' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="w-full max-w-7xl h-full max-h-[90vh] flex flex-col lg:flex-row bg-zinc-950 border border-white/10 rounded-3xl overflow-hidden relative">
            
            {/* 3D Viewer Area */}
            <div className="flex-1 relative cursor-grab active:cursor-grabbing bg-gradient-to-b from-zinc-900 to-black">
              <div className="absolute top-8 left-8 z-10">
                <h3 className="text-3xl font-display font-bold text-white mb-2">Aethra·臻电™ 储能柜</h3>
                <p className="text-white/60 font-light tracking-widest">360° 全景预览 (拖拽旋转)</p>
              </div>
              
              <Canvas shadows camera={{ position: [4, 2, 6], fov: 45 }}>
                <Suspense fallback={null}>
                  <Stage environment="city" intensity={0.5}>
                    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                      <EnergyStorageModel />
                    </Float>
                  </Stage>
                  <OrbitControls autoRotate autoRotateSpeed={1} enableZoom={true} maxPolarAngle={Math.PI / 2} minPolarAngle={0} />
                </Suspense>
              </Canvas>
            </div>

            {/* Parameters Panel */}
            <div className="w-full lg:w-[400px] bg-black border-l border-white/10 p-8 flex flex-col overflow-y-auto">
              <div className="flex items-center gap-3 mb-8">
                <Info className="w-6 h-6 text-blue-400" />
                <h4 className="text-xl font-medium text-white">核心技术参数</h4>
              </div>

              <div className="space-y-6">
                {parameters.map((param) => (
                  <div 
                    key={param.id}
                    className="group"
                    onMouseEnter={() => setActiveParam(param.id)}
                    onMouseLeave={() => setActiveParam(null)}
                  >
                    <div className="flex justify-between items-end border-b border-white/10 pb-2 mb-3 cursor-pointer">
                      <span className="text-white/60 font-light">{param.label}</span>
                      <span className="text-xl font-medium text-white group-hover:text-blue-400 transition-colors">{param.value}</span>
                    </div>
                    
                    <AnimatePresence>
                      {activeParam === param.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-white/50 font-light leading-relaxed pb-4">
                            {param.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-12">
                <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium tracking-wide transition-colors">
                  下载完整产品手册
                </button>
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
