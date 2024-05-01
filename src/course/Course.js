import React, { useState } from 'react'
import axios from 'axios'

const Course = () => {
  
  const[courses,setCourses]=useState('')
  const [limit,setlimit]=useState(200)

  const skill=async({mode})=>{
    const data=new FormData()
    data.append("mode",mode)
    data.append("limit",limit)
    const response= await axios.post("https://skillsuprise.com/get-courses.php",data,{Headers:{'content-type':'multipart/dataform'}})
    if(response){
      
      
      console.log(response.data)
      setCourses(response.data)

      
      }

      
}
return (
<div>
  <button onClick={()=>{setlimit(5);skill({mode:"offline"})}}>5</button>
  <button onClick={()=>{setlimit(10);skill({mode:"offline"})}}>10</button>



  <hr></hr>
 
         <button onClick={()=>{skill({mode:"offline"})}}>offline</button>
         <button onClick={()=>{skill({mode:"live"})}}>online</button>
         <button onClick={()=>{skill({mode:"specialization"})}}>specilization</button>
         <button onClick={()=>{skill({mode:"selfpaced"})}}>selfpaced</button>
        <hr></hr>
        {courses? 
        <>
        <div className="d-flex flex-wrap ">
        {courses.map((element)=>(
          <>
          
          <div className="col-lg-3 p-2 shadow mt-3 bg-info">
          <img src={element.course_cover_url}className='w-50'></img>
          <h5><mark>{element.course_title}</mark></h5>
          <h5>{element.course_cutoff_price}</h5>
          <h5>{element.course_price}</h5>
          <h5>{element.course_student}</h5>
          <h5>{element.course_url}</h5>
          <h5>{element.course_rating}</h5>
          <h5>{element.course_seats_left}</h5>
          <h5>{element.mode}</h5>
          <h5>{element.rating}</h5>
          
         
          </div>


         </>


        ))}
        </div>
        
        </>:
        
        <></>}
   
   
  






</div>
    
)
}

 


export default Course