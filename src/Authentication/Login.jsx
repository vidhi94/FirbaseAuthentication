import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import {app} from '../Firebase'

const auth = getAuth(app)

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

   const login=()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((value)=>{console.log("Login in successfull")})
    .catch((error)=>{console.log(error)})
   }

  return (
    <>
     <h3><u>Login Page</u></h3>
    <label>Email : </label>
    <input type="email" placeholder='enter the email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <br /><br />
    <label>Password : </label>
    <input type="password" placeholder='enter the password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <br /><br />
    <button onClick={login}>Login</button>
    <br /><br /><br /><br />
    </>
  )
}

export default Login