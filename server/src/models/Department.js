import mongoose from 'mongoose';

const departmentSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    code: { type: String, required: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    icon: { type: String, default: 'Stethoscope' },
    shortDescription: { type: String, required: true },
    headOfDepartment: { type: String },
    features: [{ type: String }],
    opdTimings: { type: String },
    floorLocation: { type: String }
  },
  { timestamps: true }
);

export const Department = mongoose.model('Department', departmentSchema);
