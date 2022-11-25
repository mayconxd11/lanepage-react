import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Main } from './componentes/Main/Main';
import Navbar from 'componentes/estaticos/Navbar/Navbar';
import { About } from 'componentes/about/About';
import { Home } from './componentes/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Router> // ORsquestrador - que monta a págia que o usuário vai ver
      <Navbar />
      <Routes> // Lista de rotas de aplicação
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
