import React from "react"
import Signup from "./SignUp"
import {Container} from 'react-bootstrap'
import { AuthProvider } from "../contexts/AuthContext"
import axios from "axios";
import { useEffect, useState } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

 
 
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
        return 
        <div className="Playlist">
          <div className="title">{value.title}</div>
          <div className="song">{value.song}</div>
          </div>
        })}
    </div>

  

    <Container className = "d-flex align-items-center justify-content-center"
   style = {{minHeight: "100vh"}}
   >
     <div className = "w-100" style = {{maxWidth: "500px"}}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path = "/" components = {Dashboard}/>
            <Route path = "/signup" component = {Signup} />
          </Switch>
        </AuthProvider>
      </Router>
 </div>
 </Container>
 </div>
 )
}
 
export default App
 

