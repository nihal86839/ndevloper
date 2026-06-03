import React, { useState } from 'react';
import { Settings as SettingsIcon, Shield, Bell, User, Monitor, CreditCard } from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', name: 'Profile', icon: <User size={18} /> },
    { id: 'account', name: 'Account Security', icon: <Shield size={18} /> },
    { id: 'preferences', name: 'Preferences', icon: <Monitor size={18} /> },
    { id: 'notifications', name: 'Notifications', icon: <Bell size={18} /> },
    { id: 'purchases', name: 'Purchase History', icon: <CreditCard size={18} /> },
  ];

  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
      {/* Settings Sidebar */}
      <div className="w-full md:w-64 space-y-2">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <SettingsIcon className="text-primary" /> Settings
        </h2>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-left
              ${activeTab === tab.id 
                ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105' 
                : 'text-secondary hover:bg-panel hover:text-foreground'}`}
          >
            {tab.icon} {tab.name}
          </button>
        ))}
      </div>

      {/* Settings Content */}
      <div className="flex-1 bg-panel border border-secondary/20 rounded-3xl p-8 shadow-xl min-h-[500px]">
        {activeTab === 'profile' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b border-secondary/20 pb-4">Public Profile</h3>
            
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                U
              </div>
              <div>
                <button className="px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-lg hover:bg-secondary/20 transition-colors font-medium">
                  Change Avatar
                </button>
                <p className="text-sm text-secondary mt-2">JPG, GIF or PNG. Max size 2MB.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div>
                <label className="block text-sm font-medium mb-2">Username</label>
                <input type="text" className="w-full bg-background border border-secondary/30 rounded-xl px-4 py-2 outline-none focus:border-primary transition-colors" defaultValue="HackerPro99" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Bio</label>
                <input type="text" className="w-full bg-background border border-secondary/30 rounded-xl px-4 py-2 outline-none focus:border-primary transition-colors" defaultValue="Ethical hacker and indie dev." />
              </div>
            </div>
            
            <div className="pt-4">
              <button className="px-6 py-2 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-opacity-90 transition-all">
                Save Changes
              </button>
            </div>
          </div>
        )}

        {activeTab === 'account' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b border-secondary/20 pb-4">Security</h3>
            <div className="bg-background border border-secondary/20 rounded-xl p-4 flex justify-between items-center">
              <div>
                <h4 className="font-bold">Two-Factor Authentication (2FA)</h4>
                <p className="text-sm text-secondary">Add an extra layer of security to your account.</p>
              </div>
              <button className="px-4 py-2 bg-green-500/10 text-green-500 border border-green-500/50 rounded-lg font-bold">Enable</button>
            </div>
            <div className="pt-4">
              <h4 className="font-bold mb-4">Change Password</h4>
              <div className="space-y-4 max-w-md">
                <input type="password" placeholder="Current Password" className="w-full bg-background border border-secondary/30 rounded-xl px-4 py-2 outline-none focus:border-primary" />
                <input type="password" placeholder="New Password" className="w-full bg-background border border-secondary/30 rounded-xl px-4 py-2 outline-none focus:border-primary" />
                <button className="px-4 py-2 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-opacity-90">Update Password</button>
              </div>
            </div>
          </div>
        )}

        {(activeTab !== 'profile' && activeTab !== 'account') && (
           <div className="flex flex-col items-center justify-center h-full text-secondary">
             <Monitor size={48} className="mb-4 opacity-50" />
             <p className="text-lg">Section "{activeTab}" is currently under construction.</p>
           </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
