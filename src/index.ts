// server.ts

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Load environment variables
dotenv.config();

// Import route handlers
import authRoutes from './routes/auth';
import resultRoutes from './routes/resultRoutes';

const app = express();

// 🛡️ Middleware
app.use(cors()); // Handle Cross-Origin requests
app.use(express.json()); // Parse JSON request bodies

// 🔗 API Routes
app.use('/api/auth', authRoutes);
app.use('/api/results', resultRoutes);

// ⚙️ Configuration
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error('❌ Missing MONGO_URI in environment variables');
  process.exit(1);
}

// 🧬 Connect to MongoDB and start server
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () =>
      console.log(`🚀 Server is running at http://localhost:${PORT}`)
    );
  })
  .catch((error) => {
    console.error('❌ Failed to connect to MongoDB:', error);
    process.exit(1);
  });
