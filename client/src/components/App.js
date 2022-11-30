 import React from "react"
import Signup from "./SignUp"
import {Container} from 'react-bootstrap'
import { AuthProvider } from "../contexts/AuthContext"
import axios from "axios";
import { useEffect } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
 
function App(){

useEffect(() => {

  axios.get("http://localhost:9000/playlist").then((response) =>{
    console.log(response.data);

  })

}, [])

 return (
 <Container className = "d-flex align-items-center justify-content-center"
   style = {{minHeight: "100vh"}}
   >
     <div className = "w-100" style = {{maxWidth: "500px"}}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path ="/" component = {Dashboard}/>
            <Route path = "/signup" component = {Signup} />
            <Route path = "/login" component = {Login} />
          </Switch>
        </AuthProvider>
      </Router>
 </div>
 </Container>

 )
}
 
export default App
 

