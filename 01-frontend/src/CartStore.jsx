import { atom, useAtom } from 'jotai';
import Immutable from 'seamless-immutable';

const cartAtom = atom([]);

// Custom hook for cart operations
export const useCart = () => {
  const [cart, setCart] = useAtom(cartAtom);

  // Function to calculate the total price of items in the cart
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const addToCart = (product) => {
				// check if the product is already in the shopping cart
        const existingCartItem = cart.find(cartItem => cartItem.product_id === product.id);

        // if the product is not in the cart
        if (!existingCartItem) {
            // create a new cart item and add to cart
            const newCartItem = {
                id: Math.floor(Math.random() * 1000 + 1),
                product_id: product.id,
                product_name: product.name,
                image_url: product.image,
                description: product.description,
                quantity: 1,
                price: product.price
            }
            const cloned = [...cart, newCartItem];
            setCart(cloned);
        } else {
            modifyQuantity(existingCartItem.product_id, existingCartItem.quantity + 1)
        }
    }
    const modifyQuantity = (product_id, quantity) => {

        if (quantity < 1) {
            return;
        }

        // check if the product is already in the shopping cart
        const existingCartItem = cart.find(cartItem => cartItem.product_id === product_id);

        // modifying the cart item's quantity to be its current quantity + 1
        const clonedCartItem = { ...existingCartItem, "quantity": quantity };
        
        const cloned = cart.map(currentCartItem => {
             if (currentCartItem.id !== clonedCartItem.id) {
                 return currentCartItem
             } else {
                 return clonedCartItem;
             }
         })

        setCart(cloned)
    }

    const removeFromCart = (product_id) => {
      const existingCartItem = cart.find(i => i.product_id === product_id);
      const cloned = cart.filter(currentCartItem => currentCartItem.id !== existingCartItem.id)
      setCart(cloned);
  }

  return {
    cart,
    getCartTotal,
    addToCart,
    modifyQuantity,
    removeFromCart
  };
};