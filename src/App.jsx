import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './componets/Home';
import Igcard from './componets/Igcard';
import Recicard from './componets/Recicard';
import Navbar from './componets/Navbar';
import Edithere from './componets/Addhere';
import Fullreci from './componets/Fullreci';
import Removehere from './componets/Removehere';
import Login from './componets/Login';
import Signup from './componets/Signup';
import Open from './componets/Open';
import Addhere from './componets/Addhere';



function App() {
  return (
   <>
   <BrowserRouter>
  
   <Navbar/>
   <Routes>
    
    <Route path="/" element={<Home/>} />
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Signup' element={<Signup/>}/>
    <Route path='/Igcard' element={<Igcard/>}/>
    <Route path='/Open' element={<Open/>}/>
    <Route path='/Recicard' element={<Recicard/>}/>
    <Route path='/Image' element={<Home/>}/>
    <Route path='/Fullreci' element={<Fullreci/>}/>
    <Route path='/Addhere' element={<Addhere/>}/>
    <Route path='/Removehere' element={<Removehere/>}/>
   

    
   
   </Routes>
   
   </BrowserRouter>
   </>
  );
}

export default App;
