import React, { useState, useEffect } from 'react';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../services/api';
import ProductForm from '../components/ProductForm';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleCreateProduct = async (productData) => {
    try {
      await createProduct(productData);
      fetchProducts(); // Refresh the list after creation
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  const handleUpdateProduct = async (productData) => {
    try {
      await updateProduct(productData._id, productData);
      fetchProducts(); // Refresh the list after update
      setSelectedProduct(null); // Clear selected product
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await deleteProduct(id);
      fetchProducts(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ProductForm
        onCreate={handleCreateProduct}
        onUpdate={handleUpdateProduct}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
      <h3>Product List</h3>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            {product.name} - {product.price}
            <button onClick={() => setSelectedProduct(product)}>Edit</button>
            <button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
