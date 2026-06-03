import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, Mail, Lock, User } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send signup request with OTP verification
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="bg-panel w-full max-w-md p-8 rounded-3xl shadow-2xl border border-secondary/20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Create Account
          </h2>
          <p className="text-secondary mt-2">Join the ultimate platform today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Username</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-secondary" />
              </div>
              <input
                type="text"
                required
                className="w-full pl-10 pr-3 py-3 rounded-xl bg-background border border-secondary/30 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                placeholder="Choose a username"
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-secondary" />
              </div>
              <input
                type="email"
                required
                className="w-full pl-10 pr-3 py-3 rounded-xl bg-background border border-secondary/30 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-secondary" />
              </div>
              <input
                type="password"
                required
                className="w-full pl-10 pr-3 py-3 rounded-xl bg-background border border-secondary/30 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                placeholder="Create a password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Confirm Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-secondary" />
              </div>
              <input
                type="password"
                required
                className="w-full pl-10 pr-3 py-3 rounded-xl bg-background border border-secondary/30 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-transparent rounded-xl shadow-lg shadow-primary/30 text-sm font-bold text-white bg-primary hover:bg-opacity-90 focus:outline-none transition-all hover:scale-[1.02] mt-2"
          >
            <UserPlus className="w-5 h-5" /> Send Verification OTP
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-secondary">
          Already have an account?{' '}
          <Link to="/login" className="font-bold text-primary hover:text-primary/80 transition-colors">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
