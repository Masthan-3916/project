import React, { useEffect } from 'react'
import { useState } from 'react';

const Login = () => {

    const serverdata={username:"masthan",id:16}
    const [loggedin,setloggedin]= useState(false);

const Loginuser=()=>{
    localStorage.setItem("user",JSON.stringify(serverdata))
    window.location.replace('Account/');
    setloggedin(true)


}
useEffect(()=>{
if(localStorage.getItem("user")){
    setloggedin(true)
   
    console.log("user is logged")

} else{
    console.log("user not logged")
    setloggedin(false)
}
},[loggedin,localStorage.getItem("user")]);

  return (

    <div className='col-4 mx-auto'>

      <input className='form-control' type='text' placeholder='Enter your Email '/>
      <input className='form-control' type='password' placeholder='Enter your Password '/>
      <input className='form-control' type='text' placeholder='Enter your Surename '/>
      <input className='form-control' type='password' placeholder='Enter your F_name '/>
      <button className='btn btn-dark w-100'onClick={Loginuser} on>Login</button>

      



    </div> 
  )
}

export default Login