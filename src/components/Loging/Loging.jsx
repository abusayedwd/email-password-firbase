import {  getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState  } from 'react';
import app from '../../firebase.config';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const auth = getAuth(app)

const Loging = () => {
        
                    
                    const [success, setSuccess] = useState('')
                    const emailRef = useRef();

         const handleSubmitloging = event =>{
                        event.preventDefault();
                        setSuccess('')
                        
                          
                         const email = event.target.email.value;
                         const password = event.target.password.value;
                         
                         console.log(email, password)
                  
                        //  password validation 
                          
                  
      signInWithEmailAndPassword(auth, email, password)
                         .then(result => {
                          const registeruser = result.user;
                          console.log(registeruser)
                          
                          event.target.reset(' ')
                          setSuccess('loging successFully')
                          setErrore(" ")
                         })
                         .catch(error => {
                          console.error(error.message)
                          
                           
                         })
                       }
                  const resetPassword = event => {
                        const email = emailRef.current.value
                        if(!email){
                                alert('please provide your email');
                                return
                        }
                        sendPasswordResetEmail(auth,email)
                        .then( () => {
                                alert('check email')
                        })
                        .catch(error => {
                                console.log(error);
                                setErrore(error.message)
                        })
                  }
        
                       

        return (
                <div>
                        <h1 className='text-2xl'>please loging!!</h1>
                         <form onSubmit={handleSubmitloging} className='w-[60%] mx-auto mt-12'>
          <div className="mb-4">
            
  <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              ref={emailRef}
              id="email"
              name='email'
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Email address"required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <input
             name='password'
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Password" required
            />
          </div>
          <div className="flex items-start mb-6">
    <div className="flex items-center h-5">
      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
    </div>
    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
                <button onClick={resetPassword}><small className='text-xl text-blue-500 underline'>Reset password</small></button> <br />
 
          <button
            type="submit"
            className="mt-8 w-2/4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <p><small>New to this Website? Please <Link to = "/registertw">Register</Link></small></p>
        <p>{success}</p>
                </div>
        );
};

export default Loging;