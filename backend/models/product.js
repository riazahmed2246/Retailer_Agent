import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  barcode: { type: String, unique: true },
  category: { type: String, required: true },
  stock: { type: Number, default: 0 },
  lowStockThreshold: { type: Number, default: 10 }, // Example threshold for low stock
  overstockThreshold: { type: Number, default: 100 }, // Example threshold for overstock
  imageUrl: { type: String }
}, {
  timestamps: true
});

const Product = mongoose.model('Product', productSchema);

export default Product;
