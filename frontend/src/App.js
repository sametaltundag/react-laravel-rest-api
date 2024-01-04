import './App.css';
import {Route,Routes,NavLink,Link, useParams} from 'react-router-dom'
import Home from './components/Home';
import EditCar from './components/EditCar';
import AddCar from './components/AddCar';
import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const { id } = useParams();

  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/car/edit/:id" element={<EditCar/>}/>
        <Route path="/car/create" element={<AddCar/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
