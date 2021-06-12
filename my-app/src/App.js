import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Home from './pages/home';
import Footer from './components/footer';
import Shop from './pages/shop';
import About from './pages/about';
import Error from './pages/error';


function App() {
  return (
    <>
    <Header/>
    <Home/>
    {/* <Shop/> */}
    {/* <About/> */}
    {/* <Error/> */}
    <Footer/>
    </>

  );
}

export default App;
