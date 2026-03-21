import React from 'react';
import { Zap, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black py-16 border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" fill="currentColor" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight">AethraVolt <span className="text-white/60 font-normal text-sm ml-1">合擎源动</span></span>
            </div>
            <p className="text-white/60 text-sm font-light leading-relaxed mb-6">
              AI+能源驱动的“零碳新质生产力”运营商。我们致力于通过数字化与人工智能技术，重构全球能源用电效率。
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">快速链接</h4>
            <ul className="space-y-3 text-sm text-white/60 font-light">
              <li><a href="#home" className="hover:text-white transition-colors">首页</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">产品中心</a></li>
              <li><a href="#cases" className="hover:text-white transition-colors">案例中心</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">关于我们</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">核心服务</h4>
            <ul className="space-y-3 text-sm text-white/60 font-light">
              <li><a href="#products" className="hover:text-white transition-colors">Aethra·臻电™</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Aethra·驭能™</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Aethra·绿擎™</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">联系我们</h4>
            <ul className="space-y-4 text-sm text-white/60 font-light">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                <span>info@aethravolt.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>深圳南山区清华信息港科研楼</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40 font-light">
          <p>&copy; {new Date().getFullYear()} AethraVolt 合擎源动. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">隐私政策</a>
            <a href="#" className="hover:text-white transition-colors">服务条款</a>
            <a href="#" className="hover:text-white transition-colors">合规声明</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
