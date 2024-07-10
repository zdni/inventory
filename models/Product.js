import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
  name: { type: String, required: true },
  barcode: { type: String, required: true },
  imageUrl: String,
}, {
  timestamps: Date.now()
});

export default mongoose.model('Product', ProductSchema);