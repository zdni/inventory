import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  role: { 
    type: String, 
    required: true,
    enum: [
      'admin',
      'staff',
    ],
    default: 'staff'
  },
}, {
  timestamps: Date.now()
});

export default mongoose.model('User', UserSchema);