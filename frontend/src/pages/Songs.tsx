import React from 'react';
import { Music, Play, Download, Heart } from 'lucide-react';

const mockSongs = [
  { id: 1, title: 'Neon Drive (Synthwave)', artist: 'Cyber DJ', duration: '4:20', plays: '1.2M' },
  { id: 2, title: 'Terminal Hack (Dark Electro)', artist: 'ZeroDay', duration: '3:45', plays: '890K' },
  { id: 3, title: 'Boss Fight Anthem', artist: 'EpicScores', duration: '5:12', plays: '2.1M' },
  { id: 4, title: 'Lofi Coding Session', artist: 'ChillHacker', duration: '2:30', plays: '4.5M' },
];

const Songs = () => {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div>
        <h1 className="text-4xl font-bold flex items-center gap-3">
          <Music className="text-primary w-10 h-10" /> Gaming & Focus Music
        </h1>
        <p className="text-secondary mt-2">Listen and download exclusive soundtracks and lofi beats.</p>
      </div>

      <div className="bg-panel border border-secondary/20 rounded-3xl p-2 shadow-xl">
        <div className="grid grid-cols-[auto_1fr_auto_auto_auto] gap-4 p-4 text-sm font-bold text-secondary border-b border-secondary/10 px-6">
          <div>#</div>
          <div>TITLE</div>
          <div className="hidden md:block">PLAYS</div>
          <div>TIME</div>
          <div></div>
        </div>
        
        <div className="space-y-1">
          {mockSongs.map((song, index) => (
            <div key={song.id} className="grid grid-cols-[auto_1fr_auto_auto_auto] gap-4 p-4 px-6 items-center hover:bg-secondary/10 rounded-2xl transition-colors group">
              <div className="text-secondary w-6 text-center">
                <span className="group-hover:hidden">{index + 1}</span>
                <Play className="hidden group-hover:block w-5 h-5 text-primary cursor-pointer" />
              </div>
              <div>
                <div className="font-bold text-lg">{song.title}</div>
                <div className="text-sm text-secondary">{song.artist}</div>
              </div>
              <div className="text-secondary hidden md:block">{song.plays}</div>
              <div className="text-secondary">{song.duration}</div>
              <div className="flex items-center gap-3 text-secondary">
                <Heart className="w-5 h-5 hover:text-red-500 cursor-pointer transition-colors" />
                <Download className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Songs;
