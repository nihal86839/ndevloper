import React from 'react';
import { Image as ImageIcon, Download } from 'lucide-react';

const mockPhotos = [
  { id: 1, title: 'Cyberpunk Cityscape', category: 'Wallpapers', url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Hacker Terminal Setup', category: 'Setup', url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Abstract Data Nodes', category: 'Abstract', url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Neon Controller', category: 'Gaming', url: 'https://images.unsplash.com/photo-1614294149010-950b698f72c0?auto=format&fit=crop&q=80&w=800' },
];

const Photos = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold flex items-center gap-3">
          <ImageIcon className="text-primary w-10 h-10" /> HD Photos & Wallpapers
        </h1>
        <p className="text-secondary mt-2">Download high-quality gaming and hacker themed backgrounds.</p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {mockPhotos.map(photo => (
          <div key={photo.id} className="relative group rounded-2xl overflow-hidden break-inside-avoid shadow-lg">
            <img src={photo.url} alt={photo.title} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
              <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1">{photo.category}</span>
              <h3 className="text-white font-bold text-xl mb-4">{photo.title}</h3>
              <button className="bg-primary hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
                <Download size={18} /> Download HD
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
