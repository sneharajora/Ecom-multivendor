import React from 'react';
import { BrowserRouter,Route,Routes } from "react-router";
import UserLayout from './components/Layout/UserLayout';
import {Toaster} from 'sonner';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import CollectinPage from './pages/CollectinPage';
import ProductsDeatils from './components/Products/ProductsDeatils';
import Checkout from "./components/Cart/Checkout";
const App = () => {
  return (
    <BrowserRouter>
    <Toaster position="top-right"/>
       <Routes>
           <Route path="/" element={<UserLayout/>}>
             <Route index element={<Home/>}/>
             <Route path="login" element={<Login/>} />
             <Route path="register" element={<Register/>}/>
             <Route path="profile" element={<Profile/>}/>
             <Route path="collections/all" element={<CollectinPage/>}/>
             <Route path="product/:id" element={<ProductsDeatils/>}/>
             <Route path="checkout"  element={<Checkout/>} />
           </Route>
                          
       </Routes>
    </BrowserRouter>
  );
};
export default App