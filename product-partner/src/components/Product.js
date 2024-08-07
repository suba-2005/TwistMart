import React from 'react';
import '../Assets/css/Product.css'; // Import the CSS file
import { FaHeart } from 'react-icons/fa'; // Import the wishlist icon

const ProductList = () => {
  const products = [
    {
      id: 1,
      image: 'https://example.com/product1.jpg',
      name: 'Product 1',
      offer: '20% off',
      price: '$100',
    },
    {
      id: 2,
      image: 'https://example.com/product2.jpg',
      name: 'Product 2',
      offer: '15% off',
      price: '$200',
    },
    // Add more products as needed
  ];

  return (
    <div className="product-grid-wrapper">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <div className="wishlist-icon">
            <FaHeart />
          </div>
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-details">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-offer">{product.offer}</p>
            <p className="product-price">{product.price}</p>
            <button className="view-shop-button">View Shop</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
