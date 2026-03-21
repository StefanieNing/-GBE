import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Cases from './components/Cases';
import About from './components/About';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-emerald-500/30">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Products />
      <Cases />
      <About />
      <AIAssistant />
      <Footer />
    </div>
  );
}
