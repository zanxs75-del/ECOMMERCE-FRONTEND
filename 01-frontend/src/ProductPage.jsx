import { useState, useEffect } from 'react';
import { useCart } from './CartStore';
import { useLocation } from 'wouter';
import axios from 'axios';

import ProductCard from './ProductCard';
import { useFlashMessage } from './FlashMessageStore';

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [, setLocation] = useLocation();
  const { addToCart } = useCart();
  const { showMessage } = useFlashMessage();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/products.json');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    showMessage("New item added to cart!");
    setLocation('/cart');
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Our Products</h1>
      <div className="row">
        {products.map(p => (
          <div key={p.id} className="col-md-4 mb-4">
            <ProductCard
              imageUrl={p.imageUrl || p.image}
              productName={p.name}
              price={p.price}
              onAddToCart={() => handleAddToCart(p)}  // Fixed: proper function call
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;