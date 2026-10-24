import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import departmentRoutes from './routes/departmentRoutes.js';
import doctorRoutes from './routes/doctorRoutes.js';
import enquiryRoutes from './routes/enquiryRoutes.js';
import newsRoutes from './routes/newsRoutes.js';
import { notFoundHandler, errorHandler } from './middleware/errorHandler.js';
import { isMongoConnected } from './config/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientDistPath = path.resolve(__dirname, '../../client/dist');

const app = express();

// Middlewares
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health & System Info
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    institution: 'Brahm Shakti Hospital, Budh Vihar, New Delhi',
    service: 'Brahm Shakti Hospital Digital Redesign API Service',
    database: isMongoConnected ? 'MongoDB Connected' : 'In-Memory Demonstration Store',
    timestamp: new Date().toISOString()
  });
});

// Primary API Endpoints
app.use('/api/departments', departmentRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/enquiries', enquiryRoutes);
app.use('/api/news', newsRoutes);

// Serve static client production build if available (Production deployment on Render/Cloud)
if (fs.existsSync(clientDistPath)) {
  app.use(express.static(clientDistPath));

  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) {
      return next();
    }
    res.sendFile(path.join(clientDistPath, 'index.html'));
  });
}

// Fallback & Error handling
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
