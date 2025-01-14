import PropTypes from 'prop-types';
import { useCart } from '../context/CartContext';
import AddButton from './AddButton';

const ProductCard = ({ id, photoUrl, title, mrp, category }) => {

    const { cartItems, addToCart, removeFromCart } = useCart();

    const itemInCart = cartItems.find(item => item.id === id);
    const handleAddToCart = () => addToCart({ id, photoUrl, title, mrp, category });
    const handleRemoveFromCart = () => removeFromCart(id);

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-xs">
            <img className="w-full h-20 object-cover" src={photoUrl} alt={title} />
            <div className="p-2">
                <div className="font-bold mb-4">{title}</div>
                <div className='flex justify-between'>
                    <p className="text-gray-700 text-base"><span className="text-gray-900 font-bold">₹{mrp}</span></p>
                    <AddButton onAdd={handleAddToCart} onDelete={handleRemoveFromCart} cart={itemInCart} />
                </div>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    id: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    mrp: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
};

export default ProductCard;
