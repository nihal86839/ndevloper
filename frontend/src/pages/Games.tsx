import React, { useState } from 'react';
import { Search, Download, Star, Filter } from 'lucide-react';

const mockGames = [
  { id: 1, title: 'Cyber Hunter Pro', category: 'Action', price: 'Free', rating: 4.8, image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400' },
  { id: 2, title: 'Neon Racing', category: 'Racing', price: '$4.99', rating: 4.5, image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=400' },
  { id: 3, title: 'Tactical OPS', category: 'FPS', price: 'Free', rating: 4.9, image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=400' },
  { id: 4, title: 'Space Explorer', category: 'Adventure', price: '$9.99', rating: 4.2, image: 'https://images.unsplash.com/photo-1614294149010-950b698f72c0?auto=format&fit=crop&q=80&w=400' },
];

const Games = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold flex items-center gap-3">
            <span className="text-primary">Premium</span> Games Library
          </h1>
          <p className="text-secondary mt-2">Download top-tier games or unlock paid exclusives.</p>
        </div>
        
        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search games..." 
              className="w-full pl-10 pr-4 py-2 bg-panel border border-secondary/20 rounded-xl focus:border-primary outline-none"
            />
          </div>
          <button className="bg-panel border border-secondary/20 p-2 rounded-xl text-secondary hover:text-primary">
            <Filter />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockGames.map(game => (
          <div key={game.id} className="bg-panel border border-secondary/20 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all group">
            <div className="relative h-48 overflow-hidden">
              <img src={game.image} alt={game.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-2 right-2 bg-background/80 backdrop-blur text-sm font-bold px-2 py-1 rounded-md border border-secondary/20">
                {game.price}
              </div>
            </div>
            <div className="p-5">
              <div className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">{game.category}</div>
              <h3 className="font-bold text-xl mb-2">{game.title}</h3>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-yellow-500 text-sm font-bold gap-1">
                  <Star className="fill-current w-4 h-4" /> {game.rating}
                </div>
                <div className="text-xs text-secondary">10K+ DLs</div>
              </div>
              <button className="w-full flex items-center justify-center gap-2 py-2 bg-secondary/10 hover:bg-primary hover:text-white border border-secondary/20 hover:border-transparent rounded-xl font-bold transition-colors">
                <Download size={18} /> Download Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;
