import mongoose from "mongoose";

const StockMoveSchema = new mongoose.Schema({

}, {
  timestamps: Date.now()
});

export default mongoose.model('StockMove', StockMoveSchema);