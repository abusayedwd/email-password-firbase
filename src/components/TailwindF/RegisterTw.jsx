import React, { useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile} from 'firebase/auth';
  
import app from '../../firebase.config';
import { Link } from 'react-router-dom';



const auth = getAuth(app)
const RegisterTw = () => {
        const [errore, setErrore] = useState(' ') 
        const [success, setSuccess] = useState('')
     const handleSubmitTw = event =>{
      event.preventDefault();
      setSuccess('')
      setErrore('')
        
       const email = event.target.email.value;
       const password = event.target.password.value;
       const name = event.target.password.value;
       console.log( name,email, password)

      //  password validation 
        if(!/(?=.*?[A-Z])/.test(password)){
          setErrore('please one uppercase letter!!')
          return
        }else if(!/(?=.*?[#?!@$%^&*-])/.test(password)){
          setErrore("added spacial characterr one")
          return
        }else if(password.length < 6){
          setErrore("please 6 digit")
          return
        }

       createUserWithEmailAndPassword(auth, email, password)
       .then(result => {
        const registeruser = result.user;
        console.log(registeruser)
        varificationMail(result.user)
        upDateName(result.user, name)
        
        event.target.reset(' ')
        setSuccess('register successFully')
       })
       .catch(error => {
        console.error(error.message)
        setErrore(error.message)
       })
     }

     const varificationMail = user => {
          sendEmailVerification(user)
          .then(resusl => {
            alert('varify your mail !!')
          })
     }

     const upDateName = (user, name) =>{
       updateProfile(user, {
              displayName: name
      })
      .then( () => {
              console.log('update profile')
      })
      .catch(error => {
              console.log(error.message)
              setErrore(error.message)
      })
}

        return (
                <div>
                        <h2>Register TW</h2>
                   
                                         
<form onSubmit={handleSubmitTw} className='w-[60%] mx-auto mt-12'>
  <div className="mb-6">

  <label htmlFor="name" className="block mb-1">
              Name
            </label>
            <input
              type="text"
              
              id="name"
              name='name'
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="your name"required
            /> 
  <br />

    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input name='email' type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite " required/>
  </div>
  <div className="mb-6">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input name='password' type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
  </div>
   
  <p className='text-red-500 '>{errore}</p>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
<p><small>Already have an account? Please <Link to ="/loging">Loging</Link></small></p>
<p>{success}!!</p>
                </div>
        );
};

export default RegisterTw;