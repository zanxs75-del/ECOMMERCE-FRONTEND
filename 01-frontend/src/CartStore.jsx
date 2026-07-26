import { atom, useAtom } from 'jotai';

// Define the initial state of the cart - empty for testing
const initialCart = [];

// Create an atom for the cart
export const cartAtom = atom(initialCart);

// Custom hook for cart operations
export const useCart = () => {
  const [cart, setCart] = useAtom(cartAtom);

  // Function to calculate the total price of items in the cart
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const addToCart = (product) => {
    const existingItemIndex = cart.findIndex(item => item.product_id === product.id);
    
    if (existingItemIndex !== -1) {
      // Item exists - update quantity
      const existingCartItem = cart[existingItemIndex];
      const modifiedCartItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1
      };
      
      // Use map instead of with() for better compatibility
      const modifiedCart = cart.map((item, index) => 
        index === existingItemIndex ? modifiedCartItem : item
      );
      setCart(modifiedCart);
    } else {
      // Item doesn't exist - add new item
      const newCartItem = {
        id: Math.floor(Math.random() * 10000 + 1),
        product_id: product.id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl || product.image, // Handle both property names
        description: product.description,
        quantity: 1
      };
      const modifiedCart = [...cart, newCartItem];
      setCart(modifiedCart);
    }
  };
  
 const modifyQuantity = (product_id, quantity) => {
    if (quantity < 1) return;
    
    const modifiedCart = cart.map(item => 
      item.product_id === product_id 
        ? { ...item, quantity: quantity }
        : item
    );
    setCart(modifiedCart);
  };

  const removeFromCart = (product_id) => {
    const modifiedCart = cart.filter(item => item.product_id !== product_id);
    setCart(modifiedCart);
  };

  return {
    cart,
    getCartTotal,
    addToCart,
    modifyQuantity,
    removeFromCart
  };
};
