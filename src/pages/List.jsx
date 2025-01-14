import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import CartButton from '../components/CartButton';

function HomeList() {
  const [category, setCategory] = useState('dairy')
  
  return (
    <div className="App flex flex-col">
      <SearchBar selected={category} handleChange={setCategory} />
      <ProductList category={category} />
      <CartButton />
    </div>
  );
}

export default HomeList;
