import React, { useState } from 'react';

const Register = () => {
        const [email, setEmail] = useState('')
        const handleEmail = (event) => {
                // console.log(event.target.value)
                setEmail(event.target.value)
        }
        const handlePassword = (event) => {
                // console.log(event.target.value)
        }
        const handleSubmit = (event) =>{
                event.preventDefault();
                const email = event.target.email.value;
                const password = event.target.password.value;
                console.log(email, password)
        }
        return (
                <div>
                <h2 className='text-2xl text-green-500 font-sans font-bold'>registration</h2>
                <form onSubmit={handleSubmit}>
                        <input onChange={handleEmail} className='border-2 p-2 m-3 w-60' type="email" name="email" id="email" placeholder='Your email' /> <br />
                        <input onBlur={handlePassword} className='border-2 p-2 m-3 w-60' type="password" name="password" id="password" placeholder='password hear' /> <br />
                        <input className='bg-gray-400 rounded-lg px-6 py-2 font-bold' type="submit" value="Register" />
                </form>



                

                </div>
        );
};

export default Register;