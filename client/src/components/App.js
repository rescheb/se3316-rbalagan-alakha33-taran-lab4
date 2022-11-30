 import React from "react"
import Signup from "./SignUp"
import {Container} from 'react-bootstrap'
import { AuthProvider } from "../contexts/AuthContext"
import axios from "axios";
import { useEffect } from "react";
 
 
function App(){

useEffect(() => {

  axios.get("http://localhost:9000/playlist").then((response) =>{
    console.log(response.data);

  })

}, [])

 return (

 <AuthProvider>
 <Container className = "d-flex align-items-center justify-content-center"
   style = {{minHeight: "100vh"}}
   >
     <div className = "w-100" style = {{maxWidth: "500px"}}>
 <Signup />
 </div>
 </Container>
 </AuthProvider>
 )
}
 
export default App
 

