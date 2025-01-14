import HomeScreen from './pages/List'
import { useScreen } from './context/ScreenContext';
import CartPage from './pages/CartPage';

function App() {
  const { currentScreen } = useScreen()
  
  return (
    currentScreen === 'list' ? <HomeScreen /> : <CartPage />
  );
}

export default App;
