 import React from "react"
import Signup from "./SignUp"
import {Container} from 'react-bootstrap'
import { AuthProvider } from "../contexts/AuthContext"
import axios from "axios";
import { useEffect, useState } from "react";
 
 
function App(){

const [listOfPlaylists, setListOfPlaylists] = useState([]);

useEffect(() => {

  axios.get("http://localhost:9000/playlist").then((response) =>{
    setListOfPlaylists(response.data)
    console.log(response.data);

  })

}, [])

 return (

  <div>
    <div className="Playlists">
      {listOfPlaylists.map((value, key) => {
        return <div>{value.title}</div>
        })}
    </div>

  <AuthProvider>
    <Container className = "d-flex align-items-center justify-content-center"
   style = {{minHeight: "100vh"}}
   >
     <div className = "w-100" style = {{maxWidth: "500px"}}>
 <Signup />
 </div>
 </Container>
 </AuthProvider>

  </div>

 
 
 )
}
 
export default App
 

