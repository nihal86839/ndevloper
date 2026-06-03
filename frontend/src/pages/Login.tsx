import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, LogIn, Github } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send login request
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="bg-panel w-full max-w-md p-8 rounded-3xl shadow-2xl border border-secondary/20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Welcome Back
          </h2>
          <p className="text-secondary mt-2">Login to your ultimate account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Email or Username</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-secondary" />
              </div>
              <input
                type="text"
                required
                className="w-full pl-10 pr-3 py-3 rounded-xl bg-background border-2 border-secondary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                placeholder="Enter email or username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-secondary" />
              </div>
              <input
                type="password"
                required
                className="w-full pl-10 pr-3 py-3 rounded-xl bg-background border-2 border-secondary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-secondary cursor-pointer hover:text-foreground">
              <input type="checkbox" className="mr-2 rounded border-secondary bg-background text-primary" />
              Remember me
            </label>
            <Link to="/forgot-password" className="text-sm font-medium text-primary hover:text-primary/80">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-transparent rounded-xl shadow-lg shadow-primary/30 text-sm font-bold text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all hover:scale-[1.02]"
          >
            <LogIn className="w-5 h-5" /> Login to Platform
          </button>
        </form>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-secondary/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-panel text-secondary">Or continue with</span>
            </div>
          </div>

          <div className="mt-6">
            <button className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl shadow-sm bg-background border border-secondary/20 hover:bg-secondary/10 font-medium transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Sign in with Google
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-secondary">
          Don't have an account?{' '}
          <Link to="/register" className="font-bold text-primary hover:text-primary/80 transition-colors">
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
