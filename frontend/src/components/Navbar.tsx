import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Gamepad2, TerminalSquare, Video, Image, Music, MessageSquare, LifeBuoy, Settings, HeartHandshake } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Gamepad2 size={18} /> },
    { name: 'News', path: '/news', icon: <Gamepad2 size={18} /> },
    { name: 'Games', path: '/games', icon: <Gamepad2 size={18} /> },
    { name: 'Community', path: '/forums', icon: <MessageSquare size={18} /> },
    { name: 'AI Assist', path: '/ai', icon: <TerminalSquare size={18} /> },
    { name: 'Profile', path: '/profile', icon: <Settings size={18} /> },
    { name: 'Leaderboard', path: '/leaderboard', icon: <TerminalSquare size={18} /> },
    { name: 'Tools', path: '/tools', icon: <TerminalSquare size={18} /> },
    { name: 'Videos', path: '/videos', icon: <Video size={18} /> },
    { name: 'Photos', path: '/photos', icon: <Image size={18} /> },
    { name: 'Songs', path: '/songs', icon: <Music size={18} /> },
    { name: 'Global Chat', path: '/chat', icon: <MessageSquare size={18} /> },
    { name: 'Support', path: '/support', icon: <LifeBuoy size={18} /> },
    { name: 'Donate', path: '/donate', icon: <HeartHandshake size={18} /> },
    { name: 'Settings', path: '/settings', icon: <Settings size={18} /> },
    { name: 'Terminal', path: '/terminal', icon: <TerminalSquare size={18} /> },
  ];

  return (
    <nav className="bg-panel shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <span className="font-bold text-2xl text-primary tracking-tighter">UG/HP</span>
              <span className="hidden md:block font-semibold text-lg">Ultimate Platform</span>
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.slice(0, 6).map((link) => (
                <Link key={link.name} to={link.path} className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1">
                  {link.icon} {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-center gap-4">
               <Link to="/login" className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium">Login</Link>
               <Link to="/register" className="bg-primary text-white hover:bg-opacity-90 px-4 py-2 rounded-md text-sm font-medium transition-all shadow-lg shadow-primary/30">Sign Up</Link>
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-panel inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-panel border-t border-secondary/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="text-foreground hover:text-primary hover:bg-secondary/10 block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2">
                {link.icon} {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
