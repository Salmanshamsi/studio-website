import './App.css'
import ABOUT from './screens/ABOUT/ABOUT.JSX';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HOME from './screens/HOME/HOME';
import ContactModal from './components/ContactModal/ContactModal';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { useState } from 'react';
import Loading from './components/loading/Loading';


function App() {

  const [contactModal,setContactModal] = useState(false);

  return (

      <BrowserRouter >
      <Navbar setContactModal={setContactModal}/>
      {/* <Loading/> */}
      <ContactModal isOpen={contactModal} setisOpen={setContactModal} />
        <Routes>
          <Route path='/' element={<HOME/>}/>
          <Route path='/about' element={<ABOUT/>}/>          
        </Routes>
      <Footer/>
      </BrowserRouter>
  )
}

export default App;
