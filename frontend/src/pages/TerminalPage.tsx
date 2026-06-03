import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

interface Log {
  id: number;
  text: string;
  type: 'input' | 'output' | 'error' | 'system';
}

const TerminalPage = () => {
  const [logs, setLogs] = useState<Log[]>([
    { id: 1, text: 'Welcome to Ultimate Hacker Terminal v2.0', type: 'system' },
    { id: 2, text: 'Type "help" to see available commands.', type: 'system' }
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef<HTMLDivElement>(null);

  const fileSystem = ['home', 'downloads', 'documents', 'secret_keys.txt'];

  const scrollToBottom = () => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [logs]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    setLogs(prev => [...prev, { id: Date.now(), text: `guest@ultimate-platform:~$ ${trimmedCmd}`, type: 'input' }]);

    const args = trimmedCmd.split(' ');
    const baseCmd = args[0].toLowerCase();

    let output = '';
    let isError = false;

    switch (baseCmd) {
      case 'help':
        output = 'Available commands: pwd, ls, ls -a, cd, mkdir, touch, cat, cp, mv, clear, whoami, uname, ps, top, help, exit, pkg';
        break;
      case 'clear':
        setLogs([]);
        return;
      case 'whoami':
        output = 'guest_user_992';
        break;
      case 'pwd':
        output = '/home/guest_user_992';
        break;
      case 'ls':
        output = fileSystem.join('  ');
        break;
      case 'uname':
        output = 'Linux ultimate-server 5.15.0-generic x86_64 GNU/Linux';
        break;
      case 'pkg':
        if (args[1] === 'install') {
          output = `Installing ${args[2] || 'package'}...\nReading package lists... Done\nBuilding dependency tree... Done\nUnpacking ${args[2]}... Success.`;
        } else if (args[1] === 'update') {
          output = 'Hit:1 http://archive.ubuntu.com/ubuntu focal InRelease\nReading package lists... Done';
        } else {
          output = 'Usage: pkg [install|update|upgrade|search] <package>';
        }
        break;
      case 'cat':
        if (args[1] === 'secret_keys.txt') {
          output = 'NICE TRY! This is just a simulation. Keep learning ethical hacking! ;)';
        } else {
          output = `cat: ${args[1] || ''}: No such file or directory`;
          isError = true;
        }
        break;
      case 'exit':
        output = 'Connection closed.';
        break;
      default:
        output = `Command '${baseCmd}' not found. Type 'help' for a list of commands.`;
        isError = true;
    }

    if (output) {
      setLogs(prev => [...prev, { id: Date.now() + 1, text: output, type: isError ? 'error' : 'output' }]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <TerminalIcon className="text-primary w-8 h-8" /> Browser Terminal
        </h1>
        <div className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm font-bold animate-pulse">
          Secure Connection Active
        </div>
      </div>
      
      <div className="bg-[#0c0c0c] rounded-xl overflow-hidden shadow-2xl border border-secondary/20">
        {/* Terminal Header */}
        <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="mx-auto text-gray-400 text-sm font-mono flex items-center gap-2">
            guest@ultimate-platform:~
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 h-[500px] overflow-y-auto font-mono text-sm" style={{ color: '#00ff00' }}>
          {logs.map((log) => (
            <div key={log.id} className="mb-2 whitespace-pre-wrap break-words">
              {log.type === 'input' ? (
                <span className="text-gray-300">{log.text}</span>
              ) : log.type === 'error' ? (
                <span className="text-red-400">{log.text}</span>
              ) : log.type === 'system' ? (
                <span className="text-blue-400 font-bold">{log.text}</span>
              ) : (
                <span>{log.text}</span>
              )}
            </div>
          ))}
          
          <div className="flex items-center mt-2">
            <span className="text-gray-300 mr-2">guest@ultimate-platform:~$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-[#00ff00] font-mono caret-[#00ff00]"
              autoFocus
              spellCheck="false"
            />
          </div>
          <div ref={endRef} />
        </div>
      </div>
    </div>
  );
};

export default TerminalPage;
