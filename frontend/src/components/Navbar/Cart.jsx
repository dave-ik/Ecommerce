import React from 'react';
import { useCart } from 'frontend/src/components/Navbar/CartContext.jsx';

const Cart = ({ onClose }) => {
    const { cart } = useCart();

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-80">
                <h2 className="text-lg font-semibold mb-4 text-center">Shopping Cart</h2>
                {cart.length === 0 ? (
                    <p className="text-center text-gray-800 dark:text-gray-200">Your cart is empty.</p>
                ) : (
                    <div>
                        {cart.map((item, index) => (
                            <div key={index} className="flex items-center mb-4">
                                <img src={item.img} alt={item.title} className="w-16 h-16 object-cover rounded-md mr-4" />
                                <div>
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <button
                    className="mt-4 w-full py-2 bg-primary text-white rounded hover:bg-primary-dark dark:bg-primary-dark dark:hover:bg-primary-light duration-300"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Cart;
