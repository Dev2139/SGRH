import express from 'express';
import cors from 'cors';
import departmentRoutes from './routes/departmentRoutes.js';
import doctorRoutes from './routes/doctorRoutes.js';
import enquiryRoutes from './routes/enquiryRoutes.js';
import newsRoutes from './routes/newsRoutes.js';
import { notFoundHandler, errorHandler } from './middleware/errorHandler.js';
import { isMongoConnected } from './config/db.js';

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
    institution: 'Sir Ganga Ram Hospital, New Delhi',
    service: 'SGRH Digital Redesign API Service',
    database: isMongoConnected ? 'MongoDB Connected' : 'In-Memory Demonstration Store',
    timestamp: new Date().toISOString()
  });
});

// Primary API Endpoints
app.use('/api/departments', departmentRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/enquiries', enquiryRoutes);
app.use('/api/news', newsRoutes);

// Fallback & Error handling
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
