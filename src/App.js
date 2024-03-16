
import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import Footer from './components/Footer';
import ProductList from './components/ProductList';

function App() {
  return <>
    <div className='App'>
      <div className='App-header'>
        {/* useReducer  */}
        {/* <Header /> */}
        {/* useRef  */}
        {/* <Hero /> */}

        {/* hoc  */}
        {/* <ClickCounter /> */}
        {/* <HoverCounter /> */}
        {/* react lifecycele  */}
        {/* <Footer /> */}
        {/* custom hooks  */}
        <ProductList />
      </div>
    </div>
  </>
}

export default App;
