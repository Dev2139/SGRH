import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import { Department } from '../models/Department.js';
import { Doctor } from '../models/Doctor.js';
import { News } from '../models/News.js';
import { departmentsData, doctorsData, newsArticlesData } from '../data/seedData.js';

const seedDatabase = async () => {
  try {
    const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/sgrh_redesign';
    await mongoose.connect(uri);
    console.log('[Seed] Connected to MongoDB.');

    // Clear existing
    await Department.deleteMany({});
    await Doctor.deleteMany({});
    await News.deleteMany({});
    console.log('[Seed] Existing collections cleared.');

    // Insert verified demonstration data
    await Department.insertMany(departmentsData);
    await Doctor.insertMany(doctorsData);
    await News.insertMany(newsArticlesData);

    console.log('[Seed] Successfully seeded:');
    console.log(` - ${departmentsData.length} Departments`);
    console.log(` - ${doctorsData.length} Doctors`);
    console.log(` - ${newsArticlesData.length} News Articles`);

    process.exit(0);
  } catch (err) {
    console.error('[Seed Error]:', err.message);
    process.exit(1);
  }
};

seedDatabase();
