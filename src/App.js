import React, { useState, useEffect } from "react";

const THRESHOLD = 1000;

const PRODUCTS = [
      { id: 1, name: "Laptop", price: 500, image: "data:image/jpeg;base64,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" },
      { id: 2, name: "Phone", price: 300, image: "https://th.bing.com/th/id/OIP.XqQi2pkN3SrEPVuVlPNP0wHaJz?w=156&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
      { id: 3, name: "Headphones", price: 200, image: "https://th.bing.com/th/id/OIP.RIoCeQu7xdJW2ThzximkuwHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    ];
    
    const FREE_GIFT = { id: "gift", name: "Free Gift", price: 0, image: "https://via.placeholder.com/100" };
    
    function App() {
      const [cart, setCart] = useState([]);
      const [subtotal, setSubtotal] = useState(0);
    
      // Update subtotal whenever cart changes
      useEffect(() => {
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setSubtotal(total);
    
        // Add free gift if threshold is reached, remove if dropped below
        const hasGift = cart.some(item => item.id === FREE_GIFT.id);
        if (total >= THRESHOLD && !hasGift) {
          setCart([...cart, { ...FREE_GIFT, quantity: 1 }]);
        } else if (total < THRESHOLD && hasGift) {
          setCart(cart.filter(item => item.id !== FREE_GIFT.id));
        }
      }, [cart]);
    
      // Add product to cart
      const addToCart = (product) => {
        setCart((prevCart) => {
          const existingItem = prevCart.find(item => item.id === product.id);
          if (existingItem) {
            return prevCart.map(item =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
          }
          return [...prevCart, { ...product, quantity: 1 }];
        });
      };
    
      // Update quantity in cart
      const updateQuantity = (id, quantity) => {
        setCart(prevCart =>
          prevCart
            .map(item => (item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item))
            .filter(item => item.quantity > 0 || item.id === FREE_GIFT.id)
        );
      };
    
      // Remove item from cart
      const removeFromCart = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
      };
    
      return (
        <div className="container">
          <h1>Shopping Cart</h1>
    
          {/* Progress Bar */}
          <div className="progress-bar">
            <div className="progress" style={{ width: `${Math.min((subtotal / THRESHOLD) * 100, 100)}% `}}>
              {subtotal >= THRESHOLD ? "Free Gift Unlocked!" : `Add $${THRESHOLD - subtotal} more for Free Gift!`}
            </div>
          </div>
    
          {/* Product List */}
          <h2>Products</h2>
          <div className="products">
            {PRODUCTS.map(product => (
              <div key={product.id} className="product">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>
    
          {/* Shopping Cart */}
          <h2>Cart</h2>
          <div className="cart">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>${item.price} x {item.quantity}</p>
                {item.id !== FREE_GIFT.id && (
                  <>
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </>
                )}
              </div>
            ))}
          </div>
    
          {/* Total */}
          <h3>Total: ${subtotal}</h3>
        </div>
      );
    }
    
    export default App;
    