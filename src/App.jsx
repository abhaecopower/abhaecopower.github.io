
import './App.css'
import Hero from './components/Hero'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Solar from './components/Solar';
import Career from './components/Career';
import JobForm from './components/JobForm';
import Order from './components/Order';

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Hero />} />
              <Route path='/home' element={<Hero />} />
              <Route path='/about' element={<About />} />
              <Route path='/gallery' element={<Gallery/> }/>
              <Route path='/solar' element={<Solar/>}/>
              <Route path='/career' element={<Career/>} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/apply-for-job' element={<JobForm />} />
              <Route path='/order' element={<Order />} />
          </Routes>
        </BrowserRouter>
    
      </div>
    </>
  )
}

export default App
