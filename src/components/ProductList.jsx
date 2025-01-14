import ProductCard from './ProductCard';
import { PRODUCT_LIST } from '../constants';
import { useMemo } from 'react';
import PropTypes from 'prop-types';

const ProductList = ({ category }) => {
    const filteredProducts = useMemo(() => {
        return PRODUCT_LIST.filter(product => product.category === category);
    }, [category]);
    return (
        <div className="container mx-auto px-4 mt-4">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredProducts.map(product => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        photoUrl={product.photoUrl}
                        title={product.title}
                        mrp={product.mrp}
                        category={product.category}
                    />
                ))}
            </div>
        </div>
    );
};

ProductList.propTypes = {
    category: PropTypes.string.isRequired,
};

export default ProductList;
