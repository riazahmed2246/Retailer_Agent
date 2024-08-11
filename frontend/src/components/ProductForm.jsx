import React, { useState, useEffect } from 'react';

const ProductForm = ({ onCreate, onUpdate, selectedProduct, setSelectedProduct }) => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock: '',
    imageUrl: '',
  });

  useEffect(() => {
    if (selectedProduct) {
      setProduct(selectedProduct);
    } else {
      setProduct({
        name: '',
        description: '',
        price: '',
        category: '',
        stock: '',
        imageUrl: '',
      });
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedProduct) {
      onUpdate(product);
    } else {
      onCreate(product);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={product.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={product.description}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={product.price}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={product.category}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="stock"
        placeholder="Stock"
        value={product.stock}
        onChange={handleChange}
      />
      <input
        type="text"
        name="imageUrl"
        placeholder="Image URL"
        value={product.imageUrl}
        onChange={handleChange}
      />
      <button type="submit">{selectedProduct ? 'Update' : 'Create'} Product</button>
      {selectedProduct && <button type="button" onClick={() => setSelectedProduct(null)}>Cancel</button>}
    </form>
  );
};

export default ProductForm;
