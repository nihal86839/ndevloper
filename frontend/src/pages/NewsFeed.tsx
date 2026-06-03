import React from 'react';
import { Newspaper, ThumbsUp, MessageCircle, Share2, Star } from 'lucide-react';

const mockNews = [
  { id: 1, title: 'CyberDash 2026 Expansion Announced', author: 'GamerDude', content: 'The highly anticipated expansion for CyberDash drops next month with new levels and boss fights.', time: '2h ago', likes: 245, comments: 42 },
  { id: 2, title: 'New Vulnerability Found in OpenSSL', author: 'SecurityBot', content: 'A critical vulnerability (CVE-2026-XXXX) has been patched. Make sure your servers are updated.', time: '5h ago', likes: 890, comments: 120 },
  { id: 3, title: 'Review: Neon Racing VR', author: 'VRMaster', content: 'Neon racing brings an incredible sense of speed, but the tracks get repetitive after 10 hours of play. 4/5 Stars.', time: '1d ago', likes: 120, comments: 15 },
];

const NewsFeed = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="flex items-center gap-3 border-b border-secondary/20 pb-6">
        <Newspaper className="w-10 h-10 text-primary" />
        <h1 className="text-4xl font-bold">Gaming & Security News</h1>
      </div>

      <div className="space-y-6">
        {mockNews.map(news => (
          <div key={news.id} className="bg-panel border border-secondary/20 rounded-3xl p-6 shadow-md hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center font-bold text-primary">
                  {news.author[0]}
                </div>
                <div>
                  <h3 className="font-bold">{news.author}</h3>
                  <p className="text-xs text-secondary">{news.time}</p>
                </div>
              </div>
              <button className="text-secondary hover:text-primary"><Star size={20}/></button>
            </div>
            
            <h2 className="text-xl font-bold mb-3">{news.title}</h2>
            <p className="text-secondary leading-relaxed mb-6">{news.content}</p>
            
            <div className="flex gap-6 border-t border-secondary/10 pt-4 text-secondary font-medium">
              <button className="flex items-center gap-2 hover:text-primary transition-colors"><ThumbsUp size={18} /> {news.likes}</button>
              <button className="flex items-center gap-2 hover:text-primary transition-colors"><MessageCircle size={18} /> {news.comments}</button>
              <button className="flex items-center gap-2 hover:text-primary transition-colors ml-auto"><Share2 size={18} /> Share</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
