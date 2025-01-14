import { useCart } from '../context/CartContext';
import { useScreen } from '../context/ScreenContext';

const CartButton = () => {
    const { cartItems } = useCart();
    const { setToCartScreen } = useScreen();

    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cartItems.reduce((total, item) => total + (item.quantity * parseFloat(item.mrp)), 0);

    return itemCount ? (
        <button onClick={() => setToCartScreen()} className="absolute left-1/2 transform -translate-x-1/2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg bottom-5">
            <div>{itemCount} item{itemCount.length > 1 && 's'}</div>
            <div>₹{totalPrice}</div>
        </button>
    ) : null;
};

export default CartButton;