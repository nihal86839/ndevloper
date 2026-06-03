import React, { useState } from 'react';
import { Users, Download, DollarSign, AlertTriangle, LifeBuoy, Settings, Database, Activity } from 'lucide-react';

const AdminDashboard = () => {
  const [activeMenu, setActiveMenu] = useState('overview');

  const stats = [
    { name: 'Total Users', value: '14,235', icon: <Users size={24} className="text-blue-500" /> },
    { name: 'Downloads', value: '254K', icon: <Download size={24} className="text-green-500" /> },
    { name: 'Revenue', value: '$12,450', icon: <DollarSign size={24} className="text-yellow-500" /> },
    { name: 'Reports', value: '12', icon: <AlertTriangle size={24} className="text-red-500" /> },
  ];

  const sidebarItems = [
    { id: 'overview', name: 'Overview', icon: <Activity size={18} /> },
    { id: 'users', name: 'User Management', icon: <Users size={18} /> },
    { id: 'games', name: 'Games Content', icon: <Database size={18} /> },
    { id: 'tools', name: 'Hacking Tools', icon: <Database size={18} /> },
    { id: 'tickets', name: 'Support Tickets', icon: <LifeBuoy size={18} /> },
    { id: 'settings', name: 'Admin Settings', icon: <Settings size={18} /> },
  ];

  return (
    <div className="flex h-[80vh] bg-panel border border-secondary/20 rounded-3xl overflow-hidden shadow-2xl">
      {/* Sidebar */}
      <div className="w-64 bg-background border-r border-secondary/20 hidden md:flex flex-col">
        <div className="p-6 border-b border-secondary/20">
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
            Admin Panel
          </h2>
          <p className="text-xs text-secondary mt-1">nihalvagdoda@gmail.com</p>
        </div>
        <div className="flex-1 py-4 space-y-1">
          {sidebarItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveMenu(item.id)}
              className={`w-full flex items-center gap-3 px-6 py-3 font-medium transition-colors text-left
                ${activeMenu === item.id 
                  ? 'bg-red-500/10 text-red-500 border-r-4 border-red-500' 
                  : 'text-secondary hover:bg-secondary/10 hover:text-foreground'}`}
            >
              {item.icon} {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-gradient-to-br from-background to-panel p-8">
        {activeMenu === 'overview' && (
          <div className="space-y-8">
            <h1 className="text-3xl font-bold">Dashboard Overview</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map(stat => (
                <div key={stat.name} className="bg-background border border-secondary/20 p-6 rounded-2xl shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-sm text-secondary font-medium">{stat.name}</p>
                    <p className="text-3xl font-bold mt-1">{stat.value}</p>
                  </div>
                  <div className="p-3 bg-secondary/10 rounded-xl">
                    {stat.icon}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-background border border-secondary/20 p-6 rounded-2xl">
                <h3 className="font-bold text-lg mb-4">Recent Audit Logs</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between border-b border-secondary/10 pb-2">
                    <span className="text-secondary">System</span>
                    <span className="text-green-500">Backup Completed</span>
                  </div>
                  <div className="flex justify-between border-b border-secondary/10 pb-2">
                    <span className="text-secondary">Admin</span>
                    <span className="text-blue-500">Updated Game 'CyberDash'</span>
                  </div>
                  <div className="flex justify-between border-b border-secondary/10 pb-2">
                    <span className="text-secondary">Automod</span>
                    <span className="text-red-500">Banned user 'spamBot22'</span>
                  </div>
                </div>
              </div>

              <div className="bg-background border border-secondary/20 p-6 rounded-2xl">
                <h3 className="font-bold text-lg mb-4">Pending Verifications</h3>
                <div className="flex items-center justify-between bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-xl">
                  <div>
                    <p className="font-bold">UPI Payment: 8128196133@fam</p>
                    <p className="text-xs text-secondary mt-1">UTR: 938120391203 • $14.99</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-green-500 text-white rounded text-sm font-bold">Approve</button>
                    <button className="px-3 py-1 bg-red-500 text-white rounded text-sm font-bold">Reject</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeMenu !== 'overview' && (
          <div className="flex flex-col items-center justify-center h-full text-secondary">
             <Database size={48} className="mb-4 opacity-50" />
             <p className="text-lg">Admin module "{activeMenu}" is currently under construction.</p>
           </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
