import React from 'react';
import { PlayCircle, Eye, Clock } from 'lucide-react';

const mockVideos = [
  { id: 1, title: 'Defeating the Final Boss - CyberDash', duration: '14:20', views: '1.2M', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400' },
  { id: 2, title: 'Network Sniffing Tutorial 2026', duration: '45:00', views: '345K', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400' },
  { id: 3, title: 'Top 10 Indie Games of the Month', duration: '12:15', views: '890K', image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=400' },
];

const Videos = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold flex items-center gap-3">
          <PlayCircle className="text-primary w-10 h-10" /> Exclusive Videos
        </h1>
        <p className="text-secondary mt-2">Watch gameplay, hacking tutorials, and exclusive premium content.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockVideos.map(video => (
          <div key={video.id} className="bg-panel border border-secondary/20 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer">
            <div className="relative h-48 overflow-hidden">
              <img src={video.image} alt={video.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <PlayCircle className="text-white w-16 h-16 shadow-2xl" />
              </div>
              <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
                <Clock size={12} /> {video.duration}
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-lg mb-2 line-clamp-2">{video.title}</h3>
              <div className="flex items-center text-xs text-secondary gap-2">
                <Eye size={14} /> {video.views} views • 2 days ago
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
