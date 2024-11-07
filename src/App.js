
import React from 'react';
import { Container } from 'react-bootstrap';
import Wines from './Wines';
import Events from './Events';
import About from './About';
import Contact from './Contact';
import NavbarComponent from './NavbarComponent';
import Hero from './HeroSection';
import './App.css';

function App() {
  return (
    <Container fluid className="p-0">
      <NavbarComponent />
      <Hero />
      <Wines />
      <Events />
      <About />
      <Contact />
    </Container>
  );
}

export default App;

