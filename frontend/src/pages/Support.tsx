import React from 'react';
import { LifeBuoy, Send, MessageSquare } from 'lucide-react';

const Support = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold flex justify-center items-center gap-3">
          <LifeBuoy className="text-primary w-10 h-10" /> Help & Support
        </h1>
        <p className="text-secondary text-lg">Create a ticket and our 24/7 team will assist you.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-panel border border-secondary/20 rounded-3xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-6">Create New Ticket</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input type="text" className="w-full bg-background border border-secondary/30 rounded-xl px-4 py-3 outline-none focus:border-primary" placeholder="Brief issue description" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select className="w-full bg-background border border-secondary/30 rounded-xl px-4 py-3 outline-none focus:border-primary appearance-none">
                <option>Payment Issue</option>
                <option>Account Recovery</option>
                <option>Download Failed</option>
                <option>Report User</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea rows={5} className="w-full bg-background border border-secondary/30 rounded-xl px-4 py-3 outline-none focus:border-primary" placeholder="Describe your issue in detail..."></textarea>
            </div>
            <button type="button" className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg flex items-center justify-center gap-2">
              <Send size={18} /> Submit Ticket
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-6">Your Recent Tickets</h2>
          <div className="bg-panel border border-secondary/20 rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg">UPI Payment Pending</h3>
              <span className="bg-yellow-500/20 text-yellow-600 px-2 py-1 rounded text-xs font-bold">OPEN</span>
            </div>
            <p className="text-sm text-secondary mb-4 line-clamp-2">I uploaded my payment screenshot but haven't received the download link yet.</p>
            <div className="flex items-center text-xs text-secondary gap-2">
              <MessageSquare size={14} /> 1 Reply • 2 hours ago
            </div>
          </div>

          <div className="bg-panel border border-secondary/20 rounded-2xl p-6 opacity-70">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg">Game Crash Issue</h3>
              <span className="bg-secondary/20 text-secondary px-2 py-1 rounded text-xs font-bold">CLOSED</span>
            </div>
            <p className="text-sm text-secondary mb-4 line-clamp-2">The latest version of CyberDash crashes on Windows 11.</p>
            <div className="flex items-center text-xs text-secondary gap-2">
              <MessageSquare size={14} /> 4 Replies • 3 days ago
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
