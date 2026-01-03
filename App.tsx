
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SentimentFeed from './components/SentimentFeed';
import Story from './components/Story';
import Benefits from './components/Benefits';
import Process from './components/Process';
import Features from './components/Features';
import Dashboard from './components/Dashboard';
import Comparison from './components/Comparison';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Animated Mesh Gradients */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="blob w-[600px] h-[600px] bg-purple-200/40 top-[-200px] left-[-200px] will-change-transform"
      />
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="blob w-[500px] h-[500px] bg-indigo-100/40 bottom-[20%] right-[-100px] will-change-transform"
      />

      <Navbar />
      <main>
        <div id="home"><Hero /></div>
        <SentimentFeed />
        <div id="about"><Story /></div>
        <div id="benefits"><Benefits /></div>
        <div id="how-it-works"><Process /></div>
        <div id="features"><Features /></div>
        <div id="platform"><Dashboard /></div>
        <Comparison />
        <div id="faq"><FAQ /></div>
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
