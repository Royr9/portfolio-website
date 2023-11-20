import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"



import Footer from './library/library_components/footer_comp/Footer';
import AppNavbar from './components/AppNavbar';
import { Container } from 'react-bootstrap';
import HeroSection from './sections/HeroSection';

export default function App() {
  return (
    <div className='App'>
<AppNavbar/>

<Container className='main'>
 <HeroSection/>

</Container>


    <Footer>
        Made By Roy Ramati
    </Footer>


    </div>
  )
}



