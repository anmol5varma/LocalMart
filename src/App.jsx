import { useState } from 'react';
import SearchBar from './components/SearchBar';

function App() {
  const [category, setCategory] = useState('dairy')
  return (
    <div className="App">
      <SearchBar selected={category} handleChange={setCategory}/>
    </div>
  );
}

export default App;
