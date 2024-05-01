
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Contact from './Contact';
import Signup from './Signin';
import Cart from './cart/Cart';
import Defaultthems from './thems/Defaultthems';
import Footer from './component/navigation/Footer';
import Header from './component/navigation/Header';
import Home from './home/Home';
import { useEffect, useState } from 'react';
import Account from './pages/account/Account';
import Serverlogin from './pages/authentication/Serverlogin';
import Course from './course/Course';
import axios from 'axios';


function App() {
  const[loggedin,setloggedin]=useState(false)
  useEffect(()=>{
    if(localStorage.getItem("user")){

console.log("user logged")
setloggedin(true)



    }
    else{
      console.log("user not logged")
      setloggedin(false)
    }






  },[loggedin,localStorage.getItem("user")])


  return (
    <div className="App">
      <BrowserRouter>
     <Defaultthems>
      <>
      <Routes>
      <Route path='/account' element={loggedin?<Account Header={Header} name={'manoj'} age={26}/>:<login/>}></Route>

      <Route path='/server' element={<Serverlogin/>}></Route>
      <Route path='/Signup' element={<Signup />}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/Homepage' element={<Home/>}></Route>
      <Route path='/footer' element={<Footer/>}></Route> 
      <Route path='/Header' element={<Header/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/course' element={<Course/>}></Route>
      
      

    </Routes>
  </>   
</Defaultthems>


      </BrowserRouter>

    </div>
  );
}

export default App;
