import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { fetchUsers } from './../services/api';

function LoginPage() {
 
  // useEffect(()=>{
  //     fetchUsers()
  //     .then((response)=>{console.log(response.data)})
  //     .catch((error)=>console.log("error fetching data: ",error));
  //   },[]);
  const nevigate=useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [loginError, setLoginError]=useState('');

  const handleLogin =  async (eventObject) =>{
    eventObject.preventDefault();   // Prevent the form from refreshing the page
    try{
        const response=await fetchUsers();
        const users= response.data; //The term data refers to the body of the response returned by the server. ( specific to the Axios library )
        
        const user = users.find((userInfo)=> userInfo.email===email && userInfo.password===password);
        if (user){
          nevigate('/voting');
          }
        else{
          setLoginError('Invalid Email or Password');
          }
    }
    catch (error){
      console.error('Error fetching users: ',error);
      setLoginError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div>
      <h1>SIGN IN</h1>
      <form onSubmit={handleLogin}>
        <section id='email'>
        <label htmlFor="userEmail"> Email: </label>
        <input 
          type="email"
          value={email}
          onChange={(userMail)=> setEmail(userMail.target.value)}
          required
        />
        </section>
        <section id='password'>
          <label htmlFor="userPassword"> Password: </label>
          <input 
            type="password"
            value={password}
            onChange={(userPassword)=>setPassword(userPassword.target.value)}
            required
          />
        </section>
              {/*render the error if loginError is not an empty string */}
        {loginError && <p style={{color:'red'}}>{loginError}</p>}
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginPage