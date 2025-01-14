import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    // const [cartItems, setCartItems] = useState([{
    //     "id": "2",
    //     "photoUrl": "link_to_photo2.jpg",
    //     "title": "Product 2 Title",
    //     "mrp": 105,
    //     "category": "vegetables",
    //     "quantity": 2
    // },
    // {
    //     "id": "3",
    //     "photoUrl": "link_to_photo3.jpg",
    //     "title": "Product 3 Title",
    //     "mrp": 110,
    //     "category": "snacks",
    //     "quantity": 2
    // },
    // {
    //     "id": "4",
    //     "photoUrl": "link_to_photo4.jpg",
    //     "title": "Product 4 Title",
    //     "mrp": 115,
    //     "category": "soft drinks",
    //     "quantity": 2
    // },
    // {
    //     "id": "5",
    //     "photoUrl": "link_to_photo5.jpg",
    //     "title": "Product 5 Title",
    //     "mrp": 120,
    //     "category": "oil and ghee",
    //     "quantity": 2
    // },
    // {
    //     "id": "6",
    //     "photoUrl": "link_to_photo6.jpg",
    //     "title": "Product 6 Title",
    //     "mrp": 125,
    //     "category": "dairy",
    //     "quantity": 2
    // },
    // {
    //     "id": "7",
    //     "photoUrl": "link_to_photo7.jpg",
    //     "title": "Product 7 Title",
    //     "mrp": 130,
    //     "category": "vegetables",
    //     "quantity": 2
    // },
    // {
    //     "id": "8",
    //     "photoUrl": "link_to_photo8.jpg",
    //     "title": "Product 8 Title",
    //     "mrp": 135,
    //     "category": "snacks",
    //     "quantity": 2
    // },
    // {
    //     "id": "9",
    //     "photoUrl": "link_to_photo9.jpg",
    //     "title": "Product 9 Title",
    //     "mrp": 140,
    //     "category": "soft drinks",
    //     "quantity": 2
    // },
    // {
    //     "id": "10",
    //     "photoUrl": "link_to_photo10.jpg",
    //     "title": "Product 10 Title",
    //     "mrp": 145,
    //     "category": "oil and ghee",
    //     "quantity": 2
    // },
    // {
    //     "id": "11",
    //     "photoUrl": "link_to_photo11.jpg",
    //     "title": "Product 11 Title",
    //     "mrp": 150,
    //     "category": "dairy",
    //     "quantity": 2
    // },
    // {
    //     "id": "12",
    //     "photoUrl": "link_to_photo12.jpg",
    //     "title": "Product 12 Title",
    //     "mrp": 155,
    //     "category": "vegetables",
    //     "quantity": 2
    // },
    // {
    //     "id": "13",
    //     "photoUrl": "link_to_photo13.jpg",
    //     "title": "Product 13 Title",
    //     "mrp": 160,
    //     "category": "snacks",
    //     "quantity": 2
    // },
    // {
    //     "id": "14",
    //     "photoUrl": "link_to_photo14.jpg",
    //     "title": "Product 14 Title",
    //     "mrp": 165,
    //     "category": "soft drinks",
    //     "quantity": 2
    // },
    // {
    //     "id": "15",
    //     "photoUrl": "link_to_photo15.jpg",
    //     "title": "Product 15 Title",
    //     "mrp": 170,
    //     "category": "oil and ghee",
    //     "quantity": 2
    // }]);

    const addToCart = (item) => {
        setCartItems(prevItems => {
            const itemExists = prevItems.find(cartItem => cartItem.id === item.id);
            if (itemExists) {
                return prevItems.map(cartItem =>
                    cartItem.id === item.id ? { ...itemExists, quantity: itemExists.quantity + 1 } : cartItem
                );
            }
            return [...prevItems, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCartItems(prevItems => {
            const itemExists = prevItems.find(cartItem => cartItem.id === id);
            if (itemExists.quantity > 1) {
                return prevItems.map(cartItem =>
                    cartItem.id === id ? { ...itemExists, quantity: itemExists.quantity - 1 } : cartItem
                );
            }
            return prevItems.filter(cartItem => cartItem.id !== id);
        });
    };

    const value = { cartItems, addToCart, removeFromCart };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
