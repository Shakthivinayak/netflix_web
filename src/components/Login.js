import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import Home from './Home';


export default function Login() {
  

   const nav = useNavigate()
 
   function validate(){
    let a=document.getElementById("username").value
      let b=document.getElementById("password").value
      if(a === b){
  
        nav('/home')
      }
      else{
        alert("Enter the valid mail")
      }
   }
  return (
    <div className=' form-container '>   
  <form>
    <h4 className='text'>Sign in</h4>
    <input type="text" id="username" placeholder='Email' name="username" required/>
    <br/>
    <input type="password" id="password" placeholder='Password' name="password" required/>
    <br/>
    <button onClick={()=>{validate()}}>Sign In</button>
   
  </form>
    </div>
  )
}

