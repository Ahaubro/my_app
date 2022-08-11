import logo from './logo.svg';
import './App.css';
import Layout from './pages/Layout';
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import About from './pages/About';
import Persons from './pages/Persons';

function App() {
  return (
    <div className="App">

      <br></br>
      <h1 className='text-warning display-2'> Arex side </h1>
      <br></br>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/contact' element={<Contact />}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/persons' element={<Persons/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
