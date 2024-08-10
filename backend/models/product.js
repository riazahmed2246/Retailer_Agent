import mongoose from 'mongoose';
import Category from './category.js'; // Import Category schema

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  barcode: { type: String, unique: true },
  lotNumber: { type: String },
  serialNumber: { type: String },
  description: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);

export default Product;
