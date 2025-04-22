import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Worship from './pages/Worship';
import Ministries from './pages/Ministries';
import Contact from './pages/Contact';
import Greeting from './pages/about/Greeting';
import Leaders from './pages/about/Leaders';
import History from './pages/about/History';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}>
            <Route path="greeting" element={<Greeting />} />
            <Route path="leaders" element={<Leaders />} />
            <Route path="history" element={<History />} />
          </Route>
          <Route path="worship" element={<Worship />} />
          <Route path="ministries" element={<Ministries />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
