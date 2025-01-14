import PropTypes from 'prop-types';
import { CATEGORIES } from "../constants";

const SearchBar = ({ selected, handleChange }) => {
  return (
    <div className="top-[56px] bg-white z-40 overflow-x-auto whitespace-nowrap">
      <div className="w-full p-2 bg-white z-50" role="search">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full p-2 text-sm rounded-md"
          aria-label="Search products"
        />
      </div>
      <div role="navigation" className='pb-1'>
        {CATEGORIES.map(category => (
          <span
            key={category}
            className={`capitalize inline-block px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 border-b-2 cursor-pointer${category === selected ? ' border-indigo-500' : ''}`}
            onClick={() => handleChange(category)}
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  selected: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SearchBar;
