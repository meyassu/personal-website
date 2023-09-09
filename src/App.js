import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import About from './components/About'
import Work from './components/Work';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Menu from './components/Menu'

function App() {

  return (
    <Router>
        <Menu/>
      
      <div>
        <Routes>
            <Route path="/about" element={<About />} />
        </Routes>
      </div>

      <div>
        <Routes>
            <Route path="/work" element={<Work />} />
        </Routes>
      </div>

      <div>
        <Routes>
            <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>

      <div>
        <Routes>
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
     
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>

    </Router>
  );
}

export default App;
