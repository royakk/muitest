import React from "react";
import Sidbar from "./components/sidbar/sidbar";
import Topbar from './components/topbar/topbar';
import Home from "./pages/homepage";
import Userlist from "./pages/userList/userlist";
import NewUser from "./pages/userList/newUser" ;
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/product/product";
function App() {
  return (
    <>
     <BrowserRouter>
   
    
    <div className="App">
      <Topbar/>
      <div className="container">
      <Sidbar/>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/users" element={<Userlist />}/>
      <Route path="/product" element={<Product />}/>
      <Route path="/newUser" element={<NewUser />}/>
          
     
      </Routes>

      </div>
    </div>
    
    
    </BrowserRouter>
    </>
  );
}

export default App;
