import mongoose from 'mongoose';
import User from './user.js'; // Import User schema
import Product from './product.js'; // Import Product schema

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
  }],
  totalAmount: { type: Number, required: true },
  paymentMethod: { type: String, enum: ['cash', 'card', 'digital'], required: true },
  status: { type: String, enum: ['pending', 'completed', 'canceled'], default: 'pending' },
  orderDate: { type: Date, default: Date.now },
  deliveryDate: { type: Date },
  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    country: { type: String }
  }
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
