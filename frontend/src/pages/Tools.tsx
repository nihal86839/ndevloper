import React from 'react';
import { Terminal, Download, ShieldCheck, Lock } from 'lucide-react';

const mockTools = [
  { id: 1, name: 'Nmap Pro', description: 'Network exploration tool and security / port scanner.', price: 'Free', isPremium: false },
  { id: 2, name: 'Burp Suite Configs', description: 'Advanced configurations for web vulnerability scanning.', price: '$15.00', isPremium: true },
  { id: 3, name: 'Wireshark Filters', description: 'Deep packet inspection templates for analysts.', price: 'Free', isPremium: false },
  { id: 4, name: 'Kali Linux Cheatsheet', description: 'Ultimate terminal command reference for ethical hackers.', price: '$5.00', isPremium: true },
];

const Tools = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-b border-secondary/20 pb-8">
        <div>
          <h1 className="text-4xl font-bold flex items-center gap-3">
            <Terminal className="text-primary w-10 h-10" /> Ethical Hacking Tools
          </h1>
          <p className="text-secondary mt-2">Educational resources and professional cybersecurity tools.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockTools.map(tool => (
          <div key={tool.id} className="bg-panel border border-secondary/20 rounded-2xl p-6 hover:border-primary/50 transition-colors shadow-lg group flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-foreground group-hover:scale-110 transition-transform">
                   <ShieldCheck size={24} />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${tool.isPremium ? 'bg-primary/20 text-primary' : 'bg-green-500/20 text-green-500'}`}>
                  {tool.price}
                </span>
              </div>
              <h3 className="font-bold text-2xl mb-2">{tool.name}</h3>
              <p className="text-secondary mb-6">{tool.description}</p>
            </div>
            
            <button className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all shadow-md
              ${tool.isPremium 
                ? 'bg-primary text-white hover:bg-opacity-90 shadow-primary/30' 
                : 'bg-background border border-secondary/30 hover:bg-secondary/10 hover:border-foreground'}`}
            >
              {tool.isPremium ? <><Lock size={18} /> Unlock Access</> : <><Download size={18} /> Download Now</>}
            </button>
          </div>
        ))}
      </div>
      
      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6 text-yellow-600 dark:text-yellow-400">
        <h4 className="font-bold mb-2 flex items-center gap-2"><ShieldCheck /> Legal Disclaimer</h4>
        <p className="text-sm">These tools are provided strictly for educational purposes and ethical hacking. The Ultimate Gamer/Hacker Platform does not condone illegal activities. You are responsible for your own actions.</p>
      </div>
    </div>
  );
};

export default Tools;
