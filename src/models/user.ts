import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName:  { type: String, required: true },
    email:     { type: String, required: true, unique: true },
    password:  { type: String, required: true },
    role:      { type: String, enum: ['student', 'admin'], default: 'student' },
    studentId: { type: String }, // Add this if you need student login with ID
  },
  { timestamps: true } // Adds createdAt & updatedAt automatically
);

export default mongoose.model('User', userSchema);