import './App.css';

import { TitleContext, TitleProvider } from './TitleContext';

import Header from './Header/Header';
import Carousel from './Carousel/Carousel';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <div className="container">
    <TitleProvider value="Image Carousel">
      <Header/>
      <Carousel/>
      <Footer/>
    </TitleProvider>
    </div>
  );
}

export default App;
