import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    qualification: { type: String, required: true },
    designation: { type: String, required: true },
    departmentId: { type: String, required: true },
    departmentName: { type: String, required: true },
    experienceYears: { type: Number, required: true },
    specializations: [{ type: String }],
    opdSchedule: { type: String, required: true },
    room: { type: String },
    languages: [{ type: String }],
    image: { type: String }
  },
  { timestamps: true }
);

export const Doctor = mongoose.model('Doctor', doctorSchema);
