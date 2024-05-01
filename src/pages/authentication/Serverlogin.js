import React, { useState } from 'react'
import axios from 'axios'
import { Modal } from 'react-bootstrap'

const Serverlogin = () => {

  const [email,setemail]=useState(null)
  const[password,setpassword]=useState(null)

  const Loginuser = async()=>{
    const data = new FormData()
    data.append("email",email)
    data.append("password",password)
    const response= await axios.post("https://manojkoravangi.com/login.php",data,{headers:{'content-type':'multipart/form-data'}})
    if(response){
      console.log(response.data.data)
      if(response.data.status=== "success"){
        localStorage.setItem("user_data",JSON.stringify(response.data.data))

       
      } else{
        setdisplaymodal(false)
      }

    }
  }



const [displaymodal,setdisplaymodal]=useState(false)

  return (
    <div>        
        <Modal show={displaymodal} onHide={()=>setdisplaymodal(false)}>
          <Modal.Header>



          </Modal.Header>
          <Modal.Body>
            <h6>hi</h6>



            
          </Modal.Body>





        </Modal>
        <div className='"col-lg-4 p-3'>
          <input placeholder="enter your email" onChange={(event)=>setemail(event.target.value)}></input>
          <input placeholder="enter your password" onChange={(event)=>setpassword(event.target.value)}></input>
          <button onClick={Loginuser}>Add</button>






        </div>



    </div>
  )
}

export default Serverlogin;