// import React, { useState, useEffect } from 'react';
// import { getProducts } from '../services/api'; // Import the API function
// import ProductCard from '../components/ProductCard';
// import './ProductList.css'; // Import the CSS file for styling

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await getProducts();
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="product-list">
//       <h2>Product List</h2>
//       <div className="product-grid">
//         {products.map(product => (
//           <ProductCard key={product._id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;

import React, { useState, useEffect } from 'react';
import { getProducts } from '../services/api'; // Import the API function
import ProductCard from '../components/ProductCard';
import './ProductList.css'; // Import the CSS file for styling

const ProductList = () => {
  const [lowStockProducts, setLowStockProducts] = useState([]);
  const [overStockProducts, setOverStockProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        const products = response.data;

        // Filter products based on stock levels
        const lowStock = products.filter(product => product.stock < 100);
        const overStock = products.filter(product => product.stock > 200);

        setLowStockProducts(lowStock);
        setOverStockProducts(overStock);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      <h2>Low Stock Products</h2>
      <div className="product-grid">
        {lowStockProducts.length > 0 ? (
          lowStockProducts.map(product => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p>No low stock products at the moment.</p>
        )}
      </div>

      <h2>Over Stock Products</h2>
      <div className="product-grid">
        {overStockProducts.length > 0 ? (
          overStockProducts.map(product => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p>No overstock products at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
