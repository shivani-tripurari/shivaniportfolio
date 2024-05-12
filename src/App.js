
import './App.css';
import Slider from "react-slick";
import Hero from './pages/Hero.jsx';
import Skills from './pages/Skills.jsx';
import Work from './pages/Work.jsx';
import ContactForm from './pages/Contact.jsx';
import FrontendWork from './pages/FrontendWork.jsx';
import FullstackWork from './pages/FullstackWork.jsx';
import UiWork from './pages/UiUxWork.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path='/work' element={<Work/>} />
        <Route path='/contact' element={<ContactForm/>} />
        <Route path='/FrontendWork' element={<FrontendWork/>} />
        <Route path='/FullstackWork' element={<FullstackWork/>} />
        <Route path='/UiWork' element={<UiWork/>} />
      </Routes>
    </BrowserRouter>
   </>

  );
}

export default App;
