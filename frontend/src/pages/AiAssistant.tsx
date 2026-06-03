import React, { useState } from 'react';
import { Bot, Send, Sparkles } from 'lucide-react';

const AiAssistant = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { text: "Hello! I am your Ultimate AI Assistant. I can help you find games, explain hacking concepts, or moderate content. How can I help today?", isAi: true }
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages([...messages, { text: input, isAi: false }]);
    setInput('');
    
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "I'm currently running in demo mode, but I will be able to answer that fully once the backend AI is connected!", isAi: true }]);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto h-[80vh] flex flex-col bg-panel border border-secondary/20 rounded-3xl overflow-hidden shadow-2xl">
      <div className="p-6 border-b border-secondary/20 bg-gradient-to-r from-primary/10 to-accent/10 flex items-center gap-4">
        <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
          <Bot size={28} />
        </div>
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">Ultimate AI <Sparkles size={20} className="text-accent" /></h1>
          <p className="text-secondary text-sm">Smart Recommendations & Support Chatbot</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.isAi ? 'justify-start' : 'justify-end'}`}>
            <div className={`max-w-[80%] p-4 rounded-2xl ${msg.isAi ? 'bg-secondary/10 rounded-tl-sm text-foreground' : 'bg-primary text-white rounded-tr-sm shadow-lg'}`}>
              <p className="leading-relaxed">{msg.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-secondary/20 bg-background">
        <form onSubmit={handleSend} className="relative">
          <input
            type="text"
            className="w-full bg-panel border-2 border-secondary/30 focus:border-primary px-6 py-4 rounded-2xl outline-none transition-all shadow-inner"
            placeholder="Ask AI anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-primary text-white rounded-xl hover:bg-opacity-90 transition-all shadow-lg">
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AiAssistant;
