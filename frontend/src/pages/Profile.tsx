import React from 'react';
import { User, Shield, Trophy, Star, Activity, UserPlus } from 'lucide-react';

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Profile Header */}
      <div className="bg-panel border border-secondary/20 rounded-3xl overflow-hidden shadow-xl relative">
        <div className="h-48 bg-gradient-to-r from-primary to-accent relative">
           <div className="absolute top-4 right-4 bg-black/50 backdrop-blur text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
             <Trophy size={16} className="text-yellow-400" /> Level 42 Hacker
           </div>
        </div>
        <div className="px-8 pb-8">
          <div className="flex justify-between items-end -mt-16 mb-6">
            <div className="w-32 h-32 rounded-full border-4 border-panel bg-background flex items-center justify-center shadow-lg relative z-10 overflow-hidden">
               <User size={64} className="text-secondary" />
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-2 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-opacity-90 flex items-center gap-2">
                <UserPlus size={18} /> Follow
              </button>
            </div>
          </div>
          
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">HackerPro99 <Shield className="text-blue-500 w-5 h-5" /></h1>
            <p className="text-secondary mt-1">Ethical hacker, indie dev, and speedrunner.</p>
            
            <div className="flex gap-6 mt-4 text-sm font-medium">
              <div className="flex flex-col"><span className="text-xl font-bold">14.2K</span><span className="text-secondary">Followers</span></div>
              <div className="flex flex-col"><span className="text-xl font-bold">120</span><span className="text-secondary">Following</span></div>
              <div className="flex flex-col"><span className="text-xl font-bold">4.8k</span><span className="text-secondary">Reputation</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress and Stats */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-panel border border-secondary/20 rounded-3xl p-6 shadow-md">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Activity className="text-primary"/> XP Progress</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm font-medium">
              <span>Level 42</span>
              <span className="text-secondary">8,450 / 10,000 XP</span>
            </div>
            <div className="w-full h-3 bg-secondary/20 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[84%] rounded-full shadow-[0_0_10px_rgba(var(--color-primary),0.8)]"></div>
            </div>
          </div>
        </div>

        <div className="bg-panel border border-secondary/20 rounded-3xl p-6 shadow-md">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Star className="text-yellow-500"/> Recent Achievements</h3>
          <div className="flex gap-4">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 ring-2 ring-yellow-500/50">
                <Trophy size={20} />
              </div>
              <span className="text-xs font-medium text-center">First Blood</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 ring-2 ring-blue-500/50">
                <Shield size={20} />
              </div>
              <span className="text-xs font-medium text-center">Defender</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
