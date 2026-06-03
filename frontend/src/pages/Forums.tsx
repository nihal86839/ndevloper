import React from 'react';
import { MessageSquare, Users, Pin, Flame } from 'lucide-react';

const mockTopics = [
  { id: 1, title: 'Best Kali Linux Tools for Beginners', author: 'NoobMaster', replies: 45, views: '1.2K', isPinned: true },
  { id: 2, title: 'CyberDash Tournament Strategy Guide', author: 'ProGamerX', replies: 120, views: '5.4K', isHot: true },
  { id: 3, title: 'Help configuring Burp Suite proxy', author: 'DevGuy', replies: 12, views: '340' },
  { id: 4, title: 'Who is excited for the new RPG release?', author: 'RPG_Fan', replies: 89, views: '2.1K' },
];

const Forums = () => {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="flex justify-between items-end border-b border-secondary/20 pb-6">
        <div>
          <h1 className="text-4xl font-bold flex items-center gap-3">
            <MessageSquare className="text-primary w-10 h-10" /> Community Forums
          </h1>
          <p className="text-secondary mt-2">Discuss games, share hacking tips, and participate in polls.</p>
        </div>
        <button className="px-6 py-2 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-opacity-90">
          New Topic
        </button>
      </div>

      <div className="bg-panel border border-secondary/20 rounded-3xl overflow-hidden shadow-md">
        <div className="grid grid-cols-[1fr_auto_auto] gap-4 p-4 bg-secondary/10 font-bold text-sm text-secondary px-6">
          <div>Topic</div>
          <div className="hidden md:block w-24 text-center">Replies</div>
          <div className="hidden md:block w-24 text-center">Views</div>
        </div>
        
        <div className="divide-y divide-secondary/10">
          {mockTopics.map(topic => (
            <div key={topic.id} className="grid grid-cols-[1fr_auto_auto] gap-4 p-6 hover:bg-secondary/5 transition-colors items-center group cursor-pointer">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  {topic.isPinned && <Pin size={16} className="text-red-500 fill-current" />}
                  {topic.isHot && <Flame size={16} className="text-orange-500 fill-current" />}
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{topic.title}</h3>
                </div>
                <p className="text-sm text-secondary flex items-center gap-1">
                  By <span className="font-bold">{topic.author}</span>
                </p>
              </div>
              <div className="hidden md:block w-24 text-center font-bold text-secondary">{topic.replies}</div>
              <div className="hidden md:block w-24 text-center font-bold text-secondary">{topic.views}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forums;
