
import axios from 'axios'


import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'


const Signup = () => {
  const [email,setemail]=useState(null)
  const[password,setpassword]=useState(null)
  const[F_name,setF_name]=useState(null)
  const[Surname,setSurname]=useState(null)
  const Signupuser=async()=>{
    const data=new FormData()
    data.append("email",email)
    data.append("password",password)
    data.append("Surname",Surname)
    data.append("F_name",F_name)
    const response=await axios.post("https://manojkoravangi.com/signup.php",data,{headers:{'content-type':'multipart/form-data'}})
    if(response){
      console.log(response.data.data)
      if(response.data.status ==="success"){
        setdisplaymodal(true)
      }
      else{
        setdisplaymodal(false)
      }
    }







  }



const[displaymodal,setdisplaymodal]=useState(false)


  
  return (
    <div>
      <Modal show={displaymodal} onHide={()=>setdisplaymodal(false)}>
        <Modal.Header>


        </Modal.Header>
        <Modal.Body>

          <h6>invalid</h6>
        </Modal.Body>



      </Modal>
      
      <div >
          <input className='form-control' placeholder="enter your email" onChange={(event)=>setemail(event.target.value)}></input>
          <input className='form-control' placeholder="enter your password" onChange={(event)=>setpassword(event.target.value)}></input>
          <input className='form-control'placeholder="enter your surename" onChange={(event)=>setF_name(event.target.value)}></input>
          <input className='form-control'placeholder="enter your F_name" onChange={(event)=>setSurname(event.target.value)}></input>
          <button className='form-control' className="btn-btn-success from-control" onClick={Signupuser}>Add</button>
      </div>
          











        </div>
     



  
  )
}

export default Signup