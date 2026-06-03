import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useThemeStore } from './store/themeStore';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TerminalPage from './pages/TerminalPage';
import ThemeSelector from './components/ThemeSelector';
import Login from './pages/Login';
import Register from './pages/Register';
import GlobalChat from './pages/GlobalChat';
import Settings from './pages/Settings';
import AdminDashboard from './pages/AdminDashboard';
import Games from './pages/Games';
import Donate from './pages/Donate';
import Tools from './pages/Tools';
import Videos from './pages/Videos';
import Photos from './pages/Photos';
import Songs from './pages/Songs';
import Support from './pages/Support';
import NewsFeed from './pages/NewsFeed';
import Profile from './pages/Profile';
import Forums from './pages/Forums';
import Leaderboard from './pages/Leaderboard';
import AiAssistant from './pages/AiAssistant';

function App() {
  const { theme } = useThemeStore();

  useEffect(() => {
    // Remove all previous theme classes
    document.documentElement.className = '';
    // Add the new theme class
    if (theme !== 'light') {
      document.documentElement.classList.add(`theme-${theme}`);
    }
  }, [theme]);

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300 flex flex-col">
        <Navbar />
        <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8">
          <ThemeSelector />
          <div className="mt-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/terminal" element={<TerminalPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/chat" element={<GlobalChat />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/games" element={<Games />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/photos" element={<Photos />} />
              <Route path="/songs" element={<Songs />} />
              <Route path="/support" element={<Support />} />
              <Route path="/news" element={<NewsFeed />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/forums" element={<Forums />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/ai" element={<AiAssistant />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
