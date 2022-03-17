import Header from './components/Header';
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/About" element={ <About />} />
          <Route path="/Contact" element={ <Contact /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
