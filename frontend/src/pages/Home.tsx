import React from 'react';
import { Gamepad2, ShieldAlert, Cpu, Zap, Search, Mic } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <section className="relative rounded-3xl overflow-hidden bg-panel border border-secondary/20 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-50 mix-blend-overlay"></div>
        <div className="relative p-8 md:p-16 text-center max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-sm font-medium animate-pulse">
            <Zap size={16} className="text-accent" /> V2.0 Now Live
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            The Ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Gamer & Hacker</span> Hub
          </h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
            Download premium games, master ethical hacking tools, join the global chat, and unlock exclusive content.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link to="/games" className="px-8 py-4 rounded-xl bg-primary text-white font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-primary/30 flex items-center gap-2">
              <Gamepad2 /> Explore Games
            </Link>
            <Link to="/tools" className="px-8 py-4 rounded-xl bg-panel text-foreground border-2 border-primary/50 hover:bg-primary/10 font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2">
              <ShieldAlert /> Hacking Tools
            </Link>
          </div>
        </div>
      </section>

      {/* AI Search Bar */}
      <section className="max-w-3xl mx-auto">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-6 w-6 text-secondary group-focus-within:text-primary transition-colors" />
          </div>
          <input 
            type="text" 
            className="block w-full pl-12 pr-12 py-4 rounded-2xl bg-panel border-2 border-secondary/20 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all text-lg shadow-lg" 
            placeholder="Ask AI or Search games, tools, users..."
          />
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
            <button className="p-2 text-secondary hover:text-primary hover:bg-secondary/10 rounded-full transition-colors">
              <Mic className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="bg-panel p-8 rounded-2xl border border-secondary/20 hover:-translate-y-2 transition-transform shadow-lg group">
          <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
            <Gamepad2 size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-3">Premium Games</h3>
          <p className="text-secondary leading-relaxed">Access a massive library of free and paid games. Secure downloads, version history, and fast mirrors.</p>
        </div>
        <div className="bg-panel p-8 rounded-2xl border border-secondary/20 hover:-translate-y-2 transition-transform shadow-lg group">
          <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform">
            <ShieldAlert size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-3">Ethical Hacking</h3>
          <p className="text-secondary leading-relaxed">Educational resources, tools like Nmap, Wireshark, Burp Suite, and Kali docs for learning.</p>
        </div>
        <div className="bg-panel p-8 rounded-2xl border border-secondary/20 hover:-translate-y-2 transition-transform shadow-lg group">
          <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6 text-foreground group-hover:scale-110 transition-transform">
            <Cpu size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-3">AI Assistant</h3>
          <p className="text-secondary leading-relaxed">Powered by AI to give you smart recommendations, answer queries, and moderate content automatically.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
