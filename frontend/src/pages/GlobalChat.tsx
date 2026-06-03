import React, { useState, useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import { Send, User as UserIcon } from 'lucide-react';

interface ChatMessage {
  id: string;
  user: string;
  content: string;
  timestamp: string;
  isSelf: boolean;
}

const GlobalChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [socket, setSocket] = useState<Socket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // In a real scenario, this connects to the backend server
    // For now we simulate the connection locally without node running
    const fakeMessages: ChatMessage[] = [
      { id: '1', user: 'Admin', content: 'Welcome to the Global Chat!', timestamp: new Date().toISOString(), isSelf: false },
      { id: '2', user: 'HackerPro99', content: 'Does anyone have the new tool update?', timestamp: new Date().toISOString(), isSelf: false },
    ];
    setMessages(fakeMessages);

    // Mock socket setup
    const newSocket = io('http://localhost:5000', { autoConnect: false });
    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      user: 'You',
      content: inputMessage,
      timestamp: new Date().toISOString(),
      isSelf: true,
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');
    
    // Simulate someone replying
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        user: 'AutoBot',
        content: `I heard you say: ${inputMessage}`,
        timestamp: new Date().toISOString(),
        isSelf: false,
      }]);
    }, 1000);
  };

  return (
    <div className="max-w-6xl mx-auto h-[80vh] flex bg-panel border border-secondary/20 rounded-3xl overflow-hidden shadow-2xl">
      {/* Sidebar: Online Users */}
      <div className="w-64 bg-background border-r border-secondary/20 hidden md:flex flex-col">
        <div className="p-4 border-b border-secondary/20">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            Online Users (24)
          </h3>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {['Admin', 'HackerPro99', 'GamerDude', 'CyberNinja', 'NoobMaster'].map(user => (
            <div key={user} className="flex items-center gap-3 hover:bg-secondary/10 p-2 rounded-lg cursor-pointer transition-colors">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                {user.charAt(0)}
              </div>
              <span className="font-medium text-sm">{user}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col relative">
        <div className="p-4 border-b border-secondary/20 bg-panel/80 backdrop-blur-md absolute top-0 w-full z-10 flex justify-between items-center">
          <div>
            <h2 className="font-bold text-xl"># Global Chat</h2>
            <p className="text-xs text-secondary">Real-time WebSocket Connection</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 pt-24 space-y-4 bg-gradient-to-b from-background/50 to-panel">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.isSelf ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] flex gap-3 ${msg.isSelf ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                   <UserIcon size={16} />
                </div>
                <div>
                  <div className={`text-xs text-secondary mb-1 flex ${msg.isSelf ? 'justify-end' : 'justify-start'}`}>
                    {msg.user} • {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                  <div className={`p-4 rounded-2xl ${msg.isSelf ? 'bg-primary text-white rounded-tr-sm shadow-lg shadow-primary/20' : 'bg-background border border-secondary/20 rounded-tl-sm text-foreground'}`}>
                    {msg.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 bg-background border-t border-secondary/20">
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message in Global Chat..."
              className="flex-1 bg-panel border border-secondary/30 focus:border-primary px-4 py-3 rounded-xl outline-none transition-colors shadow-inner"
            />
            <button 
              type="submit"
              className="bg-primary text-white p-3 rounded-xl hover:bg-opacity-90 hover:scale-105 transition-all shadow-lg shadow-primary/30 flex items-center justify-center"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GlobalChat;
