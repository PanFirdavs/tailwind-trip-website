
import Footer from './components/Footer';
import Hero from './components/Hero';
import ImageSlider from './components/ImageSlider';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Plan from './components/Plan';
import Rooms from './components/Rooms';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Offers />
      <Plan />
      <Rooms />
      <ImageSlider />
      <Footer />
    </div>
  );
}

export default App;

