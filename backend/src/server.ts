import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

app.use(cors());
app.use(express.json());

// Basic health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Ultimate Platform Backend is running.' });
});

// Socket.io for Global Chat
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('join_global_chat', () => {
    socket.join('GLOBAL');
    console.log(`Socket ${socket.id} joined GLOBAL chat`);
  });

  socket.on('send_message', (data) => {
    // Broadcast to everyone in GLOBAL room
    io.to('GLOBAL').emit('receive_message', {
      ...data,
      timestamp: new Date(),
    });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 5000;

httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
