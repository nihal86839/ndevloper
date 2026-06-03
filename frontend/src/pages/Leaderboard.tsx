import React from 'react';
import { Trophy, Crown, Medal } from 'lucide-react';

const mockUsers = [
  { rank: 1, name: 'HackerPro99', xp: '142,500', level: 85 },
  { rank: 2, name: 'CyberNinja', xp: '120,400', level: 78 },
  { rank: 3, name: 'GamerDude', xp: '95,200', level: 65 },
  { rank: 4, name: 'SpeedRunner', xp: '88,100', level: 62 },
  { rank: 5, name: 'NoobMaster', xp: '45,000', level: 42 },
];

const Leaderboard = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold flex justify-center items-center gap-3">
          <Trophy className="text-primary w-10 h-10" /> Global Leaderboard
        </h1>
        <p className="text-secondary text-lg">Top users ranked by XP, Reputation, and Achievements.</p>
      </div>

      <div className="flex justify-center gap-4 mb-8">
        <button className="px-6 py-2 bg-primary text-white font-bold rounded-xl shadow-lg">XP Points</button>
        <button className="px-6 py-2 bg-panel border border-secondary/30 text-secondary font-bold rounded-xl hover:text-foreground">Reputation</button>
      </div>

      <div className="bg-panel border border-secondary/20 rounded-3xl overflow-hidden shadow-2xl">
        {mockUsers.map((user, index) => (
          <div key={user.rank} className={`flex items-center gap-6 p-6 border-b border-secondary/10 hover:bg-secondary/5 transition-colors
            ${index === 0 ? 'bg-yellow-500/10' : ''}
            ${index === 1 ? 'bg-gray-400/10' : ''}
            ${index === 2 ? 'bg-orange-500/10' : ''}
          `}>
            <div className="w-12 text-center font-black text-2xl text-secondary">
              {index === 0 ? <Crown className="mx-auto text-yellow-500" size={32} /> : 
               index === 1 ? <Medal className="mx-auto text-gray-400" size={28} /> : 
               index === 2 ? <Medal className="mx-auto text-orange-500" size={28} /> : 
               `#${user.rank}`}
            </div>
            
            <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center font-bold text-xl">
              {user.name[0]}
            </div>
            
            <div className="flex-1">
              <h3 className={`font-bold text-xl ${index === 0 ? 'text-yellow-500' : ''}`}>{user.name}</h3>
              <p className="text-sm text-secondary">Level {user.level}</p>
            </div>
            
            <div className="text-right">
              <div className="font-black text-2xl">{user.xp}</div>
              <div className="text-xs text-secondary font-bold">XP POINTS</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
