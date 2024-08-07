import React from 'react';
import '../Assets/css/Saving.css'; // Importing the CSS file for styling

// ProductCard Component
const ProductCard = ({ image, offer, title, price }) => {
  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <img src={image} alt={title} className="product-card__image" />
        <div className="product-card__offer">{offer}</div>
        <button className="product-card__wishlist">
          <i className="fa fa-heart"></i>
        </button>
      </div>
      <div className="product-card__details">
        <h3 className="product-card__title">{title}</h3>
        <p className="product-card__price">${price}</p>
        <button className="product-card__add-to-cart">Add to Cart</button>
      </div>
      \<div className="product-card__image-container">
        <img src={image} alt={title} className="product-card__image" />
        <div className="product-card__offer">{offer}</div>
        <button className="product-card__wishlist">
          <i className="fa fa-heart"></i>
        </button>
      </div>
      <div className="product-card__details">
        <h3 className="product-card__title">{title}</h3>
        <p className="product-card__price">${price}</p>
        <button className="product-card__add-to-cart">Add to Cart</button>
      </div>
      <div className="product-card__image-container">
        <img src={image} alt={title} className="product-card__image" />
        <div className="product-card__offer">{offer}</div>
        <button className="product-card__wishlist">
          <i className="fa fa-heart"></i>
        </button>
      </div>
      <div className="product-card__details">
        <h3 className="product-card__title">{title}</h3>
        <p className="product-card__price">${price}</p>
        <button className="product-card__add-to-cart">Add to Cart</button>
      </div>
      <div className="product-card__image-container">
        <img src={image} alt={title} className="product-card__image" />
        <div className="product-card__offer">{offer}</div>
        <button className="product-card__wishlist">
          <i className="fa fa-heart"></i>
        </button>
      </div>
      <div className="product-card__details">
        <h3 className="product-card__title">{title}</h3>
        <p className="product-card__price">${price}</p>
        <button className="product-card__add-to-cart">Add to Cart</button>
      </div>
      <div className="product-card__image-container">
        <img src={image} alt={title} className="product-card__image" />
        <div className="product-card__offer">{offer}</div>
        <button className="product-card__wishlist">
          <i className="fa fa-heart"></i>
        </button>
      </div>
      <div className="product-card__details">
        <h3 className="product-card__title">{title}</h3>
        <p className="product-card__price">${price}</p>
        <button className="product-card__add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

// ProductCardGrid Component
const ProductCardGrid = ({ products }) => {
  return (
    <div className="product-card-grid">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          offer={product.offer}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
};

// Usage Example
const App = () => {
  const products = [
    { image: 'path/to/image1.jpg', offer: '20% OFF', title: 'Product 1', price: '29.99' },
    { image: 'path/to/image2.jpg', offer: '15% OFF', title: 'Product 2', price: '19.99' },
    { image: 'path/to/image3.jpg', offer: '30% OFF', title: 'Product 3', price: '39.99' },
    { image: 'path/to/image4.jpg', offer: '10% OFF', title: 'Product 4', price: '24.99' },
    { image: 'path/to/image5.jpg', offer: '25% OFF', title: 'Product 5', price: '34.99' },
    // Add more products as needed
  ];

  return (
    <div className="app">
      <ProductCardGrid products={products} />
    </div>
  );
};

export default App;
