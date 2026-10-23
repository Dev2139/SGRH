import { Doctor } from '../models/Doctor.js';
import { doctorsData } from '../data/seedData.js';
import { isMongoConnected } from '../config/db.js';

export const getDoctors = async (req, res, next) => {
  try {
    const { department, search, specialty } = req.query;

    if (isMongoConnected) {
      let query = {};

      if (department && department !== 'all') {
        query.departmentId = department;
      }

      if (search) {
        query.$or = [
          { name: { $regex: search, $options: 'i' } },
          { designation: { $regex: search, $options: 'i' } },
          { specializations: { $in: [new RegExp(search, 'i')] } }
        ];
      }

      if (specialty) {
        query.specializations = { $in: [new RegExp(specialty, 'i')] };
      }

      const dbDoctors = await Doctor.find(query).sort({ experienceYears: -1 });
      if (dbDoctors && dbDoctors.length > 0) {
        return res.status(200).json({
          success: true,
          count: dbDoctors.length,
          source: 'mongodb',
          data: dbDoctors
        });
      }
    }

    // In-memory filter on verified dataset
    let filtered = [...doctorsData];

    if (department && department !== 'all') {
      filtered = filtered.filter(
        (doc) => doc.departmentId.toLowerCase() === department.toLowerCase()
      );
    }

    if (search) {
      const q = search.toLowerCase().trim();
      filtered = filtered.filter(
        (doc) =>
          doc.name.toLowerCase().includes(q) ||
          doc.designation.toLowerCase().includes(q) ||
          doc.departmentName.toLowerCase().includes(q) ||
          doc.specializations.some((s) => s.toLowerCase().includes(q))
      );
    }

    if (specialty) {
      const sLower = specialty.toLowerCase().trim();
      filtered = filtered.filter((doc) =>
        doc.specializations.some((s) => s.toLowerCase().includes(sLower))
      );
    }

    return res.status(200).json({
      success: true,
      count: filtered.length,
      source: 'verified_dataset',
      data: filtered
    });
  } catch (error) {
    next(error);
  }
};

export const getDoctorById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (isMongoConnected) {
      const doc = await Doctor.findOne({ id });
      if (doc) {
        return res.status(200).json({ success: true, data: doc });
      }
    }

    const doc = doctorsData.find((d) => d.id === id);
    if (!doc) {
      return res.status(404).json({ success: false, message: 'Doctor not found' });
    }

    return res.status(200).json({ success: true, data: doc });
  } catch (error) {
    next(error);
  }
};
