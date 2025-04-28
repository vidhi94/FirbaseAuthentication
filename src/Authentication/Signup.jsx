import React, { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import {app} from '../Firebase'

const auth = getAuth(app)

const Signup = () => {

 const [email,setEmail]=useState("")
 const [password, setPassword]=useState("")

  const Signup=()=>{

   createUserWithEmailAndPassword(auth, email, password)
   .then(alert('success'))
  }
   

  return (
    <>
    <h3><u>Sign Up Page</u></h3>
    <label>Email : </label>
    <input type="email" placeholder='enter the email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    <br /><br />
    <label>Password : </label>
    <input type="password" placeholder='enter the password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
    <br /><br />
    <button onClick={Signup}>Sign up</button>
    <br /><br /><br /><br />
    </>
  )
}

export default Signup