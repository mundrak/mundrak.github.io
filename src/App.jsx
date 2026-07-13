import './App.css';
import CursorStyles from './components/CursorStyles';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Chat from './components/Chat';
import Work from './components/Work';
import References from './components/References';
import Writing from './components/Writing';
import Wandering from './components/Wandering';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <CursorStyles />
      <Nav />
      <Hero />
      <Chat />
      <Work />
      <References />
      <Writing />
      <Wandering />
      <Footer />
    </>
  );
}

export default App;
