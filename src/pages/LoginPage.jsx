import React, { useEffect } from 'react'
import { fetchUsers } from './../services/api';

function LoginPage() {
  
  useEffect(()=>{
      fetchUsers()
      .then((response)=>{console.log(response.data)})
      .catch((error)=>console.log("error fetching data: ",error));
    },[]);

  return (
    <div>
      LoginPage
    </div>
  )
}

export default LoginPage