import React, { useState, useEffect } from 'react';
import { db } from '../Firebase';
import { collection, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore';

const UpdateProducts = () => {
  const [products, setProducts] = useState([]);
  const [productData, setProductData] = useState({
    name: '',
    category: '',
    price: '',
    imageUrl: '',
  });
  const [selectedProductId, setSelectedProductId] = useState(null);
  const categories = ['Apparel', 'Backpacks', 'Hats', 'Tumblers'];

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  // Define handleAddProduct function to add a new product to Firestore
  const handleAddProduct = async () => {
    const productCollection = collection(db, 'products');
    await addDoc(productCollection, productData); // Add new product to Firestore
    setProductData({ name: '', category: '', price: '', imageUrl: '' }); // Reset form after adding
  };

  const handleUpdateProduct = async () => {
    if (selectedProductId) {
      const productRef = doc(db, 'products', selectedProductId);
      await updateDoc(productRef, productData); // Update product in Firestore
      setProductData({ name: '', category: '', price: '', imageUrl: '' });
      setSelectedProductId(null); // Clear selected product after update
    }
  };

  const handleEditProduct = (product) => {
    setSelectedProductId(product.id);
    setProductData({
      name: product.name,
      category: product.category,
      price: product.price,
      imageUrl: product.imageUrl,
    });
  };

  return (
    <div className="update-products-container">
      <h2>{selectedProductId ? 'Update Product' : 'Add Product'}</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={productData.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={productData.price}
          onChange={handleInputChange}
        />
        <select
          name="category"
          value={productData.category}
          onChange={handleInputChange}
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={productData.imageUrl}
          onChange={handleInputChange}
        />
        <button
          type="button"
          onClick={selectedProductId ? handleUpdateProduct : handleAddProduct}
        >
          {selectedProductId ? 'Update Product' : 'Add Product'}
        </button>
      </form>

      <h2>Existing Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleEditProduct(product)}>Edit</button> {/* This calls handleEditProduct */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdateProducts;
