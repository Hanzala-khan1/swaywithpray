
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/services';
import ContactUS from './pages/ContactUS';
import Gallery from './pages/gallery';
import Blogs from './pages/Blogs';
import Portfolio from './pages/Portfolio';
import Testnomials from './pages/Testonomial';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/contact-us' element={<ContactUS />}></Route>
          <Route path='/Gallery' element={<Gallery />}></Route>
          <Route path='/blogs' element={<Blogs />}></Route>
          <Route path='/testnomials' element={<Testnomials />}></Route>
          {/* <Route path='/portfolio' element={<Portfolio />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
