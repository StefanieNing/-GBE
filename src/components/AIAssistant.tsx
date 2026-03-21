import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, Zap, ShieldCheck, Loader2, Send } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

// Note: Ensure GEMINI_API_KEY is properly set in AI Studio Secrets
const ai = new GoogleGenAI({ apiKey: (import.meta as any).env?.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY || '' });

export default function AIAssistant() {
  const [activeTab, setActiveTab] = useState<'diagnosis' | 'compliance'>('diagnosis');
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setResponse('');
    
    try {
      const prompt = activeTab === 'diagnosis' 
        ? `作为AethraVolt的AI智能能耗诊断专家，请分析以下工厂/园区的能耗数据或描述，并给出专业的节能建议和AethraVolt解决方案的匹配度：\n\n${input}`
        : `作为AethraVolt的AI行业合规助手，请根据以下企业情况，分析其在ESG、碳足迹追踪或CBAM等方面的合规风险，并提供Aethra·绿擎™相关的解决方案建议：\n\n${input}`;

      const result = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
      });
      
      setResponse(result.text || '无法生成分析报告，请稍后再试。');
    } catch (error) {
      console.error("AI Analysis Error:", error);
      setResponse('AI服务暂时不可用，请检查API密钥配置或稍后再试。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-assistant" className="py-32 bg-zinc-950 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight">AI 智能引擎</h2>
          <p className="text-white/60 tracking-widest font-light">基于擎苍 AethraCore 大模型的行业专属AI助手</p>
        </div>

        <div className="bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl">
          <div className="flex border-b border-white/10">
            <button 
              className={`flex-1 py-6 flex items-center justify-center gap-3 transition-colors ${activeTab === 'diagnosis' ? 'bg-blue-500/10 text-blue-400 border-b-2 border-blue-500' : 'text-white/60 hover:bg-white/5'}`}
              onClick={() => { setActiveTab('diagnosis'); setResponse(''); setInput(''); }}
            >
              <Zap className="w-5 h-5" />
              <span className="font-medium tracking-wide">智能能耗诊断</span>
            </button>
            <button 
              className={`flex-1 py-6 flex items-center justify-center gap-3 transition-colors ${activeTab === 'compliance' ? 'bg-teal-500/10 text-teal-400 border-b-2 border-teal-500' : 'text-white/60 hover:bg-white/5'}`}
              onClick={() => { setActiveTab('compliance'); setResponse(''); setInput(''); }}
            >
              <ShieldCheck className="w-5 h-5" />
              <span className="font-medium tracking-wide">行业合规助手</span>
            </button>
          </div>

          <div className="p-8 md:p-12">
            <div className="mb-8">
              <label className="block text-sm font-light text-white/80 mb-4">
                {activeTab === 'diagnosis' 
                  ? '请输入您的工厂/园区能耗现状、设备类型或面临的用电痛点：' 
                  : '请输入您的企业行业类型、出口目标国家或当前的碳排放管理现状：'}
              </label>
              <textarea 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={activeTab === 'diagnosis' ? "例如：我们是一家精密制造工厂，近期频繁遇到电压波动导致设备停机，且每月电费成本居高不下..." : "例如：我们是一家汽车零部件出口企业，主要面向欧盟市场，目前缺乏系统的碳足迹追踪手段..."}
                className="w-full h-32 bg-black/50 border border-white/20 rounded-xl p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              ></textarea>
            </div>

            <div className="flex justify-end mb-8">
              <button 
                onClick={handleAnalyze}
                disabled={loading || !input.trim()}
                className="flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                <span>开始{activeTab === 'diagnosis' ? '诊断' : '分析'}</span>
              </button>
            </div>

            <AnimatePresence mode="wait">
              {response && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-black/40 border border-white/10 rounded-2xl p-6 md:p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2 rounded-lg ${activeTab === 'diagnosis' ? 'bg-blue-500/20 text-blue-400' : 'bg-teal-500/20 text-teal-400'}`}>
                      <Bot className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-medium">AI 分析报告</h3>
                  </div>
                  <div className="prose prose-invert max-w-none font-light leading-relaxed text-white/80">
                    {response.split('\n').map((line, i) => (
                      <p key={i} className="mb-2">{line}</p>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
