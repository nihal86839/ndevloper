import React, { useState } from 'react';
import { HeartHandshake, UploadCloud, CheckCircle2 } from 'lucide-react';

const Donate = () => {
  const [amount, setAmount] = useState('');
  const [utr, setUtr] = useState('');

  return (
    <div className="max-w-2xl mx-auto space-y-8 pb-12">
      <div className="text-center space-y-4">
        <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto shadow-lg shadow-primary/20">
          <HeartHandshake size={40} />
        </div>
        <h1 className="text-4xl font-bold">Support the Platform</h1>
        <p className="text-secondary text-lg">Your donations help keep our servers running and platform free.</p>
      </div>

      <div className="bg-panel border border-secondary/20 rounded-3xl p-8 shadow-2xl">
        <h2 className="text-xl font-bold mb-6 border-b border-secondary/20 pb-4">UPI Payment Gateway</h2>
        
        <div className="space-y-6">
          <div className="bg-secondary/5 rounded-2xl p-6 text-center border border-secondary/20">
             <p className="text-sm text-secondary mb-2">Scan or pay to this UPI ID</p>
             <p className="text-2xl font-bold text-primary tracking-wider">8128196133@fam</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Donation Amount (₹)</label>
            <input 
              type="number" 
              className="w-full bg-background border border-secondary/30 rounded-xl px-4 py-3 outline-none focus:border-primary text-lg font-medium" 
              placeholder="e.g., 500"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div className="border-2 border-dashed border-secondary/30 rounded-2xl p-8 text-center hover:bg-secondary/5 transition-colors cursor-pointer group">
             <UploadCloud className="w-12 h-12 text-secondary mx-auto mb-3 group-hover:text-primary transition-colors" />
             <p className="font-medium">Upload Payment Proof Screenshot</p>
             <p className="text-xs text-secondary mt-1">PNG, JPG up to 5MB</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">UTR / Reference Number</label>
            <input 
              type="text" 
              className="w-full bg-background border border-secondary/30 rounded-xl px-4 py-3 outline-none focus:border-primary" 
              placeholder="Enter 12-digit UTR number"
              value={utr}
              onChange={(e) => setUtr(e.target.value)}
            />
          </div>

          <button className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-opacity-90 transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
            <CheckCircle2 /> Submit Payment for Verification
          </button>
          
          <p className="text-xs text-center text-secondary">
            Note: Your payment will be manually verified by the admin within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Donate;
