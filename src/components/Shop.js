import React, { useState, useEffect } from 'react';
import { db } from '../Firebase'; // Import Firestore from Firebase config
import { collection, getDocs } from 'firebase/firestore';
import './Shop.css'; // Make sure to create this CSS file

const Shop = () => {
  const [products, setProducts] = useState([]);
  const categories = ['Apparel', 'Backpacks', 'Hats', 'Tumblers'];
  const defaultImage = '/path/to/coming-soon.jpg'; // Replace with the actual path

  useEffect(() => {
    const fetchProducts = async () => {
      const productCollection = collection(db, 'products');
      const productSnapshot = await getDocs(productCollection);
      const productList = productSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productList);
    };

    fetchProducts();
  }, []);

  return (
    <div className="shop-container">
      <h1>Shop</h1>
      {categories.map((category) => (
        <div key={category} className="category-section">
          <h2>{category}</h2>
          <div className="product-list">
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <div key={product.id} className="product-card">
                  <img
                    src={product.imageUrl || defaultImage}
                    alt={product.name || "Coming Soon"}
                    className="product-image"
                  />
                  <h3>{product.name}</h3>
                  <p>Price: ${product.price}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
      {products.length === 0 && <p>No products available. Please add some!</p>}
    </div>
  );
};

export default Shop;
