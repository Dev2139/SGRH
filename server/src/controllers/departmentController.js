import { Department } from '../models/Department.js';
import { departmentsData } from '../data/seedData.js';
import { isMongoConnected } from '../config/db.js';

export const getDepartments = async (req, res, next) => {
  try {
    if (isMongoConnected) {
      const dbDepartments = await Department.find().sort({ name: 1 });
      if (dbDepartments && dbDepartments.length > 0) {
        return res.status(200).json({
          success: true,
          count: dbDepartments.length,
          source: 'mongodb',
          data: dbDepartments
        });
      }
    }

    // Fallback to verified seed data
    return res.status(200).json({
      success: true,
      count: departmentsData.length,
      source: 'verified_dataset',
      data: departmentsData
    });
  } catch (error) {
    next(error);
  }
};

export const getDepartmentById = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    if (isMongoConnected) {
      const dept = await Department.findOne({ id });
      if (dept) {
        return res.status(200).json({ success: true, data: dept });
      }
    }

    const dept = departmentsData.find((d) => d.id === id || d.code.toLowerCase() === id.toLowerCase());
    if (!dept) {
      return res.status(404).json({ success: false, message: 'Department not found' });
    }

    return res.status(200).json({ success: true, data: dept });
  } catch (error) {
    next(error);
  }
};
