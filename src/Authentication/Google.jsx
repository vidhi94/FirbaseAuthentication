import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'
import { app } from '../Firebase'

  const auth = getAuth(app)
  const providar = new GoogleAuthProvider

const Google = () => {

const [user, setUser] = useState("")

  const handelgoogle=()=>{
    signInWithPopup(auth, providar)
    .then((result)=>{
        const loggedUser = result.user
        setUser(loggedUser)
        console.log("logged in user", loggedUser)
    })
    .catch((error)=>{
        console.log("error", error)
    })

  }

  return (
    <div>
         <h3><u>Sign up with Google Page</u></h3>
        <button onClick={handelgoogle}>Sign up with Google</button>
        {
            user && (
                <div>
                    <h2>Welcome, {user.displayName}</h2>
                    <p>{user.email}</p>
                    <img src={user.photoURL} alt="" style={{width:"30px"}}/>
                </div>
            )
        }
    </div>
  )
}

export default Google